import React from 'react';
import { connect } from 'react-redux';
import { authGoogleLogin } from '../../redux/actions/userAction';
import GoogleLogin from 'react-google-login';

const Login = (props) => {
    const onSuccess = (res) => {
        let id_token = {
            id_token : res.tokenObj.id_token
        }
        props.authGoogleLogin(id_token)
    }
    return (
        <>
            <h1> Login </h1>
            <GoogleLogin
                clientId = "478633767543-t95fpsbj9g3k3ofs3li289okupoe3lf1.apps.googleusercontent.com"
                buttonText = 'Login'
                onSuccess={onSuccess}
                onFailure={(e) => console.log(2, e)}
            />
        </>
    )
}

const mapDispatchToProps = {
    authGoogleLogin
}

export default connect(null, mapDispatchToProps)(Login);