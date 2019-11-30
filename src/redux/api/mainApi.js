import axios from 'axios';
const api = process.env.MAIN_API;

export default axios.create({
    baseURL: api
});
