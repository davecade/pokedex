import { SearchActionTypes } from '../search/search.types'

const INITIAL_STATE = {
    searchField: ''
}

const searchReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case SearchActionTypes.SEARCH_POKEMON:
            return {
                ...state,
                searchField: action.payload
            }
        default:
            return state
    }
}

export default searchReducer;