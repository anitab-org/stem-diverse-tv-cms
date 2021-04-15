import axios from 'axios';
// Locally you need to change the API_URL to http://localhost:5000
// When you want to register your account on the hosted backend use API_URL = https://stem-diverse-tv.herokuapp.com/

const API_URL_PROD = 'https://stem-diverse-tv.herokuapp.com/';
const API_URL_LOCAL = 'http://localhost:5000';

const publicFetch = axios.create({
  baseURL: process.env.REACT_APP_ENVIRONMENT_CONFIG === 'local' ? API_URL_LOCAL : API_URL_PROD,
});

export { publicFetch };
