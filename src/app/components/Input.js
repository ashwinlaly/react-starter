import React from 'react';

const Input = (props) => {
    return(
        <>
            <input type={props.type} 
                   namne={props.name} 
                   id={props.id} 
                   placeholder={props.placeholder1} 
                   value={props.value} 
                   onChange={props.onChange}/>
        </>
    )
}

Input.defaultProps = {
    type : 'text',
    name : 'name',
    id : 'id',
    placeholder : 'Enter the value',
    value : '',
    onChange : (event) => {
        console.log(event.target.value)
    }
}

export default Input;