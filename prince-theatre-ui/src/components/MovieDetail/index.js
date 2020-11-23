import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import ErrorAlert from "../ErrorAlert";

const getBestPrice = (prices) => {
  if (prices.length < 1) {
    return null
  }
  return prices.reduce((a, b) => Math.min(a.Price, b.Price))
};

const MovieDetail = (props) => {
  const { Title, Prices, Poster, location, getMovieDetail, error } = props;

  const movieId = location.pathname.substr(1);

  useEffect(() => {
    getMovieDetail(movieId);

  }, []);

 const bestPrice = getBestPrice(Prices);

  return (
    <MovieDetailContainer>
      {
        error &&  <ErrorAlert callback={() => getMovieDetail(movieId)} errorMessage={'Something wrong happens, please try again'}/>
      }
      <ButtonWrapper>
        <Link to='/'>
          <Button
            variant="contained"
            color="primary"
          >
            Back
          </Button>
        </Link>
      </ButtonWrapper>

      <h2>{Title}</h2>
      <PosterWrapper
        src={Poster}
        alt={Title}
      />

      {
        Prices.map((priceDetail) => {
          const { Provider, Price } = priceDetail;
          return (
            <PriceCompareIndicator
              key={Provider}
              bestPrice={Price === bestPrice}>
              {Provider} : {Price}
              {
                Price === bestPrice &&
                <span> -- Best Price!</span>
              }
            </PriceCompareIndicator>
          )
        })
      }
    </MovieDetailContainer>
  );
};

MovieDetail.propTypes = {
  Prices: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  Poster:  PropTypes.string.isRequired,
  Title:  PropTypes.string.isRequired
};

const MovieDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  left: 20px;
  top: 10%;
`;

const PosterWrapper = styled.img`
    height: 500px;
    width: 50%;
    object-fit: contain;
    margin: 20px;
`;

const PriceCompareIndicator = styled.div`
  color: ${(props) => (props.bestPrice ? 'red' : 'inherit')};
`;

export default MovieDetail;
