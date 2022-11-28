import axios from 'axios';

export const key = "bc3ad2115632abdd2672e05299de7cc73723101a7";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;
