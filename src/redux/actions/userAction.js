import USERS from '../../service/userService';
import { GET_ALL_USER, GET_USER } from '../actionTypes/user';

export const getAllUsers = () => async dispatch => {
    const response = await (await USERS.getAllUser()).data.data
    return dispatch({ type : GET_ALL_USER, payload : response})
}

export const getUser = (id) => async dispatch => {
    const response = (await USERS.getUser(id)).data.data
    return dispatch({type : GET_USER, payload : response})
}