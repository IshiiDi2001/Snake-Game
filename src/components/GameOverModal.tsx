import * as React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../styles/colors";

interface GameOverModalProps {
  visible: boolean;
  score: number;
  onPlayAgain: () => void;
  onClose: () => void;
}

const GameOverModal: React.FC<GameOverModalProps> = ({
  visible,
  score,
  onPlayAgain,
  onClose,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.gameOverText}>Game Over!</Text>
          <Text style={styles.scoreText}>Score: {score}</Text>
          <TouchableOpacity style={styles.button} onPress={onPlayAgain}>
            <Text style={styles.buttonText}>Play Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: Colors.primary,
    padding: 20,
    width: 300,
    borderRadius: 10,
    alignItems: "center",
  },
  gameOverText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.background,
  },
  scoreText: {
    fontSize: 18,
    marginBottom: 20,
    color: Colors.background,
  },
  button: {
    backgroundColor: Colors.background,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: 120,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.primary,
    fontWeight: "bold",
  },
});

export default GameOverModal;
