import { WHEN_TEXT_CHANGE } from '../actionTypes/fields';

export const setvalueAction = (value) => {
    return {type : WHEN_TEXT_CHANGE, payload: value}
}