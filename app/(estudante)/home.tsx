import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeEstudante() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#ffffffff" }}
      edges={["bottom"]}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
          {/* HEADER */}
          <View style={styles.header}>
            <View style={styles.headerTop}>
              <View>
                <Text style={styles.hello}>Olá, Carlito</Text>
                <Text style={styles.welcome}>Bem-vindo!</Text>
              </View>

              <View style={styles.avatar}>
                <Image
                  source={{
                    uri: "https://api.dicebear.com/7.x/avataaars/png?seed=Felix",
                  }}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            </View>
          </View>

          {/* CARDS DE ESTATÍSTICAS RÁPIDAS */}
          <View style={styles.statsContainer}>
            <View style={styles.statCardSmall}>
              <Ionicons
                name="trophy"
                size={28}
                color="#f1c40f"
                style={{ marginBottom: 6 }}
              />
              <Text style={styles.statNum}>9</Text>
              <Text style={styles.statLabel}>Média</Text>
            </View>

            <View style={styles.statCardSmall}>
              <FontAwesome5
                name="chart-line"
                size={28}
                color="#f39c12"
                style={{ marginBottom: 6 }}
              />
              <Text style={styles.statNum}>95%</Text>
              <Text style={styles.statLabel}>Frequência</Text>
            </View>
          </View>

          {/* SEÇÃO DE SIMULADOS */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              <Ionicons
                name="document-text-outline"
                size={16}
                color="#4361EE"
              />{" "}
              Simulados
            </Text>

            <TouchableOpacity
              onPress={() => router.push("/(estudante)/simulados")}
            >
              <Text style={styles.linkVerTodos}>Ver todos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.courseList}>
            <View style={styles.courseCard}>
              <View style={styles.courseTop}>
                <Text style={styles.courseTitle}>Matemática - Frações</Text>
                <Text style={styles.badgeGreen}>Disponível</Text>
              </View>

              <Text style={styles.courseInfo}>15 questões</Text>

              <TouchableOpacity
                style={styles.btnIniciar}
                onPress={() => router.push("/(estudante)/quiz")}
              >
                <Text style={styles.btnIniciarText}>Iniciar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const PRIMARY = "#4361EE";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fd" },

  header: {
    backgroundColor: PRIMARY,
    height: 220,
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  hello: { fontSize: 24, fontWeight: "bold", color: "#FFF", marginTop: 8 },
  welcome: { color: "#E3E3E3", fontSize: 14 },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.3)",
  },

  sectionHeader: {
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  sectionTitle: { fontWeight: "700", color: "#1f2937", fontSize: 16 },
  linkVerTodos: { fontSize: 14, color: "#4361EE" },

  courseList: { paddingHorizontal: 20 },

  courseCard: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 18,
    elevation: 2,
  },

  courseTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  courseTitle: {
    fontWeight: "700",
    color: "#333",
    fontSize: 15,
  },

  badgeGreen: {
    backgroundColor: "#d1fae5",
    color: "#10b981",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: "600",
  },

  courseInfo: { fontSize: 13, color: "#999", marginBottom: 15 },

  btnIniciar: {
    backgroundColor: PRIMARY,
    paddingVertical: 12,
    borderRadius: 10,
  },

  btnIniciarText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
  },

  statsContainer: {
    flexDirection: "row",
    gap: 15,
    marginHorizontal: 20,
    marginTop: -60,
    zIndex: 50,
  },

  statCardSmall: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
  },

  statNum: {
    fontSize: 26,
    fontWeight: "800",
    color: PRIMARY,
  },

  statLabel: {
    color: "#555",
    marginTop: 4,
    fontSize: 13,
  },
});
