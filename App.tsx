import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={estilos.container}>
        <StatusBar style="auto" />
        <View style={estilos.viewlogo}>
          <Text>Dá Hora filmes</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Text>Botão 1</Text>
          <Text>Botão 2</Text>
        </View>
        <View style={estilos.viewRodape}>
          <Text>Botão 3</Text>
          <Text>Botão 4</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

/* Estilos */
const estilos = StyleSheet.create({
  container: {
    backgroundColor: "cornflowerblue",
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: "center",
  },
  viewlogo: {
    backgroundColor: "#81A6EB",
    flex: 3,
  },
  viewBotoes: {
    backgroundColor: "cyan",
    flex: 2,
  },
  viewRodape: {
    backgroundColor: "magenta",
    flex: 0.5,
  },
});
