# Dá Hora Filmes

Aplicatico desenvolvido utilizando React Native com Expo.

## 02_mais-estilos-logo-font-icones-pressable

- Aplicação da imagem do logo usando o componente <Image>
- Adição e configuração de fonte personalizada usando o `expo-font` e `useFonts`
- Estilização do App.tsx usando recursos do `StyleSheet`
  \_Subistituição do `Button` por `Pressable` para criação de botões customizados
- Uso de ícones atráves do `@expo-vector-icons`
- Aplicação do `ActivityIndicator` para criação de um componente `Loading`

---

## 01_estrutura-e-estilização-basica

- Remoção das imagens originais na pasta assets
- Adição de imagens especifícas para o aplicativo
- Configuração dos detalhes do aplicativo em `app.json`
- Instalação da dependência (lib) `react-native-safe-area-context`

Use o comando: `npx expo install react-native-safe-area-context`

Utilizamos o `expo install` para garantir a instalação de dependências (ou libs) que sejam compátiveis com a versão de SDK do Expo usada em seu projeto.

- Refatoramos a estrutura e estilização do `App.tsx` usando os componentes:

- Uso do flex para determinar o tamanho das views.
