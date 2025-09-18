# Dá Hora Filmes

Aplicatico desenvolvido utilizando React Native com Expo.

---

## 03_navegacao-expo-router-e-telas-privacidade-sobre

- Instalação da lib `expo-router` e suas dependências
- Ajustes e atualização para o Expo SDK 54
- Configuração da `Stack` (pilha de navegação das telas)
  no arquivo `_layout.tsx`
- Troca da `Statusbar` para a versão React Native
- Migração do conteúdo/estrutura do `App.tsx` para o `layout.tsx` e para as páginas correspondentes (index,privacidade e sobre)
- Configuração das rotas usando componente `<Link>` do expo-router
- Uso do componente `ScrollView` paratelas com barra de rolagem

---

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
