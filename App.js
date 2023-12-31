import { ScrollView, StyleSheet } from "react-native";
import Pagina3 from "./screens/Pagina3";
import NumeroAleatorio from "./components/NumeroAleatorio";
import MinMax from "./components/MinMax";
import Botao from "./components/Botao";
import Contador from "./components/Contador";
import Nome from "./components/Nome";
import Biscoito from "./components/Biscoito";
import Perfil from "./components/Perfil";
import Cronometro from "./components/Cronometro";

export default function App() {
  return (
    <>
      <ScrollView style={styles.container}> 
        {/*<Pagina3 /> */}
        {/*<NumeroAleatorio min={1} max={35} />*/}
        {/*<MinMax min={20} max={30}/>*/}
        {/* <Botao/>  */}
        {/*<Contador/>*/}
        {/*<Nome />*/}

        {/* ATIVIDADE BISCOITO DA SORTE 04/09/2023 */}
        {/**
         * 
        <Biscoito/>
         <Perfil></Perfil>
         */}
         <Cronometro></Cronometro>
        
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#808080",
  },
});
