import { GET_ALL_USER, GET_USER } from '../actionTypes/user';

const INITIAL_STATE = {
    users : [],
    selectedUser : null
}

export const usersReducer = (users = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_ALL_USER:
            return {...users, users : action.payload}
        case GET_USER:
            return {...users, selectedUser : action.payload}
        default:
            return users;
    }
}