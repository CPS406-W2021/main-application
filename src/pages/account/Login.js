import React, { Component } from "react";
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
    }
    render() {
        return <div>
            <h1>User Login</h1>
            <div>
                <div>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email"></input>
                </div>
                <div>
                    <label for="pwd">Password:</label>
                    <input type="password" id="pwd" name="pwd"></input>
                </div>
                <a href="/portal"><button type="button">Log In</button></a>
                <p>Don't have an account? <a href="/register">Register now</a> </p>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
