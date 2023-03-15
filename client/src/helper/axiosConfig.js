import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001'
});

instance.defaults.headers['accessToken'] = localStorage.getItem('accessToken');

export default instance;
