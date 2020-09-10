import React from 'react';
import { Field, reduxForm } from 'redux-form';

class UserForm extends React.Component {

    renderInput = ({input, label, meta}) => {
        return(
            <div className="form-input">
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }

    renderError = ({error, touched}) => {
        if(touched) {
            return (
                <div>
                    {error}
                </div>
            )
        }
        return null
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                <Field name="first_name" component={this.renderInput} label="Enter the First Name"/>
                <Field name="last_name" component={this.renderInput} label="Enter the Last Name"/>
                <Field name="email" component={this.renderInput} label="Enter the Email"/>
                <button type="submit">S</button>
            </form>
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

export default reduxForm({
    form : "userForm",
    validate
})(UserForm)