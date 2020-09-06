import { WHEN_TEXT_CHANGE } from '../actionTypes/fields';

const INITIAL__FIELD_VALUE_STATE = ''

export const setFieldTextReducer = (state = INITIAL__FIELD_VALUE_STATE, action) => { 
    if(action.type === WHEN_TEXT_CHANGE){
        return  action.payload
    } else {
        return ''
    }
}