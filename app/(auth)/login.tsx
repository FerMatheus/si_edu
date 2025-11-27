import PrivacyModal from "@/components/PrivacyModal";
import TermsModal from "@/components/TermsModal";
import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const [tipoUsuario, setTipoUsuario] = useState<"estudante" | "professor">(
    "estudante"
  );
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>
        SI <Text style={styles.cubo}>■</Text>{" "}
        <Text style={styles.edu}>EDU</Text>
      </Text>
      <Text style={styles.subtitulo}>Sistema integrado na educação</Text>

      {/* Botões topo */}
      <View style={styles.botoesTopo}>
        <TouchableOpacity
          style={[
            styles.btnTopo,
            tipoUsuario === "estudante" && styles.btnAtivo,
          ]}
          onPress={() => setTipoUsuario("estudante")}
        >
          <Text
            style={[
              styles.btnTexto,
              tipoUsuario === "estudante" && styles.btnTextoAtivo,
            ]}
          >
            Estudante
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btnTopo,
            tipoUsuario === "professor" && styles.btnAtivo,
          ]}
          onPress={() => setTipoUsuario("professor")}
        >
          <Text
            style={[
              styles.btnTexto,
              tipoUsuario === "professor" && styles.btnTextoAtivo,
            ]}
          >
            Professor
          </Text>
        </TouchableOpacity>
      </View>

      {/* Campo matrícula */}
      <View style={styles.campo}>
        <Text style={styles.label}>Matrícula</Text>
        <TextInput style={styles.input} placeholder="023-336" />
      </View>

      {/* Campo senha */}
      <View style={styles.campo}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          secureTextEntry
        />
      </View>

      {/* Botão entrar */}
      <TouchableOpacity
        style={styles.btnEntrar}
        onPress={() => {
          if (tipoUsuario === "estudante") {
            router.push("/(estudante)/home");
          } else {
            router.push("/(professor)/home");
          }
        }}
      >
        <Text style={styles.btnEntrarTexto}>Entrar</Text>
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
    paddingHorizontal: 20,
  },

  logo: {
    color: "#4361EE",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 5,
  },

  cubo: {
    color: "#00C2FF",
  },

  edu: {
    color: "red",
  },

  subtitulo: {
    color: "#8e8e8eff",
    fontSize: 14,
    marginBottom: 30,
  },

  // Botões de topo
  botoesTopo: {
    flexDirection: "row",
    backgroundColor: "#dcf8ffff",
    padding: 5,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
  },

  btnTopo: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  btnAtivo: {
    backgroundColor: "#4361EE",
  },

  btnTexto: {
    color: "#888",
    fontSize: 14,
    fontWeight: "500",
  },

  btnTextoAtivo: {
    color: "#dcf8ffff",
  },

  // Inputs
  campo: {
    width: "100%",
    marginBottom: 15,
  },

  label: {
    color: "#888",
    fontSize: 12,
    marginBottom: 5,
  },

  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 10,
    backgroundColor: "#dcf8ffff",
    color: "#88888888",
  },

  btnEntrar: {
    width: "100%",
    padding: 15,
    backgroundColor: "#4361EE",
    borderRadius: 10,
    marginVertical: 10,
  },

  btnEntrarTexto: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
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
