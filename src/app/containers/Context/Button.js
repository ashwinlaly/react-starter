import React from 'react';
import LanguageContext from '../../../context/LanguageContext';

class Button extends React.Component {
    static contextType = LanguageContext

    render(){
        return (
            <>
                <button>Button - {this.context}</button>
            </>
        )
    }
}

export default Button