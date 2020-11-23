import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MovieDetail from '../../components/MovieDetail';
import { getMovieDetail } from './actions';

const mapStateToProps = (state) => ({
  Title: state.movieDetail.get('Title'),
  Prices: state.movieDetail.get('Prices').toJS(),
  Poster: state.movieDetail.get('Poster'),
  loading: state.movieDetail.get('loading'),
  error: state.movieDetail.get('error'),
});

const mapDispatchToProps = { getMovieDetail };

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetail));
