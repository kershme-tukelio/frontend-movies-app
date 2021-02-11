import axios from 'axios'
// import store from '../store/index.js'

const HTTP = axios.create({
    baseURL: 'http://localhost:8000/api/'
})

HTTP.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
})

export default HTTP