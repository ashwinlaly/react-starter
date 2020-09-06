import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/Input';
import { setvalueAction } from '../../../redux/actions/fieldAction';

const ComponentForTest2 = (props) => {
    const [value, setValue] = useState('')
    useEffect(() => {
        props.setvalueAction(value)
    }, [value])

    return(
        <p>
           <Input value={value} id="name" onChange={(e) => setValue(e.target.value)} name="name" />
        </p>
    )
}

const mapDispatchToProps = {
    setvalueAction
}

export default connect(null, mapDispatchToProps)(ComponentForTest2);