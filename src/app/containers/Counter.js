import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { counterDecrement, counterIncrement} from '../../redux/actions/couterAction';
import { useCounter } from '../../helpers/hooks/Counter';

const Counter = (props) => {
    const counter = useCounter()

    useEffect(() => {
        if(props.count < 15){
            document.title = props.count
        }
        return () => {
            document.title = 'Hi'
        }
    }, [props.count])

    return (
        <div>
            {props.count}
            <button onClick={() => props.counterIncrement()}>Add</button>
            <button onClick={() => props.counterDecrement()}>Sub</button>

            <br/>
                Custom Hook -> {counter.value}<br/>
            <button onClick={counter.increase}>+</button>
            <button onClick={counter.decrease}>-</button>
            <button onClick={counter.zero}>0</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count : state.count
})

const mapDispatchToProps = {
    counterDecrement, counterIncrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);