import axios from 'axios';

const apj = axios.create({
  baseURL: 'http://localhost:3333',
});

export default apj;