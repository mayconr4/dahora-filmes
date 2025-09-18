import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// Importando a biblioteca interna vector-icons

// *Usamos os @ts-ignore para ignorar erros de tipagem (ou ausência de tipagem)?*

import Loading from "./src/components/Loading";

export default function App() {
  const [fonteCarregada] = useFonts({
    Monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });

  if (!fonteCarregada) {
    return <Loading />;
  }

  return <SafeAreaProvider></SafeAreaProvider>;
}
