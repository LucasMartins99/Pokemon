# POKEMON
![Preview-Screens](https://github.com/LucasMartins99/Pokemon/blob/master/Screen.png)

## Sobre o projeto

A ideia principal dessa aplicação é:

_"Encontrar pokemons baseado no clima de uma cidade"._

## Por que ?

Este projeto faz parte de um desafio que foi proposto como um teste em um processo seletivo, e também faz parte do meu portfólio pessoal ficarei muito feliz se puder me dar algum feedback sobre o projeto, código estrutura ou melhorias que você possa me relatar.

Email: fabio.lucaslima@outlook.com
[LinkedIn](https://www.linkedin.com/in/fabio-lima-b78a1b15a/).

Você pode também criar uma Issue aqui no GitHub !!

## Algumas Observações sobre o projeto

1-) Não há funcionalidade de login ou cadastro.

2-) Caso o pokémon não tem foto na API será exibida uma foto padrão.

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

