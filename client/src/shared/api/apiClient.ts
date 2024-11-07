import axios from "axios";

export const apiClient = axios.create({
    baseURL: "http://excopent.ru/api",
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})