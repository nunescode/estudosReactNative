import { ScrollView, StyleSheet } from "react-native";
import Pagina3 from "./screens/Pagina3";
import NumeroAleatorio from "./components/NumeroAleatorio";
import MinMax from "./components/MinMax";
import Botao from "./components/Botao";
import Contador from "./components/Contador";
import Nome from "./components/Nome";
import Biscoito from "./components/Biscoito";

export default function App() {
  return (
    <>
      <ScrollView style={{ margin: 10 }}>
        {/*<Pagina3 /> */}
        {/*<NumeroAleatorio min={1} max={35} />*/}
        {/*<MinMax min={20} max={30}/>*/}
        {/* <Botao/>  */}
        {/*<Contador/>*/}
        {/*<Nome />*/}

        {/* ATIVIDADE BISCOITO DA SORTE 04/09/2023 */}
        <Biscoito/>
        
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
