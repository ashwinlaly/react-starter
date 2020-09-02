import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actionTypes/couter';

export const counterIncrement = () => {
    return {
        type : INCREMENT_COUNTER,
        payload : 10
    }
}

export const counterDecrement = () => {
    return {
        type : DECREMENT_COUNTER
    }
}