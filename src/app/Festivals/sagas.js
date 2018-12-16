import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
    getFestivals,
    getFestival,
    deleteFestival,
    addArtistToFestival,
    createFestival,
    removeArtistFromFestival
} from '@server';

import {
    CREATE_ITEM,
    DELETE_ITEM,
    GET_ITEM,
    GET_LIST,
    ADD_ARTIST,
    REMOVE_ARTIST,
} from './actionTypes';

import {
    addArtistSuccess,
    deleteItemSuccess,
    getListSuccess,
    getItemError,
    getItemSuccess,
    removeArtistSuccess,
    createItemSuccess,
} from './actions';

function* addArtist({payload}) {
    try {
        const {festivalUuid, artistUuid} = payload;
        yield call(addArtistToFestival, festivalUuid, artistUuid);
        yield put(addArtistSuccess(festivalUuid, artistUuid));
    } catch (e) {
        console.warn(e);
    }
}

function* removeArtist({payload}) {
    try {
        const {festivalUuid, artistUuid} = payload;
        yield call(removeArtistFromFestival, festivalUuid, artistUuid);
        yield put(removeArtistSuccess(festivalUuid, artistUuid));
    } catch (e) {
        console.warn(e);
    }
}

function* getItem({ payload }) {
    try {
        const festival = yield call(getFestival, payload);
        yield put(getItemSuccess(festival));
    } catch (error) {
        yield put(getItemError('Festival not found.'));
    }
}


function* deleteItem({ payload }) {
    try {
        yield call(deleteFestival, payload);
        yield put(deleteItemSuccess(payload));
    } catch (error) {
        console.warn(error);
    }
}

function* createItem({ payload }) {
    const mewFestival = yield call(createFestival, payload);
    yield put(createItemSuccess(mewFestival));
}

function* getList() {
    const festivals = yield call(getFestivals);
    yield put(getListSuccess({
        time: new Date().getTime(),
        items: festivals
    }));
}

export function* sagaRemoveArtist() {
    yield takeEvery(REMOVE_ARTIST, removeArtist);
}

export function* sagaAddArtist() {
    yield takeEvery(ADD_ARTIST, addArtist);
}

export function* sagaGetItem() {
    yield takeEvery(GET_ITEM, getItem);
}

export function* sagaDeleteItem() {
    yield takeEvery(DELETE_ITEM, deleteItem);
}

export function* sagaCreateItem() {
    yield takeEvery(CREATE_ITEM, createItem);
}

export function* sagaGetList() {
    yield takeEvery(GET_LIST, getList);
}

export default function* rootSaga() {
    yield all([
        fork(sagaGetList),
        fork(sagaCreateItem),
        fork(sagaDeleteItem),
        fork(sagaGetItem),
        fork(sagaRemoveArtist),
        fork(sagaAddArtist),
    ]);
}
