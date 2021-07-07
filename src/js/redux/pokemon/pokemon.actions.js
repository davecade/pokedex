import { PokemonActionTypes } from '../pokemon/pokemon.types'

export const addNewPokemon = pokemon => ({
    type: PokemonActionTypes.ADD_NEW_POKEMON,
    payload: pokemon
})

export const selectPokemon = pokemon => ({
    type: PokemonActionTypes.SELECT_POKEMON,
    payload: pokemon
})

export const fetchPokemonDataStart = () => ({
    type: PokemonActionTypes.FETCH_POKEMON_DATA_START
})

export const fetchPokemonDataSuccess = () => ({
    type: PokemonActionTypes.FETCH_POKEMON_DATA_SUCCESS
})

export const fetchPokemonDataFailure = error => ({
    type: PokemonActionTypes.FETCH_POKEMON_DATA_FAILURE,
    payload: error
})