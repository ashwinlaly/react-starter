import axios from "axios";

const BASE_URL = 'https://reqres.in/api'
const _USERS = 'users'

const request = {
    get : async (url) => {
        return await axios.get(`${BASE_URL}${url}`)
    },
    post : async (url, data) => {
        return await axios.post(`${BASE_URL}${url}`, data)
    },
    patch : async (url, data) => {
        return await axios.patch(`${BASE_URL}${url}`, data)
    },
    delete : async (url) => {
        return await axios.delete(`${BASE_URL}${url}`)
    }
}

export { 
    request,
    _USERS
};