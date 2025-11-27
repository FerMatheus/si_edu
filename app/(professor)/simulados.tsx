import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Simulados() {
  const router = useRouter();

  const [disciplina, setDisciplina] = useState("Matemática");
  const [questoes, setQuestoes] = useState([
    {
      id: 1,
      enunciado: "15 + 27 = ?",
      A: "42",
      B: "40",
      C: "35",
      D: "28",
      correta: "A",
    },
  ]);

  const disciplinas = [
    "Matemática",
    "Português",
    "História",
    "Geografia",
    "Ciências",
  ];

  const [showDropdown, setShowDropdown] = useState(false);

  // ----------- ESTADOS DO MODAL -----------
  const [showModal, setShowModal] = useState(false);

  const [novaQuestao, setNovaQuestao] = useState({
    enunciado: "",
    A: "",
    B: "",
    C: "",
    D: "",
    correta: "A",
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f9fd" }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 120 }}>
        <Text style={styles.title}>Gerenciador de Simulados</Text>

        {/* DROPDOWN */}
        <Text style={styles.label}>Disciplina</Text>

        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowDropdown(!showDropdown)}
        >
          <Text style={styles.dropdownText}>{disciplina}</Text>
        </TouchableOpacity>

        {showDropdown && (
          <View style={styles.dropdownList}>
            {disciplinas.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => {
                  setDisciplina(item);
                  setShowDropdown(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* HEADER QUESTÕES */}
        <View style={styles.questionHeader}>
          <Text style={styles.questionTitle}>
            Questões ({questoes.length})
          </Text>

          <TouchableOpacity
            style={styles.newQuestionBtn}
            onPress={() => setShowModal(true)}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              + Nova Questão
            </Text>
          </TouchableOpacity>
        </View>

        {/* LISTA DE QUESTÕES */}
        <View style={{ marginTop: 10 }}>
          {questoes.map((q) => (
            <View key={q.id} style={styles.qCard}>
              <View>
                <Text style={styles.qTitle}>Questão #{q.id}</Text>
                <Text style={styles.qSubtitle}>{q.enunciado}</Text>
              </View>

              <View style={styles.qActions}>
                <TouchableOpacity
                  style={styles.iconBtn}
                  onPress={() => alert("Editar questão (em breve)")}
                >
                  <Text>✏️</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.iconBtn, styles.deleteBtn]}
                  onPress={() =>
                    setQuestoes((prev) =>
                      prev.filter((item) => item.id !== q.id)
                    )
                  }
                >
                  <Text style={{ color: "#ef4444" }}>🗑️</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* MODAL DE NOVA QUESTÃO */}
      {showModal && (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Nova Questão</Text>

            <Text style={styles.modalLabel}>Enunciado</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Digite o enunciado..."
              multiline
              value={novaQuestao.enunciado}
              onChangeText={(t) =>
                setNovaQuestao({ ...novaQuestao, enunciado: t })
              }
            />

            <Text style={styles.modalLabel}>Alternativas</Text>

            {["A", "B", "C", "D"].map((item) => (
              <View key={item} style={styles.optionRow}>
                <TouchableOpacity
                  style={[
                    styles.radioCircle,
                    novaQuestao.correta === item && styles.radioChecked,
                  ]}
                  onPress={() =>
                    setNovaQuestao({ ...novaQuestao, correta: item })
                  }
                />

                <Text style={styles.optionLabel}>{item})</Text>

                <TextInput
                  style={styles.optionInput}
                  placeholder={`Alternativa ${item}`}
                  value={(novaQuestao as any)[item]}
                  onChangeText={(t) =>
                    setNovaQuestao({ ...novaQuestao, [item]: t })
                  }
                />
              </View>
            ))}

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalCancel}
                onPress={() => setShowModal(false)}
              >
                <Text style={{ color: "#555", fontWeight: "bold" }}>
                  Cancelar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalSave}
                onPress={() => {
                  if (!novaQuestao.enunciado.trim()) {
                    alert("Digite o enunciado da questão!");
                    return;
                  }

                  setQuestoes((prev) => [
                    ...prev,
                    {
                      id: prev.length + 1,
                      enunciado: novaQuestao.enunciado,
                      A: novaQuestao.A,
                      B: novaQuestao.B,
                      C: novaQuestao.C,
                      D: novaQuestao.D,
                      correta: novaQuestao.correta,
                    },
                  ]);

                  // reset
                  setNovaQuestao({
                    enunciado: "",
                    A: "",
                    B: "",
                    C: "",
                    D: "",
                    correta: "A",
                  });

                  setShowModal(false);
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Salvar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {/* NAVBAR */}
      <View style={styles.bottomNav}>
        <NavItem icon="🏠" label="Home" active={false} onPress={() => {}} />
        <NavItem icon="👥" label="Carômetro" active={false} onPress={() => {}} />
        <NavItem icon="💻" label="Simulados" active={true} onPress={() => {}} />
        <NavItem icon="✏️" label="Notas" active={false} onPress={() => {}} />
        <NavItem icon="📊" label="Relatórios" active={false} onPress={() => {}} />
      </View>
    </View>
  );
}

function NavItem({ icon, label, active, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.navItem}>
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
  /* ------- TITULOS E TEXTO ------- */
  title: {
    fontSize: 22,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },

  /* --- Dropdown --- */
  dropdown: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  dropdownText: { fontSize: 16, color: "#333" },

  dropdownList: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  dropdownItemText: { fontSize: 16 },

  /* --- Questões --- */
  questionHeader: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionTitle: {
    fontSize: 17,
    fontWeight: "700",
  },
  newQuestionBtn: {
    backgroundColor: "#3b82f6",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    shadowColor: "#3b82f6",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },

  qCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 2,
  },
  qTitle: { fontWeight: "bold", fontSize: 14 },
  qSubtitle: { fontSize: 12, color: "#666" },

  qActions: {
    flexDirection: "row",
    gap: 10,
  },
  iconBtn: {
    backgroundColor: "#f3f4f6",
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteBtn: {
    backgroundColor: "#fee2e2",
  },

  /* --- MODAL --- */
  modalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    zIndex: 1000,
  },
  modalContent: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  modalLabel: {
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    marginTop: 10,
  },
  modalInput: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    textAlignVertical: "top",
    minHeight: 60,
  },

  /* Alternativas */
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#4361ee",
    marginRight: 10,
  },
  radioChecked: {
    backgroundColor: "#4361ee",
  },
  optionLabel: {
    fontWeight: "600",
    width: 25,
  },
  optionInput: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  /* Botões modal */
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 10,
  },
  modalCancel: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  modalSave: {
    flex: 1,
    backgroundColor: "#3b82f6",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
  },

  /* --- NAVBAR --- */
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
    marginTop: 2,
  },
});
