import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoviesList from '../../components/MoviesList';
import { getMoviesList } from './actions';

const mapStateToProps = (state) => ({
  movies: state.moviesList.get('movies').toJS(),
  loading: state.moviesList.get('loading'),
  error: state.moviesList.get('error'),
});

const mapDispatchToProps = { getMoviesList };

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesList));
