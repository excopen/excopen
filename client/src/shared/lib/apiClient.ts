import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://excopent.ru/api/",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})