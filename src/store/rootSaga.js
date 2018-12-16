import { all } from 'redux-saga/effects';
import { sagas as festivalsSagas } from '@/app/Festivals';
import { sagas as artistsSagas } from '@/app/Artists';

export default function* rootSaga() {
    yield all([
        festivalsSagas(),
        artistsSagas()
    ]);
}
