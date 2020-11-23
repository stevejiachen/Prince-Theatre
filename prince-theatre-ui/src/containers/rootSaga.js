import { all } from 'redux-saga/effects';
import movieListSagas from './MoviesList/sagas';
import movieDetailSagas from './MovieDetail/sagas';

function* rootSaga() {
  yield all([
    movieListSagas(),
    movieDetailSagas(),
  ]);
}

export default rootSaga;
