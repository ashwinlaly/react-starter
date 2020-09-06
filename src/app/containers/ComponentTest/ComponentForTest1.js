import React from 'react';
import { connect } from 'react-redux';

import ComponentForTest2 from './ComponentForTest2';

const ComponentForTest1 = ({value}) => {
    return(
        <>
        <br/>
        {value}           
            <ComponentForTest2/>
        </>
    )
}

const mapStateToProps = ({fieldValue}) => ({
    value : fieldValue
})

export default connect(mapStateToProps, null)(ComponentForTest1);