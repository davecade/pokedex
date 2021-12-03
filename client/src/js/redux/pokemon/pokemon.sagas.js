import { takeLatest, put, all, call, } from "redux-saga/effects";
import { PokemonActionTypes } from "./pokemon.types";
import { names, typeList } from '../../data/pokemon.data'
import { enableModal } from '../modal/modal.actions'
import {
    fetchPokemonDataSuccess,
    fetchPokemonDataFailure,
    addPokemonToSelected,
    startLoading
} from "./pokemon.actions";


const removeUnwantedArrowText = text => {
    for(let i=0; i<text.length ;i++) {
      if(text[i]==='') {
        text[i] = " "
      }
    }
    return text
}


export function* selectPokemonAsync({payload}) {

    // -- Pokemon Image API: https://pokeres.bastionbot.org/images/pokemon/1.png
    // -- Pokemon Data API: https://pokeapi.co/api/v2/pokemon/1

    try {
            yield put(startLoading())
            let pokeDataAPI = fetch(`https://pokeapi.co/api/v2/pokemon/${payload}`)
            let descriptionAPI = fetch(`https://pokeapi.co/api/v2/pokemon-species/${payload}/`)
            
            //-- Once data is received, convert to json
            let pokeData = yield Promise.all([pokeDataAPI, descriptionAPI])
            let pokeDataStats = yield pokeData[0].json()
            let pokeDataDescription = yield pokeData[1].json()

            // -- Get description parts and remove unwanted arrow text
            // -- Then combine description parts into one
            let desciptionPart1 = removeUnwantedArrowText(pokeDataDescription.flavor_text_entries[10].flavor_text.split("")).join("")
            let desciptionPart2 = removeUnwantedArrowText(pokeDataDescription.flavor_text_entries[11].flavor_text.split("")).join("")
            let description = `${desciptionPart1} ${desciptionPart2}`
        
            
            // -- Create pokemon object
            let pokemonObject = {
              id: payload,
              image: `./images/pokemon_${payload}.jpg`,
              name: names[payload-1],
              type: typeList[payload-1],
              description: description,
              hp: pokeDataStats.stats[0].base_stat,
              height: pokeDataStats.height,
              weight: pokeDataStats.weight,
              attack: pokeDataStats.stats[1].base_stat,
              defense: pokeDataStats.stats[2].base_stat,
              speed: pokeDataStats.stats[5].base_stat,
            }

            yield put(addPokemonToSelected(pokemonObject))
            yield put(fetchPokemonDataSuccess())
            yield put(enableModal())

    } catch(error) {
        yield put(fetchPokemonDataFailure(error))
    }
}


export function* onSelectPokemon(){
    yield takeLatest(PokemonActionTypes.SELECT_POKEMON, selectPokemonAsync)
}

export function* pokemonSagas() {
    yield all([
        call(onSelectPokemon)
    ])
}