import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MeuComponente from "./components/MeuComponente";
import MinMax from "./components/MinMax";

export default function App() {
  return (
    <View style={styles.container}>
      <MeuComponente />
      <MinMax min={10} max={20} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
