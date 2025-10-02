// Módulo reponsável pelo acesso á dados de variáveis de ambiente
import "dotenv/config";

import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "DáHora Filmes",
  slug: "dahora-filmes",
  // necessário para o EAS
  owner: "mauconr4",
  scheme: "dahora",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icone.png",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-dahora.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  platforms: ["ios", "android"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icone.png",
      backgroundColor: "#000000",
    },
    edgeToEdgeEnabled: true,
    package: "com.mayconr4.dahorafilmes",
  },
  plugins: ["expo-font", "expo-router"],
  // Acessando a API_KEY atráves do dotenv e guardando na chave apiKey
  extra: {
    apiKey: process.env.API_KEY,
    // necessário para o EAS
    eas: {
      projectId: "fa3a8c1e-478b-4812-8ca6-92bd46067da6",
    },
  },
  updates: {
    url: "https://u.expo.dev/fa3a8c1e-478b-4812-8ca6-92bd46067da6",
  },
  runtimeVersion: {
    policy: "appVersion",
  },
});
