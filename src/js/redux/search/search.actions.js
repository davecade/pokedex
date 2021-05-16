import { SearchActionTypes } from '../search/search.types'

export const searchPokemon = usersEntry => ({
    type: SearchActionTypes.SEARCH_POKEMON,
    payload: usersEntry
})