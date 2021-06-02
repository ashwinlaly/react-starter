import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SocketIOClient from 'socket.io-client';

import { counterDecrement, counterIncrement} from '../../redux/actions/couterAction';
import { useCounter } from '../../helpers/hooks/Counter';

const Counter = (props) => {
    const counter = useCounter()
    const [trigger, setTrigger] = useState(false)
    const socket = SocketIOClient("https://socket-trigger.herokuapp.com/")

    useEffect(() => {
        if(props.count < 15){
            document.title = props.count
        }
        return () => {
            document.title = 'Hi'
        }
    }, [props.count])

    const [response, setResponse] = useState(false)
    useEffect(() => {
        socket.on("trigger",  data => {
            console.log(data)
            setResponse(data)
        }, [])
    })

    const sendTrigger = () => {
        setTrigger(!trigger)
        socket.emit("clicked", "trigger")
    }

    return (
        <div>
            {props.count}
            <button onClick={() => props.counterIncrement()}>Add</button>
            <button onClick={() => props.counterDecrement()}>Sub</button>

            <button onClick={() => sendTrigger()}>Emit</button>
                --{(response)? "1" : "0"}
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