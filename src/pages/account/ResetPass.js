import React, { Component } from "react";
import SingePageWrapper from "../../components/SinglePageWrapper";
import { connect } from "react-redux";
import { clearError, resetPassword } from "../../store/actions/authActions";
import { Link, Redirect } from "react-router-dom";
class Reset extends Component {
    state = {
        email: "",
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.resetPass({ ...this.state });
    };
    componentDidMount() {
        this.props.clearError();
    }
    render() {
        const L = this.props.lang;
        if (this.props.loggedin) {
            return <Redirect to="/"></Redirect>;
        }
        return (
            <SingePageWrapper>
                <div className="login-form ui small form">
                    <h1>
                        {L === "en"
                            ? "Reset Password"
                            : "Réinitialiser le mot de passe"}
                    </h1>
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
                        {L === "en"
                            ? "Reset Password"
                            : "Réinitialiser maintenant"}
                    </button>
                    <p>
                        {L === "en"
                            ? "Go back to Login?"
                            : "Revenir à la connexion?"}{" "}
                        <Link to="/login">
                            {L === "en" ? "Login" : "Connexion"}
                        </Link>
                    </p>
                </div>
            </SingePageWrapper>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        resetPass: (creds) => dispatch(resetPassword(creds)),
        clearError: () => dispatch(clearError()),
    };
};
const mapStateToProps = (state) => {
    return {
        error: state.auth.error,
        lang: state.lang.lang,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
