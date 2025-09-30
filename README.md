# Dá Hora Filmes

Aplicatico desenvolvido utilizando React Native com Expo.

---

## 08_gerenciamento-de-favoritos

- Instalação da lib `AsyncStorage`
- Criação da tela de favoritos (básica)
- Criação do service `storage-favoritos.ts` com as funções de manipulação do Storage (armazenamento físico do aparelho)
- Carregamento dos dados com auxílio do useEffect
- Exibição em FlatList
- Uso de funções intermediárias em favoritos.tsx para acionar as funções do storage para salvar, apagar e apagarTudo.
- Uso de Alert com botões Sim e Não para apagar todos os favoritos

---

## 07_detalhes-d0-filme

- Criação de Rota dinâmica: `app/detalhes/[id].tsx`
- Adiciona os dados do filme como string parâmetro da rota de detalhes
- Em Detalhes, capturamos o filme como string e convertemos par objeto
- Exibe os dados do filme nos componentes
- Formatar a data e ajusta lógica para exibir "Não diponivel" quando não tiver data e sinopse

---

## 06_finalizacao-do-resultados-e-componentes-adicionais

- Definindo alias/apelido para os caminhos (tsconfig.json)
- Adição de states para resultados da busca por filmes e controle de loading
- Uso do componentes nativo `<FlatList>` para listas de dados dinâmicos
- Ajuste do FlatList para renderização de componente `<CardFilme>` com dados de cada filme
- Ajuste do FlatList para renderização de componente `<ItemVazio>` caso não tenha resultados na busca de cada Filme
- Ajuste do layout do Flatlista para modo de 2 colunas (grid)
- Adição de imagem do filme e imagem alternativa em CardFilme
- Adição de créditos ao IMDB na tela Sobre

---

## 05_uso-api-com-config-env

- Cdastro no TheMovieDB para obter a API Key
- Conversão do app.json para app.config.ts
- Adição da propriedade extra.apiKey no app.config.ts
- Instalação do Axios (lib muito usada para comunicação com APIs)
- Configuração do service/api.ts comm parametros para acessar a API via Axios
- Utilização do useEffect com o Axios para fazer consulta de filmes na API

---

## 04_telas-basicas-de-busca-e-resultados

- Criação da versão básicas da telas `Busca` e `Resultados`
- Uso do componente `TextInput` para entrada de dados na tela
- Uso do state para gerenciar o filme digitado no campo de entrada
- Validação básica usando `Alert` e `Vibration`
- Navegação via programação com `useRouter`+ passagem de parâmetros
- Acesso aos parâmetros de rota com `useLocalSearchParams`

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
