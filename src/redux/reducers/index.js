import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import { usersReducer } from './userReducer';
import { counterReducer } from './counterReducer';
import { setFieldTextReducer } from './fieldReducers';

const reducers = combineReducers({
    count : counterReducer,
    users : usersReducer,
    fieldValue : setFieldTextReducer,
    form : formReducer
})

export default reducers;