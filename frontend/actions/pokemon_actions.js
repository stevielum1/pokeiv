import * as PokemonApiUtil from '../util/pokemon_api_util';

const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const fetchPokemon = () => dispatch => (
  PokemonApiUtil.fetchPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);