import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import moviesList from './MoviesList/reducer';
import movieDetail from "./MovieDetail/reducer";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  moviesList,
  movieDetail,
});

export default createRootReducer;
