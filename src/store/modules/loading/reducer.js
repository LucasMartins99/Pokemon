import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function loading(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@pokemon/ADD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@pokemon/ADD_SUCESS': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
