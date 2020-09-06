import axios from "axios";

const BASE_URL = 'https://reqres.in/api'

const request = {
    get : async (url) => {
        return await axios.get(`${BASE_URL}${url}`)
    },
    post : async (url, data) => {
        return await axios.post(`${BASE_URL}${url}`, data)
    },
    patch : async (url, data) => {
        return await axios.patch(`${BASE_URL}${url}`, data)
    }
}

export default request;