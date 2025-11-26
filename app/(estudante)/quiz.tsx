import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const QUESTIONS = [
  {
    question: "Quanto é 12 × 8?",
    options: ["96", "84", "108", "88"],
    correct: 0,
  },
  {
    question: "A raiz quadrada de 81 é:",
    options: ["9", "8", "7", "6"],
    correct: 0,
  },
  {
    question: "Qual é o valor de π (aproximado)?",
    options: ["3.14", "2.17", "3.00", "3.41"],
    correct: 0,
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [time, setTime] = useState(30);

  const handleNext = useCallback(() => {
    setSelected(null);

    if (current + 1 < QUESTIONS.length) {
      setCurrent((prev) => prev + 1);
      setTime(30);
    } else {
      setFinished(true);
    }
  }, [current]);

  function handleSelect(optionIndex: number) {
    setSelected(optionIndex);

    if (optionIndex === QUESTIONS[current].correct) {
      setScore((prev) => prev + 1);
    }
  }

  // Timer
  useEffect(() => {
    if (finished) return;

    const timer = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          handleNext();
          return 30;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [current, finished, handleNext]);

  if (finished) {
    return (
      <View style={styles.resultScreen}>
        <View style={styles.scoreCircle}>
          <Text style={styles.scoreText}>{score}</Text>
        </View>

        <Text style={styles.resultTitle}>Resultado</Text>
        <Text style={styles.resultSubtitle}>
          Você acertou {score} de {QUESTIONS.length} questões!
        </Text>

        <View style={styles.resultBtn}>
          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={() => router.push("/(estudante)/notas")}
          >
            <Text style={styles.btnPrimaryText}>Ver no Boletim</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.whiteBtn}
            onPress={() => router.push("/(estudante)/simulados")}
          >
            <Text style={styles.whiteBtnText}>Voltar para lista</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const q = QUESTIONS[current];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.header}>
          <Text style={styles.progressText}>
            Questão {current + 1} de {QUESTIONS.length}
          </Text>

          <View style={styles.timerBox}>
            <FontAwesome5 name="clock" size={14} color="#4361ee" />
            <Text style={styles.timerText}>{time}s</Text>
          </View>
        </View>

        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{q.question}</Text>
        </View>

        {/* OPÇÕES */}
        <View style={{ marginTop: 20 }}>
          {q.options.map((opt, index) => {
            const isCorrect = index === q.correct;
            const isSelected = index === selected;

            let optionStyle = styles.optionBtn;

            if (selected !== null) {
              if (isSelected && isCorrect)
                optionStyle = { ...optionStyle, ...styles.correct };
              else if (isSelected && !isCorrect)
                optionStyle = { ...optionStyle, ...styles.wrong };
            }

            return (
              <TouchableOpacity
                key={index}
                style={optionStyle}
                disabled={selected !== null}
                onPress={() => handleSelect(index)}
              >
                <Text style={styles.optionText}>{opt}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {selected !== null && (
          <TouchableOpacity style={styles.btnPrimary} onPress={handleNext}>
            <Text style={styles.btnPrimaryText}>Próxima</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

const PRIMARY = "#4361ee";
const SUCCESS = "#10b981";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fd",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  progressText: {
    color: "#666",
    fontWeight: "600",
  },

  timerBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#e8f0ff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  timerText: {
    color: PRIMARY,
    fontWeight: "bold",
  },

  questionCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },

  questionText: {
    fontSize: 20,
    color: "#333",
    fontWeight: "600",
  },

  optionBtn: {
    backgroundColor: "#f4f4f5",
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "transparent",
    marginBottom: 12,
  },

  optionText: {
    fontSize: 16,
    color: "#333",
  },

  correct: {
    backgroundColor: "#d1fae5",
    borderColor: SUCCESS,
  },

  wrong: {
    backgroundColor: "#fee2e2",
    borderColor: "#ef4444",
  },

  resultBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  btnPrimary: {
    marginTop: 10,
    backgroundColor: PRIMARY,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  whiteBtn: {
    marginTop: 10,
    backgroundColor: "#ffffffff",
    borderColor: "#8888886d",
    borderWidth: 1,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  btnPrimaryText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  whiteBtnText: {
    color: "#888",
    fontWeight: "bold",
    fontSize: 16,
  },

  resultScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: "#f8f9fd",
  },

  scoreCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 6,
    borderColor: SUCCESS,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },

  scoreText: {
    fontSize: 42,
    fontWeight: "900",
    color: SUCCESS,
  },

  resultTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#333",
  },

  resultSubtitle: {
    marginTop: 10,
    color: "#666",
    fontSize: 16,
    marginBottom: 40,
  },
});
