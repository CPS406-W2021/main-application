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
        return (
        <div>
            Login!
            <br/>
            <form onSubmit={this.handleSubmit}>
                <label for='email'>Email</label><br/>
                <input type='email' placeholder='Email' name='email' required /><br/>
                <label for='password'>Password</label><br/>
                <input type='password' placeholder='Password' name='password' required /><br/>
                <button type='submit'>Login</button>
            </form>
        </div>);
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
