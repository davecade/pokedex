import { PokemonActionTypes } from '../pokemon/pokemon.types'

const INITIAL_STATE = {
    pokemonList: [],
    selected: {type: []},
    loading: true
}

const pokemonReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PokemonActionTypes.ADD_NEW_POKEMON:
            return {
                ...state,
                pokemonList: [...state.pokemonList, action.payload]
            }

        case PokemonActionTypes.SELECT_POKEMON:
            return {
                ...state,
                selected: action.payload
            }
        case PokemonActionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        default:
            return state
    }
}

export default pokemonReducer;