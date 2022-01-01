import { takeLatest, put, all, call } from "redux-saga/effects";
import { PokemonActionTypes } from "./pokemon.types";
import { enableModal } from "../modal/modal.actions";
import axios from "axios";
import {
    fetchPokemonDataSuccess,
    fetchPokemonDataFailure,
    addPokemonToSelected,
    startLoading,
} from "./pokemon.actions";

export function* selectPokemonAsync({ payload }) {
    try {
        yield put(startLoading());
        const pokeData = yield axios.get(`/pokemon/${payload}`);
        yield put(addPokemonToSelected(pokeData.data));
        yield put(fetchPokemonDataSuccess());
        yield put(enableModal());
    } catch (error) {
        yield put(fetchPokemonDataFailure(error));
    }
}

export function* onSelectPokemon() {
    yield takeLatest(PokemonActionTypes.SELECT_POKEMON, selectPokemonAsync);
}

export function* pokemonSagas() {
    yield all([call(onSelectPokemon)]);
}
