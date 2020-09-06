import API from './api';

const USERS = {
    getUser : (id) => {
        return API.get(`/users/${id}`)
    },
    getAllUser : () => {
        return API.get('/users')
    },
    updateUser : (id, data) => {
        return API.patch(`/users/${id}`, data)
    },
    createUser : (data) => {
        return API.post("/users", data)
    }
}

export default USERS;