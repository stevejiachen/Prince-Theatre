import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_MOVIES_LIST } from "./constants";
import {getMoviesListFail, getMoviesListSuccess} from "./actions";

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

function* getMoviesListHandler({ provider }) {

  try {
    const { data } = yield axios.get(`${apiEndpoint}/movies`)
    yield put(getMoviesListSuccess(data))

  } catch (error) {
    yield put(getMoviesListFail());
  }
}


function* movieListSagas() {
  yield takeLatest(GET_MOVIES_LIST, getMoviesListHandler);
}

export default movieListSagas;
