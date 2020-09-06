import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../../../redux/actions/userAction';

class Add extends React.Component {

    renderInput = ({input, label, meta}) => {
        return (
            <div className="form-group">
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }

    renderError({error, touched}){
        if(touched){
            return (
                <div className="alert alert-danger">
                    {error}
                </div>
            )
        }
        return null
    }

    _onhandleSubmit = (formValues) => {
        this.props.createUser(formValues)
    }
    
    render() {
        return (
            <>
                <h1>Add User</h1>
                <form onSubmit={this.props.handleSubmit(this._onhandleSubmit)}>
                    <Field name="first_name" component={this.renderInput} label="Enter the First Name"/>
                    <Field name="last_name" component={this.renderInput} label="Enter the Last Name"/>
                    <Field name="email" component={this.renderInput} label="Enter the Email"/>
                    <button>Submit</button>
                </form>
            </>
        )
    }
}

const validate = (formValues) => {
    const errors = {}

    if(!formValues.first_name) {
        errors.first_name = 'Please Enter a valid First Name'
    }
    if(!formValues.last_name) {
        errors.last_name = 'Please Enter a valid Last Name'
    }
    if(!formValues.email) {
        errors.email = 'Please Enter a valid Email'
    }
    return errors;
}

const CreateUserFormWarpped = reduxForm({
    form : 'userCreate',
    validate
})(Add);

const mapDispatchToProps = {
    createUser
}

export default connect(null, mapDispatchToProps)(CreateUserFormWarpped);