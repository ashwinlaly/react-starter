import { combineReducers } from "redux";

import { counterReducer } from './counterReducer';
import { usersReducer } from './userReducer';

const reducers = combineReducers({
    count : counterReducer,
    users : usersReducer
})

export default reducers;