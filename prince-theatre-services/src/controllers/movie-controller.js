const MovieService = require('../services/movie-service');
const lodash = require('lodash');

class MovieController {
  constructor () {
    this.movieService = new MovieService()
  }

   async getMoviesList(req, res) {
    this.fwMovies = [];
    this.cwMovies = [];
    try {
      const { Movies: fwMovies} = await this.movieService.getMoviesListByProvider('filmworld');
      this.fwMovies = fwMovies
    } catch (e) {
      console.error(e)
    }
     try {
       const { Movies: cwMovies } = await this.movieService.getMoviesListByProvider('cinemaworld');
       this.cwMovies = cwMovies
     } catch (e) {
       console.error(e)
     }

    const moviesList = lodash.unionBy(this.fwMovies, this.cwMovies, 'Title').map((movie) => ({
      ...movie,
      ID: movie.ID.substr(2)
    }));

    res.send(moviesList)
  }

  async getMovieDetail(req, res) {
    this.movieDetails = [];
    const { providers, id } = req.body;

    await Promise.all(providers.map(async (provider) => {
      try {
        const {name, shorthand} = provider;
        const movieId = `${shorthand}${id}`;
        const movieDetail = await this.movieService.getMovieDetailById(movieId, name);
        this.movieDetails.push({...movieDetail, provider});
      } catch (e) {
        console.error(e)
      }
    }));

    try {
      const movieDetail = {
        Title: this.movieDetails[0].Title,
        Prices: [],
        Poster: this.movieDetails[0].Poster
      };

      providers.forEach((provider) => {
        const foundDetail = this.movieDetails.find((detail) => {
          return lodash.isEqual(provider, detail.provider)
        });
        movieDetail.Prices.push({Provider: provider.name, Price: foundDetail ? foundDetail.Price : 'not available' });
      });

      res.send(movieDetail)
    } catch (e) {
      res.status(502);
      res.send('something went wrong, please try later')
    }
  }
}

module.exports = MovieController;
