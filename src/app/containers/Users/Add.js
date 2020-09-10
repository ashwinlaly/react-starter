import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../../redux/actions/userAction';
import UserForm from './UserForm';

class Add extends React.Component {

    _onhandleSubmit = (formValues) => {
        this.props.createUser(formValues)
    }
    
    render() {
        return (
            <>
                <h1>Add User</h1>
                <UserForm onSubmit={this._onhandleSubmit}/>
            </>
        )
    }
}

const mapDispatchToProps = {
    createUser
}

export default connect(null, mapDispatchToProps)(Add);