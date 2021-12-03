import { SearchActionTypes } from '../search/search.types'

export const searchPokemon = usersEntry => ({
    type: SearchActionTypes.SEARCH_POKEMON,
    payload: usersEntry
})

export const updateTypeSelection = type => ({
    type: SearchActionTypes.TYPE_SELECTED,
    payload: type
})