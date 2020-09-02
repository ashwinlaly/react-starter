import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actionTypes/couter';

export const counterReducer = (count = 0, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            // return count + 1;
            return count + action.payload
            break;
        case DECREMENT_COUNTER:
            return count - 1;
            break;
        default:
            return count
            break;
    }
}