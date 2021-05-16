import { PokemonActionTypes } from '../pokemon/pokemon.types'

const INITIAL_STATE = {
    pokemonList: []
}

const pokemonReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case PokemonActionTypes.ADD_NEW_POKEMON:
            return {
                ...state,
                pokemonList: [...state.pokemonList, action.payload]
            }
        default:
            return state
    }
}

export default pokemonReducer;