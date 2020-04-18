import produce from 'immer';

export default function pokemons(state = [], action) {
  switch (action.type) {
    case '@pokemon/ADD_SUCESS':
      return produce(state, (draft) => {
        const { pokemon } = action;
        draft.push(pokemon);
      });
    default:
      return state;
  }
}
