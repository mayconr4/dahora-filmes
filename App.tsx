import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// Importando a biblioteca interna vector-icons
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  /*Usamos o useFonts para riar uma referência para a fonte que queremos utilizar no app. */
  const [fonteCarregada] = useFonts({
    Monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });

  // Se a fonte ainda não foi carregada
  if (!fonteCarregada) {
    return (
      <Text style={{ color: "red", fontSize: 22 }}>Carregando fonte....</Text>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={estilos.container}>
        <StatusBar style="auto" />
        <View style={estilos.viewlogo}>
          <Image source={require("./assets/dahora.png")} style={estilos.logo} />
          <Text style={estilos.tituloApp}>Dá Hora filmes</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botaoInicial}>
            <Ionicons name="search" size={24} color="white" />
            <Text style={estilos.textoBotao}>Buscar Filmes</Text>
          </Pressable>
          B
          <Button title="Favoritos" />
        </View>
        <View style={estilos.viewRodape}>
          <Button title="Privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

/* Estilos */
const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  viewlogo: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  viewRodape: {
    backgroundColor: "magenta",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 128,
    height: 128,
  },
  tituloApp: {
    fontSize: 32,
    color: "#5451a6",
    fontFamily: "Monoton",
  },
  viewBotoes: {
    backgroundColor: "cyan",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  botaoInicial: {
    backgroundColor: "#5451a6",
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  textoBotao: {
    color: "white",
  },
});
