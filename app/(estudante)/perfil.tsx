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
      {/* Topo curvo */}

      <ScrollView contentContainerStyle={{ paddingBottom: 140 }}>
        <View style={styles.headerBackground} />
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

        {/* Card principal */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.rowLabel}>
              <FontAwesome5 name="graduation-cap" size={18} color="#3b82f6" />
              <Text style={styles.labelText}>Série</Text>
            </View>
            <Text style={styles.rowValue}>3º Ano</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.rowLabel}>
              <Ionicons name="people" size={20} color="#22c55e" />
              <Text style={styles.labelText}>Turma Alocada</Text>
            </View>
            <Text style={styles.rowValue}>Turma B - Matutino</Text>
          </View>

          <View style={styles.rowLast}>
            <View style={styles.rowLabel}>
              <MaterialIcons name="school" size={20} color="#f97316" />
              <Text style={styles.labelText}>Turno</Text>
            </View>
            <Text style={styles.rowValue}>Manhã</Text>
          </View>
        </View>

        {/* Ações rápidas */}
        <View style={styles.actionsBox}>
          <Text style={styles.actionTitle}>Ações rápidas</Text>

          <TouchableOpacity style={styles.actionItem}>
            <Ionicons name="lock-closed-outline" size={22} color="#4361ee" />
            <Text style={styles.actionText}>Alterar senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <Ionicons name="notifications-outline" size={22} color="#4361ee" />
            <Text style={styles.actionText}>Configurar notificações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <Ionicons name="person-circle-outline" size={22} color="#4361ee" />
            <Text style={styles.actionText}>Dados cadastrais</Text>
          </TouchableOpacity>
        </View>

        {/* Botão Sair */}
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => router.replace("/")}
        >
          <View style={styles.logoutIconCircle}>
            <Ionicons name="log-out-outline" size={20} color="#ef4444" />
          </View>
          <Text style={styles.logoutText}>Sair do App</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const PRIMARY = "#4361ee";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fd",
  },

  headerBackground: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 180,
    backgroundColor: PRIMARY,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },

  profileInfo: {
    alignItems: "center",
    marginTop: 50,
    zIndex: 10,
  },

  avatarWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#fff",
    borderWidth: 5,
    borderColor: "#fff",
    overflow: "hidden",
    elevation: 6,
  },

  avatar: {
    width: "100%",
    height: "100%",
  },

  studentName: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: "800",
    color: "#1f2937",
  },

  studentMatricula: {
    fontSize: 14,
    marginTop: 4,
    color: "#6b7280",
  },

  /* Card principal */
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 25,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#f1f1f1",
  },

  rowLast: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },

  rowLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  labelText: {
    color: "#6b7280",
    fontSize: 14,
  },

  rowValue: {
    color: "#1f2937",
    fontWeight: "700",
    fontSize: 16,
  },

  /* Ações rápidas */
  actionsBox: {
    marginTop: 35,
    marginHorizontal: 20,
  },

  actionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 15,
  },

  actionItem: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
    elevation: 2,
  },

  actionText: {
    fontSize: 15,
    color: "#374151",
    fontWeight: "500",
  },

  /* Logout */
  logoutBtn: {
    backgroundColor: "#ffe4e6",
    marginTop: 30,
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  logoutIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  logoutText: {
    color: "#ef4444",
    fontSize: 16,
    fontWeight: "700",
  },
});
