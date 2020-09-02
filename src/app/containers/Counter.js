import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { counterDecrement, counterIncrement} from '../../redux/actions/couterAction';

const Counter = (props) => {
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