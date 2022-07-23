import axios from 'axios';

//const VITE_API = process.env.VITE_URL_DEV;

const streamApi = axios.create({
  baseURL: 'http://localhost:4000/api/streams',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default streamApi;
