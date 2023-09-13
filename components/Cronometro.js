import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Cronometro() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [lastTime, setLastTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      if (time > 0) {
        setLastTime(time);
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLastTime(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerTexto}>
        {`${String(Math.floor(time / 3600)).padStart(2, "0")}:${String(
          Math.floor((time % 3600) / 60)
        ).padStart(2, "0")}:${String(time % 60).padStart(2, "0")}`}
      </Text>
      {lastTime > 0 && (
        <Text style={styles.lastTime}>
          Último tempo:{" "}
          {`${String(Math.floor(lastTime / 3600)).padStart(2, "0")}:${String(
            Math.floor((lastTime % 3600) / 60)
          ).padStart(2, "0")}:${String(lastTime % 60).padStart(2, "0")}`}
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={isRunning ? styles.stopButton : styles.startButton}
          onPress={handleStartStop}
        >
          <Text style={styles.buttonTexto}>
            {isRunning ? "Parar" : "Iniciar"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.buttonTexto}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A9A9A9",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50%",
  },
  timerTexto: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  lastTime: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  startButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  stopButton: {
    backgroundColor: "#E53935",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  resetButton: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonTexto: {
    color: "white",
    fontWeight: "bold",
  },
});
