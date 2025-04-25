// noinspection Annotator

import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://localhost:8080/api/",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})