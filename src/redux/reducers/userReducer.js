import { 
    GET_USER,
    GET_ALL_USER,
    GET_USER_ERROR,
    UPDATE_USER_ERROR,
    GET_ALL_USER_ERROR 
   } from '../actionTypes/user';

const INITIAL_STATE = {
    users : [],
    selectedUser : null,
    isloading : false,
    iserror : false
}

export const usersReducer = (users = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_ALL_USER:
            return {...users, users : action.payload}
        case GET_ALL_USER_ERROR:
            return {...users, iserror : true}
        case UPDATE_USER_ERROR:
            return {...users, iserror : true}
        case GET_USER:
            return {...users, selectedUser : action.payload}
        case GET_USER_ERROR:
            return {...users, iserror : true}
        default:
            return users;
    }
}