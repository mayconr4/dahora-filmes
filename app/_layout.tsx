import { useFonts } from "expo-font";
import Loading from "@/src/components/Loading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function Layout() {
  /*Usamos o useFonts para riar uma referência para a fonte que queremos utilizar no app. */
  const [fonteCarregada] = useFonts({
    Monoton: require("@/assets/fonts/Monoton-Regular.ttf"),
  });

  // Se a fonte ainda não foi carregada
  if (!fonteCarregada) {
    return <Loading />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="default" backgroundColor="#5451a6" />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#5451a6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </SafeAreaProvider>
  );
}
