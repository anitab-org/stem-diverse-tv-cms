import axios from 'axios';

// const API_URL = 'http://localhost:5000'
const API_URL = ''; // we are proxying the requests to the backend

const publicFetch = axios.create({
    baseURL: API_URL,
});

export { publicFetch };
