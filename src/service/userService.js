import API from './api';

const USERS = {
    getUser : (id) => {
        return API.get(`/users/${id}`)
    },
    getAllUser : () => {
        return API.get('/users')
    }
}

export default USERS;