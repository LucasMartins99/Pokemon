import { combineReducers } from 'redux';
import pokemons from './pokemons/reducer';
import loading from './loading/reducer';

export default combineReducers({ pokemons, loading });
