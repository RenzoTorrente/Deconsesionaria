import axios from 'axios';
import { PORT } from '../constants/constants';
const BASEURL = `http://localhost:${PORT}/api`;

const axiosIntance = axios.create({
    baseURL:BASEURL,
})
export default axiosIntance;