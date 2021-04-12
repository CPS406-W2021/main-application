import React, { Component } from "react";
import SingePageWrapper from "../../components/SinglePageWrapper";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { clearError, register } from "../../store/actions/authActions";
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            email: "",
            password: "",
            confpassword: "",
            ac: false,
        };
    }
    handleSubmission = (e) => {
        let {
            email,
            username,
            password,
            confpassword,
            name,
            sca,
            scq,
        } = this.state;
        e.preventDefault();
        console.log(this.state);
        if (!this.state.ac) {
            alert("You have to agree to the TOS to sign up!");
            return;
        } else if (password !== confpassword) {
            alert("passwords do not match");
            return;
        }
        this.props.register({ email, username, password, name, sca, scq });
    };
    componentDidMount() {
        this.props.clearError();
    }
    render() {
        const L = this.props.lang;
        if (this.props.registerredirect) {
            return this.props.registerredirect;
        }
        return (
            <SingePageWrapper>
                <div className="register-form ui small form">
                    <h1>{L === "en" ? "Sign Up" : "S'inscrire"}</h1>

                    <label for="name">{L === "en" ? "Name:" : "Nom:"}</label>
                    <br></br>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) =>
                            this.setState({ name: e.target.value })
                        }
                    ></input>
                    <br></br>

                    <label for="usrn">
                        {L === "en" ? "Username:" : "Nom d'utilisateur:"}
                    </label>
                    <br></br>
                    <input
                        type="text"
                        id="usrn"
                        name="usrn"
                        onChange={(e) =>
                            this.setState({ username: e.target.value })
                        }
                    ></input>
                    <br></br>

                    <label for="email">E-mail:</label>
                    <br></br>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={(e) =>
                            this.setState({ email: e.target.value })
                        }
                    ></input>
                    <br></br>

                    <label for="pwd">
                        {L === "en" ? "Password:" : "Mot de passe:"}
                    </label>
                    <br></br>
                    <input
                        type="password"
                        id="pwd"
                        name="pwd"
                        onChange={(e) =>
                            this.setState({ password: e.target.value })
                        }
                    ></input>
                    <br></br>

                    <label for="pwd">
                        {L === "en"
                            ? "Confirm Password:"
                            : "Confirmez le mot de passe:"}
                    </label>
                    <br></br>
                    <input
                        type="password"
                        id="cpwd"
                        name="cpwd"
                        onChange={(e) =>
                            this.setState({ confpassword: e.target.value })
                        }
                    ></input>
                    <br></br>

                    <label for="pwd">
                        {L === "en"
                            ? "What is your secret question?"
                            : "Quelle est votre question secrète?"}
                    </label>
                    <br></br>
                    <input
                        type="text"
                        id="scq"
                        name="scq"
                        onChange={(e) => this.setState({ scq: e.target.value })}
                    ></input>
                    <br></br>

                    <label for="scq">
                        {L === "en" ? "Answer:" : "Répondre"}
                    </label>
                    <br></br>
                    <input
                        type="text"
                        id="sca"
                        name="sca"
                        onChange={(e) => this.setState({ sca: e.target.value })}
                    ></input>
                    <br></br>
                    <div class="ui checked checkbox">
                        <input
                            type="checkbox"
                            checked={this.state.ac}
                            onChange={() =>
                                this.setState({ ac: !this.state.ac })
                            }
                        />
                        <label>
                            I agree to the{" "}
                            <a target="_blank" href="/">
                                Terms of Service
                            </a>
                        </label>
                    </div>
                    {this.props.error ? (
                        <div class="ui red message">{this.props.error}</div>
                    ) : (
                        ""
                    )}
                    <br></br>
                    <button
                        class="ui yellow button"
                        onClick={this.handleSubmission}
                    >
                        {L === "en" ? "REGISTER" : "S'INSCRIRE"}
                    </button>
                    <p>
                        <Link to="/" className="register ">
                            {L === "en" ? "Cancel" : "Annuler"}
                        </Link>
                    </p>
                </div>
            </SingePageWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    error: state.auth.error,
    registerredirect: state.auth.registerredirect,
    lang: state.lang.lang,
});

const mapDispatchToProps = (dispatch) => ({
    register: ({ email, username, password, name, scq, sca }) =>
        dispatch(register({ email, username, password, name, scq, sca })),
    clearError: () => dispatch(clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
