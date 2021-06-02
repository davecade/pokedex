import { PokemonActionTypes } from '../pokemon/pokemon.types'

export const addNewPokemon = pokemon => ({
    type: PokemonActionTypes.ADD_NEW_POKEMON,
    payload: pokemon
})

export const selectPokemon = pokemon => ({
    type: PokemonActionTypes.SELECT_POKEMON,
    payload: pokemon
})

export const setLoading = status => ({
    type: PokemonActionTypes.SET_LOADING,
    payload: status
})