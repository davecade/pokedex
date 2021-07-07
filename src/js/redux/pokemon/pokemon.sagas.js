import { takeLatest, put, all, call, } from "redux-saga/effects";
import { PokemonActionTypes } from "./pokemon.types";
import {
    fetchPokemonDataSuccess,
    fetchPokemonDataFailure,
    addNewPokemon,
} from "./pokemon.actions";


const removeUnwantedArrowText = text => {
    for(let i=0; i<text.length ;i++) {
      if(text[i]==='') {
        text[i] = " "
      }
    }
    return text
}

export function* fetchPokemonsAync() {
    // -- Pokemon Image API: https://pokeres.bastionbot.org/images/pokemon/1.png
    // -- Pokemon Data API: https://pokeapi.co/api/v2/pokemon/1

    try {
        
        for(let i=1; i <= 151; i++) {

            // -- Get data from API's
            let pokeDataAPI = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            let descriptionAPI = fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
            
            //-- Once data is received, convert to json
            let pokeData = yield Promise.all([pokeDataAPI, descriptionAPI])
            let pokeDataStats = yield pokeData[0].json()
            let pokeDataDescription = yield pokeData[1].json()
  
            // -- add types of each pokemon to an array
            let typeList = []
            for(let i=0; i<pokeDataStats.types.length; i++) typeList.push(pokeDataStats.types[i].type.name)
            
            // -- Get description parts and remove unwanted arrow text
            // -- Then combine description parts into one
            let desciptionPart1 = removeUnwantedArrowText(pokeDataDescription.flavor_text_entries[10].flavor_text.split("")).join("")
            let desciptionPart2 = removeUnwantedArrowText(pokeDataDescription.flavor_text_entries[11].flavor_text.split("")).join("")
            let description = `${desciptionPart1} ${desciptionPart2}`
  
            // -- Create pokemon object
            let pokemonObject = {
              id: i,
              image: `./images/pokemon_${i}.jpg`,
              name: pokeDataStats.name,
              type: typeList,
              description: description,
              hp: pokeDataStats.stats[0].base_stat,
              height: pokeDataStats.height,
              weight: pokeDataStats.weight,
              attack: pokeDataStats.stats[1].base_stat,
              defense: pokeDataStats.stats[2].base_stat,
              speed: pokeDataStats.stats[5].base_stat,
            }
  
            //-- add pokemon object to pokemon list in REDUX
            yield put(addNewPokemon(pokemonObject))
        }
        yield put(fetchPokemonDataSuccess())

    } catch(error) {

        yield put(fetchPokemonDataFailure(error))

    }
}

export function* onfetchPokemonDataStart(){
    yield takeLatest(PokemonActionTypes.FETCH_POKEMON_DATA_START, fetchPokemonsAync)
}

export function* pokemonSagas() {
    yield all([
        call(onfetchPokemonDataStart)
    ])
}