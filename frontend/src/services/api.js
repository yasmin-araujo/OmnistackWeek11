import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333', //parte da url que nunca muda
})

export default api;