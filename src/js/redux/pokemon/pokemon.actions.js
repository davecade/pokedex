import { PokemonActionTypes } from '../pokemon/pokemon.types'


export const selectPokemon = id => ({
    type: PokemonActionTypes.SELECT_POKEMON,
    payload: id
})

export const addPokemonToSelected = pokemon => ({
    type: PokemonActionTypes.ADD_POKEMON_TO_SELECTED,
    payload: pokemon
})

export const fetchPokemonDataSuccess = () => ({
    type: PokemonActionTypes.FETCH_POKEMON_DATA_SUCCESS
})

export const fetchPokemonDataFailure = error => ({
    type: PokemonActionTypes.FETCH_POKEMON_DATA_FAILURE,
    payload: error
})