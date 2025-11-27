import PrivacyModal from "@/components/PrivacyModal";
import TermsModal from "@/components/TermsModal";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WelcomeScreen() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  return (
    <View style={styles.container}>
      {/* LOGO DO PROJETO */}
      <View style={styles.logoArea}>
        <Text style={styles.logo}>
          SI <Text style={styles.cubo}>■</Text>{" "}
          <Text style={styles.edu}>EDU</Text>
        </Text>

        <Text style={styles.subtitle}>
          Inovação no aprendizado e avaliação educacional.
        </Text>
      </View>

      {/* BOTÃO */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(auth)/login")}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Termos e Política de Privacidade */}
      <Text style={styles.terms}>
        <Text style={styles.termsLink} onPress={() => setShowTerms(true)}>
          Termos de uso
        </Text>{" "}
        e{" "}
        <Text style={styles.termsLink} onPress={() => setShowPrivacy(true)}>
          Política de privacidade
        </Text>
      </Text>

      {/* Modais */}
      <TermsModal visible={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyModal
        visible={showPrivacy}
        onClose={() => setShowPrivacy(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcf8ffff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  logoArea: {
    alignItems: "center",
    marginBottom: 80,
  },

  logo: {
    color: "#4361EE",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 5,
  },

  edu: {
    color: "red",
  },

  cubo: {
    color: "#00C2FF",
  },

  subtitle: {
    fontSize: 14,
    color: "#8e8e8eff",
    marginTop: 10,
    textAlign: "center",
    maxWidth: 260,
  },

  button: {
    backgroundColor: "#0077b6",
    width: "70%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 30,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  terms: {
    fontSize: 10,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  termsLink: {
    textDecorationLine: "underline",
    color: "#007992ff",
    fontWeight: "bold",
  },
});
