import React, { Component } from 'react';
import SingePageWrapper from '../../components/SinglePageWrapper';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../store/actions/authActions';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            confpassword: '',
        };
    }
    handleSubmission = (e) => {
        e.preventDefault();
        let { email, username, password, name } = this.state;
        this.props.register({ email, username, password, name });
    };
    render() {
        if (this.props.registerredirect) {
            return this.props.registerredirect;
        }
        return (
            <SingePageWrapper>
                <div className="register-form ui small form">
                    <h1>Sign Up</h1>

                    <label for="name">Name:</label>
                    <br></br>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => this.setState({ name: e.target.value })}
                    ></input>
                    <br></br>

                    <label for="usrn">Username:</label>
                    <br></br>
                    <input
                        type="text"
                        id="usrn"
                        name="usrn"
                        onChange={(e) => this.setState({ username: e.target.value })}
                    ></input>
                    <br></br>

                    <label for="email">Email:</label>
                    <br></br>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={(e) => this.setState({ email: e.target.value })}
                    ></input>
                    <br></br>

                    <label for="pwd">Password:</label>
                    <br></br>
                    <input
                        type="password"
                        id="pwd"
                        name="pwd"
                        onChange={(e) => this.setState({ password: e.target.value })}
                    ></input>
                    <br></br>

                    <label for="pwd">Confirm Password:</label>
                    <br></br>
                    <input
                        type="password"
                        id="cpwd"
                        name="cpwd"
                        onChange={(e) => this.setState({ confpassword: e.target.value })}
                    ></input>
                    <br></br>
                    <button class="ui yellow button" onClick={this.handleSubmission}>
                        REGISTER
                    </button>
                    <p>
                        <Link to="/" className="register ">
                            Cancel
                        </Link>
                    </p>
                </div>
            </SingePageWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    registerredirect: state.auth.registerredirect,
});

const mapDispatchToProps = (dispatch) => ({
    register: ({ email, username, password, name }) =>
        dispatch(register({ email, username, password, name })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
