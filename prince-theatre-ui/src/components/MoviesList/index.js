import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import Movie from '../Movie';
import Grid from "@material-ui/core/Grid";

function MovieList(props) {

  useEffect(() => {
    const { getMoviesList} = props;
    getMoviesList();

  }, []);

  const { movies } = props;

  return (
    <div>
      <Grid container spacing={3} >
        {movies.map((movie) => (
          <Grid  item key={movie.ID} xs={12} sm={12} md={6} lg={3}>
            <Movie {...movie}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

MovieList.defaultProps = {
};

MovieList.propTypes = {
  getMoviesList: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MovieList;
