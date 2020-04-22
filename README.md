# POKÉMON BY CITY
![Preview-Screens](https://github.com/LucasMartins99/Pokemon/blob/master/Screen.png)

## Sobre o projeto

A ideia principal dessa aplicação é:

_"Encontrar pokemons baseado no clima de uma cidade"._

## Por que ?

Este projeto faz parte de um desafio que foi proposto como um teste em um processo seletivo, e também faz parte do meu portfólio pessoal ficarei muito feliz se puder me dar algum feedback sobre o projeto, código estrutura ou melhorias que você possa me relatar.

## Algumas Observações sobre o projeto

1-) Não há funcionalidade de login ou cadastro.

2-) Caso o pokémon não tenha foto na API será exibida uma foto padrão.

3-) Aplicação toda em inglês.

## Funcionalidades

- Buscar na API o pokémon relacionado ao temperatura atua da cidade, seguindo um padrão.
  - Menor que 5ºC = pokémon tipo gelo.
  - Entre maior ou igual a 5ºC e menor 10ºC = pokémon tipo água.
  - Entre maior ou igual 12ºC e menor 15ºC = pokémon tipo grama.
  - Entre maior ou igual 15ºC e menor 21ºC = pokémon tipo terra.
  - Entre maior ou igual 23ºC e menor 27ºC = pokémon tipo inseto.
  - Entre maior ou igual 27ºC e 33ºC = pokémon tipo pedra.
  - Maior que 33ºC = pokémon tipo fogo.
  - Caso esteja chovendo = pokémon tipo elétrico.
  - Qualquer outra temperatudo = pokémon do tipo normal.

- Após a busca exibe na tela:
  - Foto do pokémon.
  - Nome do pokémon.
  - Tipo do pokémon.
  - Cidade.
  - Se está chovendo.
  - Temperatura da cidade.

  ## Começando

  ### Pré-requisitos

  Para rodar está aplicação em modo desenvolvimento você precisa ter o NPM instalado ou o YARN e também estar com a API rodando em sua máquina local API: https://github.com/LucasMartins99/API-Pokemon

  ### Instalando

  **Clone este repositório**

  ```
  $ git clone https://github.com/LucasMartins99/Pokemon.git

  $ cd Pokemon

  ```

  **Instalar as dependência**

  ```
  $ yarn
  ```
      _or_

  ```
  $ npm install
  ```

  **Rodar aplicação**

  ```
  $ yarn run dev
  ```
      _or_

  ```
  $ npm run dev
  ```
  Após estes comandos irá abrir no browser a aplicação na porta padrão 3000.

  ## Tecnologias utilizadas

  - [Axios](https://github.com/axios/axios) - Conexão com a API.
  - [React](https://pt-br.reactjs.org) - Front-end biblioteca Java Script.
  - [Redux](https://redux.js.org) - Biblioteca de gerenciamento de estados.
  - [React-hook-Form](https://react-hook-form.com) - Biblioteca de gerenciamento de formulários.
  - [React-icons](https://react-icons.netlify.app) - Icones da aplicação.
  - [React-Router](https://reacttraining.com/react-router/web/guides/quick-start) - Rotas das páginas.
  - [Redux-Saga](https://redux-saga.js.org) - Biblioteca para controlar efeitos
  assíncronos.
  - [React-toastify](https://fkhadra.github.io/react-toastify/introduction) - Notificações na aplicação.
  - [Styled-components](https://styled-components.com) - Biblioteca de estilização.

  ## Contribuição

  Você pode abrir quantas issues que quiser, ficarei feliz em analizar e responder todas.

  Email: fabio.lucaslima@outlook.com

  Meu LinkedIn: [LinkedIn](https://www.linkedin.com/in/fabio-lima-b78a1b15a/)

  Obrigado !!






