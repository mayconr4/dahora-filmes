import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={estilos.container}>
        <StatusBar style="auto" />
        <View style={estilos.viewlogo}>
          <Image source={require("./assets/dahora.png")} style={estilos.logo} />
          <Text>Dá Hora filmes</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Button color="purple" title="Buscar Filmes" />
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
  viewBotoes: {
    backgroundColor: "cyan",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
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
});
