import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NotasAluno() {
  const router = useRouter();

  const boletim = [
    {
      id: 1,
      materia: "Matemática",
      status: "Aprovado",
      statusType: "good",
      notas: [
        { label: "1º Bimestre", valor: "8.5" },
        { label: "2º Bimestre", valor: "9.0" },
        { label: "3º Bimestre", valor: "--" },
      ],
    },
    {
      id: 2,
      materia: "Português",
      status: "Atenção",
      statusType: "bad",
      notas: [
        { label: "1º Bimestre", valor: "5.5" },
        { label: "2º Bimestre", valor: "7.0" },
        { label: "Média Parcial", valor: "6.2" },
      ],
    },
    {
      id: 3,
      materia: "História",
      status: "Em Curso",
      statusType: "avg",
      notas: [
        { label: "1º Bimestre", valor: "7.5" },
        { label: "2º Bimestre", valor: "7.0" },
      ],
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f9fd" }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 120 }}>

        {/* Header */}
        <View style={styles.headerSection}>
          <Text style={styles.headerTitle}>📄 Boletim</Text>
          <Text style={styles.headerSubtitle}>Ano letivo 2025</Text>
        </View>

        {/* Cards */}
        {boletim.map((item) => (
          <GradeCard key={item.id} data={item} />
        ))}
      </ScrollView>

      {/* Navbar */}
      <View style={styles.bottomNav}>
        <NavItem icon="🏠" label="Home" active={false} />
        <NavItem icon="📚" label="Materiais" active={false} />
        <NavItem icon="📝" label="Simulados" active={false} />
        <NavItem icon="📄" label="Notas" active={true} />
        <NavItem icon="👤" label="Perfil" active={false} />
      </View>
    </View>
  );
}

/* COMPONENTE DE CARTÃO DE NOTA */
function GradeCard({ data }: any) {
  return (
    <View style={[styles.gradeCard, styles[data.statusType]]}>
      <View style={styles.subjectHeader}>
        <Text style={styles.subjectName}>{data.materia}</Text>

        <Text
          style={[
            styles.statusPill,
            data.statusType === "good" && styles.statusGood,
            data.statusType === "bad" && styles.statusBad,
            data.statusType === "avg" && styles.statusAvg,
          ]}
        >
          {data.status}
        </Text>
      </View>

      {data.notas.map((n: any, index: number) => (
        <View key={index} style={styles.gradeRow}>
          <Text style={styles.gradeLabel}>{n.label}</Text>
          <Text
            style={[
              styles.gradeVal,
              parseFloat(n.valor) >= 7 && styles.high,
              parseFloat(n.valor) < 6 && styles.low,
            ]}
          >
            {n.valor}
          </Text>
        </View>
      ))}
    </View>
  );
}

/* COMPONENTE DE NAVITEM */
function NavItem({ icon, label, active }: any) {
  return (
    <TouchableOpacity style={styles.navItem}>
      <Text style={[styles.navIcon, active && { color: "#4361ee" }]}>
        {icon}
      </Text>
      <Text style={[styles.navLabel, active && { color: "#4361ee" }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  /* HEADER */
  headerSection: { marginBottom: 25, marginTop: 10 },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1f2937",
  },
  headerSubtitle: {
    color: "#999",
    fontSize: 14,
    marginTop: 5,
  },

  /* GRADE CARDS */
  gradeCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
    borderLeftWidth: 5,
  },
  good: { borderLeftColor: "#10b981" },
  bad: { borderLeftColor: "#ef4444" },
  avg: { borderLeftColor: "#f59e0b" },

  subjectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  subjectName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1f2937",
  },

  /* STATUS PILL */
  statusPill: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontWeight: "700",
    fontSize: 12,
    textTransform: "uppercase",
  },
  statusGood: { backgroundColor: "#d1fae5", color: "#10b981" },
  statusBad: { backgroundColor: "#fee2e2", color: "#ef4444" },
  statusAvg: { backgroundColor: "#fef3c7", color: "#f59e0b" },

  /* NOTAS */
  gradeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  gradeLabel: {
    color: "#666",
    fontSize: 14,
  },
  gradeVal: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  high: { color: "#10b981" },
  low: { color: "#ef4444" },

  /* NAVBAR */
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 70,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 10,
  },
  navItem: {
    alignItems: "center",
    position: "relative",
  },
  navIcon: {
    fontSize: 22,
    color: "#c4c4c4",
  },
  navLabel: {
    fontSize: 11,
    color: "#c4c4c4",
  },
});

