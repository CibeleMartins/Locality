import axios from 'axios';

const api = axios.create({
  baseURL:'https://locality-api.vercel.app/'
})


export default api;