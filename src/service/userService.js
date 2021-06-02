import { request as API, _USERS } from './api';

const USERS = {
    authGoogleLogin : (token) => {
        return API.post(`/${_USERS}/auth`, token)
    },
    getUser : (id) => {
        return API.get(`/${_USERS}/${id}`)
    },
    getAllUser : () => {
        return API.get(`/${_USERS}`)
    },
    updateUser : (id, data) => {
        return API.patch(`/${_USERS}/${id}`, data)
    },
    createUser : (data) => {
        return API.post(`/${_USERS}`, data)
    },
    deleteUser : (id) => {
        return API.delete(`/${_USERS}/${id}`)
    }
}

export default USERS;