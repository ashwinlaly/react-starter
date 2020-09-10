import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actionTypes/couter';

export const counterReducer = (count = 0, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            // return count + 1;
            return count + action.payload
        case DECREMENT_COUNTER:
            return count - 1;
        default:
            return count
    }
}