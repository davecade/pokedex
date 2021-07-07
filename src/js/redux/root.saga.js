import { all, call } from 'redux-saga/effects'
import { pokemonSagas } from './pokemon/pokemon.sagas'

export default function* rootSaga() {
    yield all([
        call(pokemonSagas)
    ])
}