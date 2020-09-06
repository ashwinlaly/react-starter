import USERS from '../../service/userService';
import { 
         GET_USER, 
         UPDATE_USER, 
         GET_ALL_USER,
         GET_USER_ERROR,
         CREATE_NEW_USER,
         UPDATE_USER_ERROR,
         GET_ALL_USER_ERROR,
         CREATE_NEW_USER_ERROR,
        } from '../actionTypes/user';

export const getAllUsers = () => dispatch => {
    USERS.getAllUser().then(({data}) => {
        return dispatch({type : GET_ALL_USER, payload : data.data})
    }).catch(error => {
        return dispatch({type : GET_ALL_USER_ERROR})
    })
}

export const getUser = (id) => dispatch => {
    USERS.getUser(id).then(({data}) => {
        return dispatch({type : GET_USER, payload : data.data})
    }).catch(error => {
        return dispatch({type : GET_USER_ERROR})
    })
}

export const updateUser = (id, data) => dispatch => {
    USERS.updateUser(id, data).then(({data}) => {
        return dispatch({type : UPDATE_USER, payload : data})
    }).catch(error => {
        return dispatch({type : UPDATE_USER_ERROR})
    })
}

export const createUser = (data) => dispatch => {
    USERS.createUser(data).then(data =>{
        return dispatch({type: CREATE_NEW_USER, payload : data})
    }).catch(error => {
        return dispatch({type: CREATE_NEW_USER_ERROR})
    })
}