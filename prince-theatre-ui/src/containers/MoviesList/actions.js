import {GET_MOVIES_LIST, GET_MOVIES_LIST_FAIL, GET_MOVIES_LIST_SUCCESS} from './constants';

const getMoviesList = (provider) => ({
  type: GET_MOVIES_LIST,
  provider,
});

const getMoviesListSuccess = (data) => ({
  type: GET_MOVIES_LIST_SUCCESS,
  data,
});

const getMoviesListFail = () => ({
  type: GET_MOVIES_LIST_FAIL,
});

export { getMoviesList, getMoviesListSuccess, getMoviesListFail };
