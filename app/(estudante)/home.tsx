import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
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
        {/* SAFE AREA PARA PROTEGER APENAS A PARTE INFERIOR */}
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

          {/* CARD DE PROGRESSO */}
          <View style={styles.cardProgresso}>
            <View style={styles.progressHeader}>
              <Text style={{ fontWeight: "600", color: "#4361EE" }}>
                Progresso
              </Text>
            </View>

            <Text style={styles.progressText}>
              46min <Text style={styles.progressSubText}>/ 60min</Text>
            </Text>

            <View style={styles.progressBarBg}>
              <View style={styles.progressFill}></View>
            </View>
          </View>

          {/* GRID DE ESTATÍSTICAS */}
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Ionicons
                name="checkmark-done-circle"
                size={26}
                color="#2ecc71"
              />
              <Text style={styles.statLabel}>
                Simulados{"\n"} <Text style={styles.statNumber}>2</Text>
              </Text>
            </View>

            <View style={styles.statCard}>
              <FontAwesome5 name="chart-line" size={22} color="#f39c12" />
              <Text style={styles.statLabel}>Frequência</Text>
              <Text style={styles.statValue}>95%</Text>
            </View>

            <View style={styles.statCard}>
              <Ionicons name="trophy" size={26} color="#f1c40f" />
              <Text style={styles.statLabel}>Média</Text>
              <Text style={styles.statValue}>9</Text>
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

            <TouchableOpacity>
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

              <TouchableOpacity style={styles.btnIniciar}>
                <Text style={styles.btnIniciarText}>Iniciar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* NAVBAR FIXA */}
        <View style={styles.navbar}>
          <TouchableOpacity style={[styles.navItem]}>
            <Ionicons name="home" size={22} color="#4361EE" />
            <Text style={[styles.navLabel, styles.activeLabel]}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="book" size={22} color="#c4c4c4" />
            <Text style={styles.navLabel}>Materiais</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="clipboard" size={22} color="#c4c4c4" />
            <Text style={styles.navLabel}>Simulados</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="insert-chart" size={24} color="#c4c4c4" />
            <Text style={styles.navLabel}>Notas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="person" size={22} color="#c4c4c4" />
            <Text style={styles.navLabel}>Perfil</Text>
          </TouchableOpacity>
        </View>
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

  hello: { fontSize: 24, fontWeight: "bold", color: "#FFF" },
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

  cardProgresso: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginTop: -70,
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },

  progressText: {
    fontSize: 26,
    color: "#1f2937",
    fontWeight: "800",
  },

  progressSubText: { fontSize: 14, color: "#999", fontWeight: "400" },

  progressBarBg: {
    width: "100%",
    height: 8,
    backgroundColor: "#edf2f7",
    borderRadius: 10,
    marginTop: 10,
  },

  progressFill: {
    height: "100%",
    width: "76%",
    backgroundColor: PRIMARY,
    borderRadius: 10,
  },

  statsGrid: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  statCard: {
    width: "31%",
    backgroundColor: "#FFF",
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },

  statLabel: {
    color: "#1f2937",
    textAlign: "center",
    fontSize: 12,
    marginTop: 5,
  },

  statNumber: { fontSize: 16, fontWeight: "bold", color: PRIMARY },
  statValue: { fontSize: 16, fontWeight: "bold", color: PRIMARY },

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

  navbar: {
    position: "absolute",
    bottom: 0,
    height: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  navItem: {
    alignItems: "center",
    width: "20%",
  },

  navLabel: { fontSize: 12, color: "#c4c4c4", marginTop: 4 },

  activeLabel: { color: PRIMARY },
});
