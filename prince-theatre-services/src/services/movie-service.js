const axios = require('../util/axios');

class MovieService {
  async getMoviesListByProvider (provider) {
    const { data } =  await axios.get(`https://challenge.lexicondigital.com.au/api/${provider}/movies`);
    return data;
  }
  async getMovieDetailById(id, provider) {
    try {
      const { data } = await axios.get(`https://challenge.lexicondigital.com.au/api/${provider}/movie/${id}`);
      return data;
    } catch (e) {
      throw new Error(e)
    }
  }
}

module.exports = MovieService;
