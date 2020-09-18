import React from 'react';
import LanguageContext from '../../../context/LanguageContext';

class Field extends React.Component {
    render(){
        return (
            <>
                <label>
                    <LanguageContext.Consumer>
                        {(value) => value}
                    </LanguageContext.Consumer>
                </label>
            </>
        )
    }
}

export default Field