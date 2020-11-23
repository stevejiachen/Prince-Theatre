import {takeLatest, put, retry} from 'redux-saga/effects';
import axios from 'axios';
import { GET_MOVIE_DETAIL } from "./constants";
import {getMovieDetailFail, getMovieDetailSuccess} from "./actions";

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

function* getMovieDetailHandler({ id }) {
  try {
    const { data } = yield retry(3, 500 , () => axios.post(`${apiEndpoint}/movie`,
      {
        providers: [{name: 'cinemaworld', shorthand: 'cw'}, {name: 'filmworld', shorthand: 'fw'}],
        id
      }));
    yield put(getMovieDetailSuccess(data))

  } catch (error) {
    yield put(getMovieDetailFail())
  }
}


function* movieDetailSagas() {
  yield takeLatest(GET_MOVIE_DETAIL, getMovieDetailHandler);
}

export default movieDetailSagas;
