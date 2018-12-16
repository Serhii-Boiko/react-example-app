import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {getArtists, createArtist, deleteArtist} from '@server';

import {
    ADD_ITEM,
    DELETE_ITEM,
    GET_LIST
} from './actionTypes';

import {
    addItemSuccess,
    deleteItemSuccess,
    getListSuccess
} from './actions';

function* addItem({ payload }) {
    const newArtist = yield call(createArtist, payload);
    yield put(addItemSuccess(newArtist));
}

function* deleteItem({ payload }) {
    try {
        yield call(deleteArtist, payload);
        yield put(deleteItemSuccess(payload));
    } catch (error) {
       console.warn(error);
    }
}

function* getList() {
    const artistList = yield call(getArtists);
    yield put(getListSuccess({
        time: new Date().getTime(),
        items: artistList
    }));
}

export function* sagaAddItem() {
    yield takeEvery(ADD_ITEM, addItem);
}

export function* sagaDeleteItem() {
    yield takeEvery(DELETE_ITEM, deleteItem);
}

export function* sagaGetList() {
    yield takeEvery(GET_LIST, getList);
}

export default function* rootSaga() {
    yield all([
        fork(sagaGetList),
        fork(sagaAddItem),
        fork(sagaDeleteItem),
    ]);
}
