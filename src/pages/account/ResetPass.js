import React, { Component } from "react";
import SingePageWrapper from "../../components/SinglePageWrapper";
import { connect } from "react-redux";
import { resetPassword } from "../../store/actions/authActions";
import { Link, Redirect } from "react-router-dom";

class Reset extends Component {
    state = {
        email: ""
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.resetPass({ ...this.state });
    };
    render() {
        if (this.props.loggedin) {
            return <Redirect to="/"></Redirect>;
        }
        return (
            <SingePageWrapper>
                <div className="login-form ui small form">
                    <h1>Reset Password</h1>
                    <label for="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={(e) =>
                            this.setState({ email: e.target.value })
                        }
                        val={this.state.email}
                    ></input>
                    {this.props.error ? (
                        <div class="ui red message">{this.props.error}</div>
                    ) : (
                        ""
                    )}
                    <button
                        class="ui yellow button"
                        onClick={this.handleSubmit}
                    >
                        Reset Password
                    </button>
                    <p>
                        Go back to Login?{" "}
                        <Link to="/login">Login</Link>
                    </p>
                </div>
            </SingePageWrapper>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        resetPass: (creds) => dispatch(resetPassword(creds)),
    };
};
const mapStateToProps = (state) => {
    console.log(state);
    return {
        error: state.auth.error,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
