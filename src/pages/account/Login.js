import React, { Component } from "react";
import SingePageWrapper from "../../components/SinglePageWrapper";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
    state = {
        email: "",
        password: "",
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login({ ...this.state });
    };

    render() {
        const L = this.props.lang;
        if (this.props.loggedin) {
            return <Redirect to="/"></Redirect>;
        }
        return (
            <SingePageWrapper>
                <div className="login-form ui small form">
                    <h1>
                        {L === "en" ? "User Login" : "Utilisateur en Ligne"}
                    </h1>

                    <label for="email">
                        {L === "en" ? "E-mail:" : "E-mail:"}
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={(e) =>
                            this.setState({ email: e.target.value })
                        }
                        val={this.state.email}
                    ></input>
                    <label for="pwd">
                        {L === "en" ? "Password:" : "Mot de passe:"}
                    </label>
                    <input
                        type="password"
                        id="pwd"
                        name="pwd"
                        onChange={(e) =>
                            this.setState({ password: e.target.value })
                        }
                        val={this.state.password}
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
                        {L === "en" ? "LOG IN" : "CONNEXION"}
                    </button>
                    <p>
                        {L === "en"
                            ? "Don't have an account? "
                            : "Vous n'avez pas de compte? "}
                        <Link to="/register">
                            {L === "en"
                                ? "Register Now"
                                : "S'inscrire maintenant"}
                        </Link>
                    </p>
                    <p>
                        Forgot your password?{" "}
                        <Link to="/resetPass">Reset Now</Link>
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
    console.log(state);
    return {
        loggedin: state.auth.loggedin,
        error: state.auth.error,
        lang: state.lang.lang,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
