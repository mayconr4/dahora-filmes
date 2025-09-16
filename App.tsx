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
          <Pressable
            onPress={() => console.log("Botão clicado")}
            style={({ pressed }) => [
              estilos.botaoInicial,
              pressed ? { backgroundColor: "#7A63D1" } : null,
            ]}
          >
            <Ionicons name="search" size={22} color="white" />
            <Text style={estilos.textoBotao}> Buscar Filmes</Text>
          </Pressable>
          <Pressable
            onPress={() => console.log("Botão clicado")}
            style={({ pressed }) => [
              estilos.botaoInicial,
              pressed ? { backgroundColor: "#7A63D1" } : null,
            ]}
          >
            <Ionicons name="star" size={22} color="yellow"></Ionicons>
            <Text style={estilos.textoBotao}> Favoritos</Text>
          </Pressable>
        </View>
        {/* Fim view main */}
        <View style={estilos.viewRodape}>
          <Pressable
            onPress={() => console.log("Botão clicado")}
            style={({ pressed }) => [
              estilos.botaoInicial,
              pressed ? { backgroundColor: "#7A63D1" } : null,
            ]}
          >
            <Ionicons name="lock-closed" size={18} color="white"></Ionicons>
            <Text style={estilos.textoBotao}> Privacidade</Text>
          </Pressable>
          <Pressable
            onPress={() => console.log("Botão clicado")}
            style={({ pressed }) => [
              estilos.botaoInicial,
              pressed ? { backgroundColor: "#7A63D1" } : null,
            ]}
          >
            <Ionicons name="alert-circle" size={18} color="white"></Ionicons>
            <Text style={estilos.textoBotao}> Sobre</Text>
          </Pressable>
        </View>
        {/* fim view rod */}
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
    backgroundColor: "#5451a6",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
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
    backgroundColor: "white",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
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
