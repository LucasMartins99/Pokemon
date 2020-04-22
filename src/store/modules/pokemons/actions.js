export function addPokemonRequest(city) {
  return {
    type: '@pokemon/ADD_REQUEST',
    city,
  };
}
export function addPokemonSucess(pokemon) {
  return {
    type: '@pokemon/ADD_SUCESS',
    pokemon,
  };
}
export function addPokemonFailure() {
  return {
    type: '@pokemon/ADD_FAILURE',
  };
}
