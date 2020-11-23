import { fromJS } from 'immutable';
import {GET_MOVIES_LIST, GET_MOVIES_LIST_SUCCESS, GET_MOVIES_LIST_FAIL} from "./constants";

export const initialState = fromJS({
  movies: [],
  loading: false,
  error: false,
});

export default function moviesList(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_LIST:
      return state.set('loading', true);
    case GET_MOVIES_LIST_SUCCESS:
      return state.set('loading', false)
                  .set('movies', fromJS(action.data));
    case GET_MOVIES_LIST_FAIL:
      return state.set('loading', false)
                  .set('error', true);
    default:
      return state;
  }
}
