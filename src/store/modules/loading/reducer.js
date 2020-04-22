import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  city: false,
};

export default function loading(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@pokemon/ADD_REQUEST': {
        draft.loading = true;
        draft.city = false;
        break;
      }
      case '@pokemon/ADD_SUCESS': {
        draft.loading = false;
        draft.city = false;
        break;
      }
      case '@pokemon/ADD_FAILURE': {
        draft.loading = false;
        draft.city = true;
        break;
      }
      default:
    }
  });
}
