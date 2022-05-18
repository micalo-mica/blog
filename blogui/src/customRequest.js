import axios from 'axios';

const authFetch = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        Accept: 'application/json',
    },
});

export default authFetch