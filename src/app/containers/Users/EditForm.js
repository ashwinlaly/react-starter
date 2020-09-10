import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import UserForm from './UserForm';
import { getUser, updateUser } from '../../../redux/actions/userAction';

class EditForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id : '',
            first_name : '',
            last_name : '',
            email : ''
        }
    }

    componentDidMount(){
        this.props.getUser(this.props.match.params.id)
    }

    componentWillReceiveProps(newProps){
        this.setState({...newProps.user})
    }
    
    _onhandleSubmit = (formValues) => {
        this.props.updateUser(this.state.id, formValues)
    }

    render() {
        if(this.state.id === ''){
            return null 
        }
        return (
            <>
                <h1>Edit User</h1>
                <UserForm initialValues={_.pick(this.state, 'first_name', 'last_name', 'email')} onSubmit={this._onhandleSubmit}/>
            </>
        )
    }
}

const mapStateToProp = (state) => ({
    user : state.users.selectedUser
})

const mapDispatchToProps = {
    getUser, updateUser
}

export default connect(mapStateToProp, mapDispatchToProps)(EditForm)