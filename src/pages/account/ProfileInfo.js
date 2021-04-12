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
        };
    }
    render() {
        const L = this.props.lang;
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
                            <div className="pro-sub">
                                <div>
                                    {L === "en"
                                        ? "Change your profile information."
                                        : "Modifiez les informations de votre profil."}
                                </div>
                                <button
                                    class="ui green button"
                                    onClick={() => {
                                        this.props.updateInfo({
                                            email: this.state.email,
                                            name: this.state.name,
                                            address: this.state.address,
                                        });
                                        this.setState({
                                            email: "",
                                            name: "",
                                            address: "",
                                        });
                                    }}
                                >
                                    {L === "en"
                                        ? "Save Changes"
                                        : "Sauvegarder les modifications"}
                                </button>
                            </div>
                        </div>
                        <div class="ui divider"></div>
                        <div className="profile-form ui small form">
                            <div class="two fields">
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
                                        <label>
                                            {L === "en" ? "Email" : "E-mail"}
                                        </label>
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
                            <div class="field">
                                <label>
                                    {L === "en"
                                        ? "Phone Number"
                                        : "Numéro de téléphone"}
                                </label>
                                <input
                                    value={this.state.address}
                                    onChange={(e) => {
                                        this.setState({
                                            address: e.target.value,
                                        });
                                    }}
                                    type="text"
                                    id="phone"
                                    name="phone"
                                ></input>
                            </div>
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

const mapStateToProps = (state) => ({
    lang: state.lang.lang,
});

const mapDispatchToProps = (dispatch) => ({
    deleteAccount: () => dispatch(deleteAccount()),
    resetPassword: () => dispatch(resetPassword()),
    updateInfo: (info) => dispatch(updateAccount(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
