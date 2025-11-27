import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Simulados() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <Text style={styles.title}>Simulados Disponíveis</Text>

        {/* ====================== CARD DE EXEMPLO ====================== */}
        <View style={styles.examCard}>
          <View style={styles.examTop}>
            <Text style={styles.tag}>Matemática</Text>

            <View style={styles.timeContainer}>
              <FontAwesome5 name="clock" size={14} color="#999" />
              <Text style={styles.timeText}>30 min</Text>
            </View>
          </View>

          <Text style={styles.examTitle}>Simulado Geral #1</Text>
          <Text style={styles.examInfo}>15 Questões • Nível Médio</Text>

          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={() => router.push("/(estudante)/quiz")}
          >
            <Text style={styles.btnPrimaryText}>Iniciar Simulado</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const PRIMARY = "#4361ee";
const BG = "#f8f9fd";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#333",
  },

  /* ====================== CARD ====================== */
  examCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  examTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },

  tag: {
    backgroundColor: "#e0e7ff",
    color: PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "bold",
  },

  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  timeText: {
    fontSize: 13,
    color: "#999",
  },

  examTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
    color: "#333",
  },

  examInfo: {
    fontSize: 13,
    color: "#888",
    marginBottom: 15,
  },

  btnPrimary: {
    width: "100%",
    backgroundColor: PRIMARY,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  btnPrimaryText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
