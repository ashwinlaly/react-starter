import React from 'react';
import LanguageContext from '../../../context/LanguageContext';
import UserField from './UserField';

class Form extends React.Component {
    static contectType = LanguageContext

    constructor(props) {
        super(props)
        this.state = {
            language : 'english'
        }
    }

    _handleLanguageChange = (language) => {
        this.setState({language})
    }

    render() {
        return (
            <>
                <button onClick={() => this._handleLanguageChange('english')}>English</button>
                <button onClick={() => this._handleLanguageChange('tamil')}>Tamil</button>

                <LanguageContext.Provider value={this.state.language}>
                    <UserField/>
                </LanguageContext.Provider>
            </>
        )
    }
}


export default Form