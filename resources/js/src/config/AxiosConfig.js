import axios from "axios";

const AxiosConfig = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 50000,
    headers: {
        "Content-Type": "application/json",
        'Spa-Token': process.env.REACT_APP_SPA_TOKEN
    },
});

export default AxiosConfig;
