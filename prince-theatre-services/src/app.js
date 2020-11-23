const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3456 || process.env.PORT;

app.set('port',  port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Routes
const routes = require('./routes/route.js');
app.use(routes);

// 404s
app.use(function(req, res) {
  res.status(404).json({
    message: 'Sorry can\'t find that!'
  });
});

// Other errors
app.use(function (err, req, res, next) {
  let errorMessage = 'Internal server error';
  if (err instanceof SyntaxError) {
    errorMessage = 'Input not formatted correctly';
  }
  res.status(500).json({
    status: 'ERROR',
    message: errorMessage,
    results: {}
  });

});

app.listen(app.get('port'), () => {
  const environment = (process.env.NODE_ENV === undefined) ? 'default' : process.env.NODE_ENV;
  console.log(`Listening on ${port} for ${environment} environment`);
});
