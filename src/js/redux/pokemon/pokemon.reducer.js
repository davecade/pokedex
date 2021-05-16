import { PokemonActionTypes } from '../pokemon/pokemon.types'

const INITIL_STATE = {
    pokemon: null
}

const pokemonReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.ADD_NEW_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }
        default:
            return state
    }
}

export default pokemonReducer;