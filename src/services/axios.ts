import axios from 'axios';

console.log(import.meta.env.VITE_BASE_API_URL);
const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    withCredentials: true,
});

export default api;
