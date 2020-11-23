import { fromJS } from 'immutable';
import {GET_MOVIES_LIST_SUCCESS} from "./constants";

export const initialState = fromJS({
  movies: [],
});

export default function moviesList(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_LIST_SUCCESS:
      return state.set('movies', fromJS(action.data));
    default:
      return state;
  }
}
