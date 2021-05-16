const INITIL_STATE = {
    pokemon: null
}

const pokemonReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD-NEW-POKEMON':
            return {
                ...state,
                pokemon: action.payload
            }
        default:
            return state
    }
}

export default pokemonReducer;