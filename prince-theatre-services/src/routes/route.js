const express = require('express');
const MovieController = require('../controllers/movie-controller');

const router = express.Router();
const movieController = new MovieController();

router.get('/movies', function (req, res) {
  movieController.getMoviesList(req, res)
});

router.post('/movie', function (req, res) {
  movieController.getMovieDetail(req, res)
});

// Heartbeat

router.get('/heartbeat', function (req, res) {
  res.status(200).json({
    application: 'prince-theatre-service',
    status: 'UP',
    environment: process.env.NODE_ENV,
  });
});

module.exports = router;
