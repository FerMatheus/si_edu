import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfessorHome() {
  const router = useRouter();
  const PRIMARY = "#4361ee";

  return (
    <View style={styles.container}>
      {/* Fundo azul do header */}

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerBackground} />

        {/* Conteúdo do Header */}
        <View style={styles.headerContent}>
          <Text style={styles.welcome}>Olá, Prof. Fernando 👋</Text>
          <Text style={styles.subtitle}>Gestão Acadêmica</Text>
        </View>

        {/* Cards de status */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNum}>4</Text>
            <Text style={styles.statLabel}>Turmas</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNum}>2</Text>
            <Text style={styles.statLabel}>Simulados Ativos</Text>
          </View>
        </View>

        {/* Busca */}
        <View style={styles.filterSection}>
          <View style={styles.searchBox}>
            <FontAwesome name="search" size={18} color="#999" />
            <TextInput
              placeholder="Buscar turma ou aluno..."
              placeholderTextColor="#999"
              style={styles.input}
            />
          </View>
        </View>

        {/* Acesso rápido */}
        <Text style={styles.sectionTitle}>Acesso Rápido</Text>

        <View style={styles.actionGrid}>
          {/* Carômetro */}
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => router.push("/(professor)/carometro")}
          >
            <View style={styles.iconCircle}>
              <FontAwesome5 name="id-card" size={20} color={PRIMARY} />
            </View>
            <Text style={styles.actionLabel}>Carômetro</Text>
          </TouchableOpacity>

          {/* Criar Simulado */}
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => router.push("/(professor)/simulados")}
          >
            <View style={styles.iconCircle}>
              <FontAwesome5 name="pen-square" size={20} color={PRIMARY} />
            </View>
            <Text style={styles.actionLabel}>Criar Simulado</Text>
          </TouchableOpacity>

          {/* Lançar Notas */}
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => router.push("/(professor)/notas")}
          >
            <View style={styles.iconCircle}>
              <FontAwesome5 name="file-signature" size={20} color={PRIMARY} />
            </View>
            <Text style={styles.actionLabel}>Lançar Notas</Text>
          </TouchableOpacity>

          {/* Frequência */}
          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.iconCircle}>
              <FontAwesome5 name="user-check" size={20} color={PRIMARY} />
            </View>
            <Text style={styles.actionLabel}>Frequência</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const PRIMARY = "#4361ee";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fd",
    overflow: "visible",
  },

  /* FUNDO DO HEADER (atrás de tudo) */
  headerBackground: {
    backgroundColor: PRIMARY,
    paddingTop: 30,
    paddingBottom: 120,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    position: "absolute",
    top: 0,
    left: 0,
    right: 0,

    zIndex: 0,
    elevation: 0,
  },

  /* CONTEÚDO DO HEADER (texto visível) */
  headerContent: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    zIndex: 5,
    elevation: 5,
  },
  welcome: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    color: "white",
    opacity: 0.9,
    marginTop: 5,
  },

  scrollContent: {
    paddingBottom: 120,
    paddingTop: 10,
  },

  /* STATUS CARDS */
  statsContainer: {
    flexDirection: "row",
    gap: 15,
    marginHorizontal: 20,
    marginTop: 5,
    zIndex: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    zIndex: 20,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  statNum: {
    fontSize: 28,
    fontWeight: "800",
    color: PRIMARY,
  },
  statLabel: {
    color: "#888",
    marginTop: 4,
  },

  /* SEARCH */
  filterSection: {
    paddingHorizontal: 20,
    marginTop: 18,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    gap: 10,
    zIndex: 20,
    elevation: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

  /* ACESSO RÁPIDO */
  sectionTitle: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "#1f2937",
  },

  actionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },

  actionCard: {
    width: "48%",
    backgroundColor: "#fff",
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,

    zIndex: 20,
    elevation: 4,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },

  iconCircle: {
    width: 55,
    height: 55,
    backgroundColor: "#eef2ff",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  actionLabel: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "600",
    color: "#1f2937",
  },
});
