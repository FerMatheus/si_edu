// app/(estudante)/notas.tsx

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function NotasScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      {/* Header */}
      <View style={styles.headerSection}>
        <View style={styles.headerTitle}>
          <Ionicons name="document-text" size={22} color="#4361ee" />
          <Text style={styles.headerText}>Boletim</Text>
        </View>
        <Text style={styles.headerSubtitle}>Ano letivo 2025</Text>
      </View>

      {/* --- Matemática --- */}
      <View style={[styles.gradeCard, styles.good]}>
        <View style={styles.subjectHeader}>
          <Text style={styles.subjectName}>Matemática</Text>
          <Text style={[styles.statusPill, styles.statusGood]}>Aprovado</Text>
        </View>

        <View style={styles.gradeRow}>
          <Text>1º Bimestre</Text>
          <Text style={[styles.gradeVal, styles.high]}>8.5</Text>
        </View>

        <View style={styles.gradeRow}>
          <Text>2º Bimestre</Text>
          <Text style={[styles.gradeVal, styles.high]}>9.0</Text>
        </View>

        <View style={styles.gradeRow}>
          <Text>3º Bimestre</Text>
          <Text style={styles.gradeVal}>--</Text>
        </View>
      </View>

      {/* --- Português --- */}
      <View style={[styles.gradeCard, styles.bad]}>
        <View style={styles.subjectHeader}>
          <Text style={styles.subjectName}>Português</Text>
          <Text style={[styles.statusPill, styles.statusBad]}>Atenção</Text>
        </View>

        <View style={styles.gradeRow}>
          <Text>1º Bimestre</Text>
          <Text style={[styles.gradeVal, styles.low]}>5.5</Text>
        </View>

        <View style={styles.gradeRow}>
          <Text>2º Bimestre</Text>
          <Text style={[styles.gradeVal, styles.high]}>7.0</Text>
        </View>

        <View style={styles.gradeRow}>
          <Text>Média Parcial</Text>
          <Text style={[styles.gradeVal, styles.low]}>6.2</Text>
        </View>
      </View>

      {/* --- História --- */}
      <View style={[styles.gradeCard, styles.avg]}>
        <View style={styles.subjectHeader}>
          <Text style={styles.subjectName}>História</Text>
          <Text style={[styles.statusPill, styles.statusAvg]}>Em Curso</Text>
        </View>

        <View style={styles.gradeRow}>
          <Text>1º Bimestre</Text>
          <Text style={styles.gradeVal}>7.5</Text>
        </View>

        <View style={styles.gradeRow}>
          <Text>2º Bimestre</Text>
          <Text style={styles.gradeVal}>7.0</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f9fd",
    padding: 20,
  },

  // Header
  headerSection: {
    marginBottom: 25,
    marginTop: 10,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1f2937",
  },
  headerSubtitle: {
    marginTop: 4,
    color: "#999",
    fontSize: 14,
  },

  // Card
  gradeCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    borderLeftWidth: 5,
  },

  good: { borderLeftColor: "#10b981" },
  bad: { borderLeftColor: "#ef4444" },
  avg: { borderLeftColor: "#f59e0b" },

  subjectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  subjectName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1f2937",
  },

  // Status pill
  statusPill: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontWeight: "700",
    fontSize: 12,
    textTransform: "uppercase",
  },

  statusGood: { backgroundColor: "#d1fae5", color: "#10b981" },
  statusBad: { backgroundColor: "#fee2e2", color: "#ef4444" },
  statusAvg: { backgroundColor: "#fef3c7", color: "#f59e0b" },

  // Grade rows
  gradeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  gradeVal: {
    fontWeight: "700",
    color: "#1f2937",
  },

  high: { color: "#10b981" },
  low: { color: "#ef4444" },
});
