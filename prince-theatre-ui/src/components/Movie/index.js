import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

const Movie = (props) => {
  const { ID, Poster, Title } = props;

  return (
      <Card>
        <CardActionArea >
          <Link to={`/${ID}`}>
            <CardMedia
              style={{
                height: 200,
                width: '100%'
              }}
              image={Poster}
              title={Title}
            />
            <CardContent>
              <MovieTitle>
                {Title}
              </MovieTitle>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
  );
}

const MovieTitle = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

Movie.propTypes = {
  ID: PropTypes.string.isRequired,
  Poster:  PropTypes.string.isRequired,
  Title:  PropTypes.string.isRequired
};

export default Movie;
