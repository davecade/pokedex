import { PokemonActionTypes } from '../pokemon/pokemon.types'

export const addNewPokemon = pokemon => ({
    type: PokemonActionTypes.ADD_NEW_POKEMON,
    payload: pokemon
})