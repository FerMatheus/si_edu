import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Relatorios() {
  const router = useRouter();

  const relatorios = [
    {
      id: 1,
      nome: "Maria Clara",
      turma: "Turma B",
      media: 8.5,
      freq: "98%",
      mediaColor: "#10b981",
      icon: "📈",
    },
    {
      id: 2,
      nome: "João Pedro",
      turma: "Turma B",
      media: 5.2,
      freq: "80%",
      mediaColor: "#ef4444",
      icon: "📊",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f9fd" }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 120 }}>
        <Text style={styles.title}>Relatórios Individuais</Text>

        {relatorios.map((item) => (
          <View key={item.id} style={styles.reportCard}>
            <View style={styles.studentHeader}>
              <View>
                <Text style={styles.studentName}>{item.nome}</Text>
                <Text style={styles.studentClass}>{item.turma}</Text>
              </View>

              <TouchableOpacity
                style={styles.btnPDF}
                onPress={() => alert("Gerando PDF...")}
              >
                <Text style={{ color: "white", fontSize: 12 }}>📄 PDF</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoText}>
                Média Geral:{" "}
                <Text style={{ fontWeight: "bold", color: item.mediaColor }}>
                  {item.media}
                </Text>
              </Text>

              <Text style={styles.infoText}>
                Frequência: <Text style={{ fontWeight: "bold" }}>{item.freq}</Text>
              </Text>
            </View>

            <View style={styles.chartPlaceholder}>
              <Text style={{ fontSize: 18, color: "#4361ee" }}>{item.icon}</Text>
              <Text style={{ color: "#4361ee", marginLeft: 8 }}>
                [Gráfico de Desempenho]
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* NAVBAR */}
      <View style={styles.bottomNav}>
        <NavItem icon="🏠" label="Home" active={false} />
        <NavItem icon="👥" label="Carômetro" active={false} />
        <NavItem icon="💻" label="Simulados" active={false} />
        <NavItem icon="✏️" label="Notas" active={false} />
        <NavItem icon="📊" label="Relatórios" active={true} />
      </View>
    </View>
  );
}

function NavItem({ icon, label, active }: any) {
  return (
    <TouchableOpacity style={styles.navItem}>
      <Text
        style={[styles.navIcon, active && { color: "#4361ee" }]}
      >
        {icon}
      </Text>
      <Text
        style={[styles.navLabel, active && { color: "#4361ee" }]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },

  reportCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 2,
  },

  studentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingBottom: 10,
    marginBottom: 10,
  },
  studentName: {
    fontSize: 17,
    fontWeight: "bold",
  },
  studentClass: {
    fontSize: 13,
    color: "#888",
  },

  btnPDF: {
    backgroundColor: "#ef4444",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 14,
  },
  infoText: {
    fontSize: 14,
    color: "#555",
  },

  chartPlaceholder: {
    backgroundColor: "#f0f4ff",
    height: 100,
    borderRadius: 10,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  /* NAVBAR */
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 70,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: -5 },
    shadowRadius: 20,
    elevation: 10,
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    fontSize: 20,
    color: "#c4c4c4",
  },
  navLabel: {
    fontSize: 11,
    color: "#c4c4c4",
  },
});

