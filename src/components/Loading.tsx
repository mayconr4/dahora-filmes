import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Loading() {
  return (
    <View style={estilos.alinhamentoview}>
      <ActivityIndicator size={100} />
    </View>
  );
}

const estilos = StyleSheet.create({
  alinhamentoview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
