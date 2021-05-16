import pokemonReducer from './pokemon/pokemon.reducer'
import searchReducer from './search/search.reducer'
import { combineReducers } from 'redux'

export default combineReducers({
    pokemon: pokemonReducer,
    search: searchReducer
})