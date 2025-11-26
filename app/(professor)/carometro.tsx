import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Material = {
  id: string;
  title: string;
  metaBadge: string;
  metaTag: string;
  icon: "pdf" | "youtube" | "image" | "flask";
  color: "blue" | "red" | "green" | "purple";
  actionLabel: string;
  url?: string;
};

const SAMPLE: Material[] = [
  {
    id: "1",
    title: "Resumo de Português",
    metaBadge: "PDF",
    metaTag: "Gramática",
    icon: "pdf",
    color: "blue",
    actionLabel: "Abrir",
    url: "https://example.com/Resumo-Portugues.pdf",
  },
  {
    id: "2",
    title: "Vídeo: Aulão de Crase",
    metaBadge: "Vídeo",
    metaTag: "Português",
    icon: "youtube",
    color: "red",
    actionLabel: "Assistir",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Mapa Mental - Regiões",
    metaBadge: "Img",
    metaTag: "Geografia",
    icon: "image",
    color: "green",
    actionLabel: "Ver",
    url: undefined,
  },
  {
    id: "4",
    title: "Experiência: Fotossíntese",
    metaBadge: "Vídeo",
    metaTag: "Ciências",
    icon: "flask",
    color: "purple",
    actionLabel: "Assistir",
    url: undefined,
  },
];

export default function MateriaisEstudante() {
  async function openUrl(url?: string) {
    if (!url) {
      Alert.alert("Não disponível", "Este material ainda não tem link.");
      return;
    }
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Erro", "Não foi possível abrir o link.");
      }
    } catch (err) {
      Alert.alert("Erro", "Não foi possível abrir o link.");
    }
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#f8f9fd" }}
      edges={["bottom"]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerSection}>
          <View style={styles.headerTitle}>
            <Text style={styles.headerText}>Materiais</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.linkVerTodos}>Ver todos</Text>
          </TouchableOpacity>
        </View>

        {/* Materials list */}
        <View style={styles.materialsList}>
          {SAMPLE.map((m) => (
            <TouchableOpacity
              key={m.id}
              activeOpacity={0.85}
              style={styles.materialCard}
              onPress={() => openUrl(m.url)}
            >
              <View style={[styles.iconBox, styles[`bg_${m.color}`]]}>
                {m.icon === "pdf" && (
                  <FontAwesome5
                    name="file-pdf"
                    size={20}
                    color={stylesVars.colors[m.color].icon}
                  />
                )}
                {m.icon === "youtube" && (
                  <FontAwesome
                    name="youtube"
                    size={20}
                    color={stylesVars.colors[m.color].icon}
                  />
                )}
                {m.icon === "image" && (
                  <FontAwesome5
                    name="image"
                    size={20}
                    color={stylesVars.colors[m.color].icon}
                  />
                )}
                {m.icon === "flask" && (
                  <FontAwesome5
                    name="flask"
                    size={20}
                    color={stylesVars.colors[m.color].icon}
                  />
                )}
              </View>

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{m.title}</Text>
                <View style={styles.cardMeta}>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{m.metaBadge}</Text>
                  </View>
                  <Text style={styles.metaTag}>{m.metaTag}</Text>
                </View>
              </View>

              <View>
                <Text style={styles.actionText}>{m.actionLabel}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* spacer to avoid content under tab bar */}
        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const stylesVars = {
  PRIMARY: "#4361EE",
  BG: "#f8f9fd",
  white: "#ffffff",
  textDark: "#1f2937",
  textGrey: "#9ca3af",
  colors: {
    blue: { bg: "#eef2ff", icon: "#4361ee" },
    red: { bg: "#fef2f2", icon: "#ef4444" },
    green: { bg: "#d1fae5", icon: "#10b981" },
    purple: { bg: "#f3e8ff", icon: "#8b5cf6" },
  },
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: stylesVars.BG },

  scrollContent: {
    padding: 20,
    paddingBottom: 120,
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 26,
    marginTop: 12,
  },

  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  headerText: {
    fontSize: 22,
    fontWeight: "700",
    color: stylesVars.textDark,
    marginLeft: 0,
  },

  linkVerTodos: {
    fontSize: 14,
    color: stylesVars.PRIMARY,
    fontWeight: "600",
  },

  materialsList: {
    flexDirection: "column",
    gap: 12, // modern RN versions support gap; if not, marginBottom on cards
  },

  materialCard: {
    backgroundColor: stylesVars.white,
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: "transparent",
    marginBottom: 12,
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    flexShrink: 0,
  },

  // background color helpers
  bg_blue: { backgroundColor: stylesVars.colors.blue.bg },
  bg_red: { backgroundColor: stylesVars.colors.red.bg },
  bg_green: { backgroundColor: stylesVars.colors.green.bg },
  bg_purple: { backgroundColor: stylesVars.colors.purple.bg },

  cardContent: {
    flex: 1,
    justifyContent: "center",
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: stylesVars.textDark,
    marginBottom: 6,
    lineHeight: 20,
  },

  cardMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
  },

  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#333",
  },

  metaTag: {
    fontSize: 13,
    color: stylesVars.textGrey,
  },

  actionText: {
    fontSize: 14,
    fontWeight: "600",
    color: stylesVars.textDark,
  },
});
