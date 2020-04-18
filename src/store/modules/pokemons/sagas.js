import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { addPokemonSucess } from './actions';

function* addToPokemon({ city }) {
  try {
    const response = yield call(api.get, `/buscar/${city}`);
    const data = {
      ...response.data,
    };

    yield put(addPokemonSucess(data));
    toast.success('Pokemon encotrado');
  } catch (err) {
    console.log(err);
  }
}
export default all([takeLatest('@pokemon/ADD_REQUEST', addToPokemon)]);
