import pokemonReducer from './pokemon/pokemon.reducer'
import { combineReducers } from 'redux'

export default combineReducers({
    pokemon: pokemonReducer
})