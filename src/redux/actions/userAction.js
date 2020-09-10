import USERS from '../../service/userService';
import * as types from '../actionTypes/user';
import history from '../../routes/history';

export const getAllUsers = () => dispatch => {
    USERS.getAllUser().then(({data}) => {
        dispatch({type : types.GET_ALL_USER, payload : data.data})
    }).catch(error => {
        dispatch({type : types.GET_ALL_USER_ERROR})
    })
}

export const getUser = (id) => dispatch => {
    USERS.getUser(id).then(({data}) => {
        dispatch({type : types.GET_USER, payload : data.data})
    }).catch(error => {
        dispatch({type : types.GET_USER_ERROR})
    })
}

export const updateUser = (id, data) => dispatch => {
    USERS.updateUser(id, data).then(({data}) => {
        dispatch({type : types.UPDATE_USER, payload : data})
    }).catch(error => {
        dispatch({type : types.UPDATE_USER_ERROR})
    })
    history.push("/login")
}

export const createUser = (data) => dispatch => {
    USERS.createUser(data).then(data =>{
        dispatch({type: types.CREATE_NEW_USER, payload : data})
    }).catch(error => {
        dispatch({type: types.CREATE_NEW_USER_ERROR})
    })
    history.push("/users")
}

export const deleteUser = (id) => dispatch => {
    USERS.deleteUser(id).then(data => {
        dispatch({type : types.DELETE_USER, payload : data})
    }).catch(error => {
        dispatch({type : types.DELETE_USER_ERROR})
    })
    history.push("/users")
}