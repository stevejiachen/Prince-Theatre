import { GET_MOVIE_DETAIL, GET_MOVIE_DETAIL_SUCCESS, GET_MOVIE_DETAIL_FAIL } from './constants';

const getMovieDetail = (id) => ({
  type: GET_MOVIE_DETAIL,
  id,
});

const getMovieDetailSuccess = (data) => ({
  type: GET_MOVIE_DETAIL_SUCCESS,
  data,
});

const getMovieDetailFail = () => ({
  type: GET_MOVIE_DETAIL_FAIL,
});

export { getMovieDetail, getMovieDetailSuccess, getMovieDetailFail };
