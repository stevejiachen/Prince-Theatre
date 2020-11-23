const axios= require('axios');
const axiosRetry = require('axios-retry');

const instance = axios.create({
  headers: {'x-api-key': process.env.API_KEY}
});

axiosRetry(instance, { retries: 5 });

module.exports = instance;
