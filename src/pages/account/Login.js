import React, { Component } from 'react';
import SingePageWrapper from '../../components/SinglePageWrapper';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class Login extends Component {
    state = {
        email: '',
        password: '',
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state);
    };
    render() {
        return (
            <SingePageWrapper>
                <div className="login-form ui small form">
                    <h1>User Login</h1>

                    <label for="email">Email</label>
                    <br></br>
                    <input type="text" id="email" name="email"></input>
                    <br></br>

                    <label for="pwd">Password:</label>
                    <br></br>
                    <input type="password" id="pwd" name="pwd"></input>
                    <button class="ui yellow button">LOG IN</button>
                    <p>
                        {' '}
                        Don't have an account? <a href="/register">Register now</a>{' '}
                    </p>
                </div>
            </SingePageWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(signIn(creds)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
