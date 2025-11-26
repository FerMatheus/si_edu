import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PerfilAluno() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Avatar + Nome */}
        <View style={styles.profileInfo}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{
                uri: "https://api.dicebear.com/7.x/avataaars/png?seed=Felix",
              }}
              style={styles.avatar}
            />
          </View>

          <Text style={styles.studentName}>Carlito da Silva</Text>
          <Text style={styles.studentMatricula}>Matrícula: 023-336</Text>
        </View>

        {/* Card de detalhes */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.rowLabel}>
              <FontAwesome5 name="graduation-cap" size={18} color="#9ca3af" />
              <Text style={styles.labelText}>Série</Text>
            </View>
            <Text style={styles.rowValue}>3º Ano</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.rowLabel}>
              <Ionicons name="people" size={20} color="#9ca3af" />
              <Text style={styles.labelText}>Turma Alocada</Text>
            </View>
            <Text style={styles.rowValue}>Turma B - Matutino</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.rowLabel}>
              <MaterialIcons name="school" size={20} color="#9ca3af" />
              <Text style={styles.labelText}>Turno</Text>
            </View>
            <Text style={styles.rowValue}>Manhã</Text>
          </View>
        </View>

        {/* Botão Sair */}
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => router.replace("/")}
        >
          <Ionicons name="log-out-outline" size={22} color="#ef4444" />
          <Text style={styles.logoutText}>Sair do App</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navbar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => router.push("/(estudante)/home")}
          style={styles.navItem}
        >
          <Ionicons name="home-outline" size={24} color="#c4c4c4" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/(estudante)/materiais")}
          style={styles.navItem}
        >
          <Ionicons name="book-outline" size={24} color="#c4c4c4" />
          <Text style={styles.navLabel}>Materiais</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/(estudante)/simulados")}
          style={styles.navItem}
        >
          <Ionicons name="clipboard-outline" size={24} color="#c4c4c4" />
          <Text style={styles.navLabel}>Simulados</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/(estudante)/notas")}
          style={styles.navItem}
        >
          <Ionicons name="document-text-outline" size={24} color="#c4c4c4" />
          <Text style={styles.navLabel}>Notas</Text>
        </TouchableOpacity>

        {/* Aba ativa */}
        <TouchableOpacity style={styles.navItemActive}>
          <Ionicons name="person" size={24} color="#4361ee" />
          <Text style={[styles.navLabel, { color: "#4361ee" }]}>Perfil</Text>
          <View style={styles.activeIndicator} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const PRIMARY = "#4361ee";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fd",
  },

  profileInfo: {
    alignItems: "center",
    marginTop: 60,
    zIndex: 10,
  },

  avatarWrapper: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#fff",
    borderWidth: 4,
    borderColor: "#fff",
    overflow: "hidden",
    elevation: 5,
    zIndex: 10,
  },

  avatar: {
    width: "100%",
    height: "100%",
  },

  studentName: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: "700",
    color: "#1f2937",
  },

  studentMatricula: {
    fontSize: 14,
    marginTop: 4,
    color: "#888",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 25,
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },

  rowLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  labelText: {
    color: "#9ca3af",
    fontSize: 14,
  },

  rowValue: {
    color: "#1f2937",
    fontWeight: "600",
    fontSize: 16,
  },

  logoutBtn: {
    backgroundColor: "#fee2e2",
    marginTop: 30,
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  logoutText: {
    color: "#ef4444",
    fontSize: 16,
    fontWeight: "700",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },

  navItem: {
    alignItems: "center",
    width: "20%",
  },

  navLabel: {
    fontSize: 12,
    marginTop: 3,
    color: "#c4c4c4",
  },

  navItemActive: {
    alignItems: "center",
    width: "20%",
  },

  activeIndicator: {
    position: "absolute",
    top: 0,
    width: 20,
    height: 3,
    backgroundColor: PRIMARY,
    borderRadius: 2,
  },
});
