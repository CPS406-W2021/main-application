import React, { Component } from 'react';
import SingePageWrapper from '../../components/SinglePageWrapper';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
        password: '',
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login({ ...this.state });
    };
    render() {
        if (this.props.loggedin) {
            return <Redirect to="/"></Redirect>;
        }
        return (
            <SingePageWrapper>
                <div className="login-form ui small form">
                    <h1>User Login</h1>

                    <label for="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={(e) => this.setState({ email: e.target.value })}
                        val={this.state.email}
                    ></input>
                    <label for="pwd">Password:</label>
                    <input
                        type="password"
                        id="pwd"
                        name="pwd"
                        onChange={(e) => this.setState({ password: e.target.value })}
                        val={this.state.password}
                    ></input>
                    {this.props.error ? <div class="ui red message">{this.props.error}</div> : ''}
                    <button class="ui yellow button" onClick={this.handleSubmit}>
                        LOG IN
                    </button>
                    <p>
                        Don't have an account? <Link to="/register">Register Now</Link>
                    </p>
                </div>
            </SingePageWrapper>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(signIn(creds)),
    };
};
const mapStateToProps = (state) => {
    return {
        loggedin: state.auth.loggedin,
        error: state.auth.error,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
