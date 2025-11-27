import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Carometro() {
  const router = useRouter();

  const emojis = ["😊", "😐", "☹️"];

  function EmojiSelector({ group, selected, onSelect }: any) {
    return (
      <View style={styles.emojiGroup}>
        {emojis.map((emoji, index) => (
          <TouchableOpacity key={index} onPress={() => onSelect(index)}>
            <Text
              style={[
                styles.emojiBtn,
                selected === index && styles.emojiSelected,
              ]}
            >
              {emoji}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  // estados dos 3 critérios
  const [p1, setP1] = useState<number | null>(null);
  const [p2, setP2] = useState<number | null>(null);
  const [p3, setP3] = useState<number | null>(null);
  const [comentario, setComentario] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f9fd" }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 120 }}>
        <Text style={styles.title}>Avaliação Comportamental</Text>

        {/* CARD 1 */}
        <View style={styles.card}>
          <View style={styles.studentHeader}>
            <Image
              style={styles.studentImg}
            />
            <View>
              <Text style={styles.studentName}>Maria Clara</Text>
              <Text style={styles.studentClass}>3º Ano - Turma B</Text>
            </View>
          </View>

          {/* CRITÉRIO 1 */}
          <View style={styles.criteriaRow}>
            <Text style={styles.criteriaLabel}>Participação</Text>
            <EmojiSelector group="g1" selected={p1} onSelect={setP1} />
          </View>

          {/* CRITÉRIO 2 */}
          <View style={styles.criteriaRow}>
            <Text style={styles.criteriaLabel}>Responsabilidade</Text>
            <EmojiSelector group="g2" selected={p2} onSelect={setP2} />
          </View>

          {/* CRITÉRIO 3 */}
          <View style={styles.criteriaRow}>
            <Text style={styles.criteriaLabel}>Sociabilidade</Text>
            <EmojiSelector group="g3" selected={p3} onSelect={setP3} />
          </View>

          {/* COMENTÁRIO */}
          <Text style={styles.label}>Comentários:</Text>
          <TextInput
            multiline
            numberOfLines={3}
            style={styles.textarea}
            placeholder="Adicione observações sobre o aluno..."
            value={comentario}
            onChangeText={setComentario}
          />

          {/* BOTÕES */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={() => router.back()}
            >
              <Text style={styles.cancelText}>Sair</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.saveBtn}
              onPress={() => alert("Avaliação salva!")}
            >
              <Text style={styles.saveText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CARD 2 */}
        <View style={styles.card}>
          <View style={styles.studentHeader}>
            <Image
              style={styles.studentImg}
            />
            <View>
              <Text style={styles.studentName}>João Pedro</Text>
              <Text style={styles.studentClass}>3º Ano - Turma B</Text>
            </View>
          </View>

          <Text style={styles.pending}>Avaliação pendente...</Text>
        </View>
      </ScrollView>

      {/* NAVBAR */}
      <View style={styles.bottomNav}>
        <NavItem icon="🏠" label="Home" active={false} onPress={() => {}} />
        <NavItem icon="👥" label="Carômetro" active={true} onPress={() => {}} />
        <NavItem icon="💻" label="Simulados" active={false} onPress={() => {}} />
        <NavItem icon="✏️" label="Notas" active={false} onPress={() => {}} />
        <NavItem icon="📊" label="Relatórios" active={false} onPress={() => {}} />
      </View>
    </View>
  );
}

function NavItem({ icon, label, active, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.navItem}>
      <Text style={[styles.navIcon, active && { color: "#4361ee" }]}>{icon}</Text>
      <Text style={[styles.navLabel, active && { color: "#4361ee" }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
  },
  studentHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  studentImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#4361ee",
  },
  studentName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  studentClass: {
    fontSize: 13,
    color: "#888",
  },
  criteriaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },
  criteriaLabel: {
    fontWeight: "600",
    fontSize: 15,
    color: "#555",
  },
  emojiGroup: {
    flexDirection: "row",
    gap: 12,
  },
  emojiBtn: {
    fontSize: 32,
    opacity: 0.4,
  },
  emojiSelected: {
    opacity: 1,
    transform: [{ scale: 1.2 }],
  },
  label: {
    marginTop: 15,
    fontWeight: "600",
    color: "#555",
  },
  textarea: {
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginTop: 8,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 15,
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  saveBtn: {
    flex: 1,
    backgroundColor: "#4361ee",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelText: { color: "#666", fontWeight: "bold" },
  saveText: { color: "white", fontWeight: "bold" },
  pending: {
    textAlign: "center",
    color: "#999",
    paddingTop: 20,
    fontStyle: "italic",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 70,
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
