import { fromJS } from 'immutable';
import {GET_MOVIE_DETAIL, GET_MOVIE_DETAIL_SUCCESS, GET_MOVIE_DETAIL_FAIL} from './constants';

export const initialState = fromJS({
  Title: '',
  Prices: [],
  Poster: '',
  loading: false,
  error: false,
});

export default function movieDetail(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_DETAIL:
      return state.set('loading', true);
    case GET_MOVIE_DETAIL_SUCCESS:
      return fromJS({...action.data, loading: false, error: false});
    case GET_MOVIE_DETAIL_FAIL:
      return state.set('loading', false)
                  .set('error', true);
    default:
      return state;
  }
}
