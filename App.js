import { ScrollView, StyleSheet } from "react-native";
import Pagina3 from "./screens/Pagina3";
import NumeroAleatorio from "./components/NumeroAleatorio";
import MinMax from "./components/MinMax";

export default function App() {
  return (
    <>
      <ScrollView style={{ margin: 10 }}>
        <Pagina3 />
        <NumeroAleatorio min={1} max={35} />
        <MinMax min={20} max={30}/>
      </ScrollView>
    </>
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
