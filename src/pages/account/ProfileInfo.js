import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import { connect } from "react-redux";
import {
    resetPassword,
    deleteAccount,
    updateAccount,
} from "../../store/actions/authActions";
class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            address: "",
            edit: false,
        };
    }
    clickSave = () => {
        if (this.state.email === "" && this.state.name === "") {
            alert("please fill out all the text fields");
        } else if (window.prompt(this.props.user.scq) === this.props.user.sca) {
            this.props.updateInfo(this.state.email, this.state.name);
            this.setState({ edit: false });
        }
    };
    renderEditFooter = () => {
        if (this.state.edit)
            return (
                <div className="pro-editbar" style={{ marginTop: 15 }}>
                    <button class="ui button green" onClick={this.clickSave}>
                        Save
                    </button>
                    <div
                        class="ui button"
                        onClick={() => this.setState({ edit: false })}
                    >
                        Cancel
                    </div>
                </div>
            );
    };
    showEditBar = () => {
        if (!this.state.edit) {
            return (
                <div
                    className="pro-editbar"
                    onClick={() =>
                        this.setState({
                            edit: true,
                            email: this.props.user.email,
                            name: this.props.user.name,
                        })
                    }
                >
                    <i
                        class="edit icon"
                        style={{ fontSize: 20, cursor: "pointer" }}
                    ></i>
                </div>
            );
        }
        return;
    };
    renderChangeSetting = () => {
        const L = this.props.lang;
        console.log(this.props.user.email);
        if (!this.state.edit) {
            return (
                <div class="ui list">
                    <div class="item">
                        <div class="header">Name</div>
                        {this.props.user.name}
                    </div>
                    <div class="item">
                        <div class="header">Email</div>
                        {this.props.user.email}
                    </div>
                </div>
            );
        } else {
            return (
                <div class="">
                    <div class="field">
                        <label>{L === "en" ? "Name" : "Nom"}</label>
                        <input
                            value={this.state.name}
                            onChange={(e) => {
                                this.setState({
                                    name: e.target.value,
                                });
                            }}
                            type="text"
                            id="name"
                            name="name"
                        ></input>
                    </div>

                    <div class="field">
                        <label>
                            <label>{L === "en" ? "Email" : "E-mail"}</label>
                        </label>
                        <input
                            value={this.state.email}
                            onChange={(e) => {
                                this.setState({
                                    email: e.target.value,
                                });
                            }}
                            type="text"
                            id="email"
                            name="email"
                        ></input>
                    </div>
                </div>
            );
        }
    };
    render() {
        const L = this.props.lang;
        console.log(this.props.user);
        return (
            <DashboarWrapper currentPage={2}>
                <div className="pro-con">
                    <div className="pro-nav">
                        <h1>
                            {L === "en"
                                ? "Account Setting"
                                : "Paramètre du compte"}
                        </h1>
                    </div>
                    <div className="pro-body">
                        <div>
                            <h2>
                                {L === "en"
                                    ? "Edit Account"
                                    : "Modifier le compte"}
                            </h2>
                        </div>
                        <div className="profile-form ui small form">
                            {this.showEditBar()}
                            <div class="ui list">
                                <div class="item">
                                    <div class="header">username</div>
                                    {this.props.user.username}
                                </div>
                                <div class="item">
                                    <div class="header">id</div>
                                    {this.props.uid}
                                </div>
                            </div>
                            {this.renderChangeSetting()}
                            {this.renderEditFooter()}
                        </div>
                        <div class="ui divider"></div>
                        <div>
                            <h2>
                                {L === "en"
                                    ? "Reset Password"
                                    : "Réinitialiser le mot de passe"}
                            </h2>
                            <div className="pro-sub">
                                <div>
                                    {L === "en"
                                        ? "The link to reset your password will be sent to your email"
                                        : "Le lien pour réinitialiser votre mot de passe sera envoyé à votre adresse e-mail"}
                                </div>
                                <button
                                    class="ui red button"
                                    onClick={this.props.resetPassword}
                                >
                                    {L === "en"
                                        ? "Reset Password"
                                        : "Réinitialiser le mot de passe"}
                                </button>
                            </div>
                        </div>
                        <div>
                            <h2>
                                {L === "en"
                                    ? "Delete Account"
                                    : "Supprimer le compte"}{" "}
                            </h2>
                            <div className="pro-sub">
                                <div>
                                    {L === "en"
                                        ? "This action cannot be undone."
                                        : "Cette action ne peut pas être annulée."}
                                </div>
                                <button
                                    class="ui red button"
                                    onClick={this.props.deleteAccount}
                                >
                                    {L === "en"
                                        ? "Delete Account"
                                        : "Supprimer le compte"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboarWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.lang.lang,
        user: state.auth.userData,
        uid: state.auth.uid,
    };
};

const mapDispatchToProps = (dispatch) => ({
    deleteAccount: () => dispatch(deleteAccount()),
    resetPassword: () => dispatch(resetPassword()),
    updateInfo: (email, name) => dispatch(updateAccount(email, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
