import { PokemonActionTypes } from '../pokemon/pokemon.types'

const INITIAL_STATE = {
    selected: {type: []},
    loading: false,
    error: null
}

const pokemonReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PokemonActionTypes.ADD_POKEMON_TO_SELECTED:
            return {
                ...state,
                selected: action.payload
            }
        case PokemonActionTypes.START_LOADING:
            return {
                ...state,
                loading: true
            }
        case PokemonActionTypes.FETCH_POKEMON_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            }
        case PokemonActionTypes.FETCH_POKEMON_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export default pokemonReducer;