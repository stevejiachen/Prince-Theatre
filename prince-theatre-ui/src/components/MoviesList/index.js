import React, { useEffect } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Movie from '../Movie';

function MovieList(props) {

  useEffect(() => {
    const { getMoviesList} = props;
    getMoviesList();

  }, []);

  const { movies } = props;

  return (
    <div>
      <h2>Classic Movies At Home</h2>

      <GridList cellHeight={300} cols={4} spacing={10}>
        {movies.map((movie) => (
          <GridListTile  key={movie.ID} cols={1}>
            <Movie {...movie}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

MovieList.defaultProps = {
};

MovieList.propTypes = {
};

export default MovieList;
