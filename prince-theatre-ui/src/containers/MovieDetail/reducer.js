import { fromJS } from 'immutable';
import { GET_MOVIE_DETAIL_SUCCESS } from './constants';

export const initialState = fromJS({
  Title: '',
  Prices: [],
  Poster: '',
});

export default function movieDetail(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_DETAIL_SUCCESS:
      return fromJS(action.data);
    default:
      return state;
  }
}
