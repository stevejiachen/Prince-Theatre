import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";


const getBestPrice = (prices) => {
  if (prices.length < 1) {
    return null
  }
  return prices.reduce((a, b) => Math.min(a.Price, b.Price))
};

const MovieDetail = (props) => {
  const { Title, Prices, Poster, location } = props;

  useEffect(() => {
    const { getMovieDetail} = props;
    getMovieDetail(location.pathname.substr(1));

  }, []);

 const bestPrice = getBestPrice(Prices);


  return (
    <MovieDetailContainer>
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
      <CardMedia
        style={{
          height: 500,
          width: '50%'
        }}
        image={Poster}
        title={Title}
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
}

MovieDetail.propTypes = {
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

const PriceCompareIndicator = styled.div`
  color: ${(props) => (props.bestPrice ? 'red' : 'inherit')};
`;

export default MovieDetail;
