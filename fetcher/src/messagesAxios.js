import axios from 'axios';

const messagesAxios = axios.create({
    baseURL: 'http://localhost:3001/',
});

export default messagesAxios;