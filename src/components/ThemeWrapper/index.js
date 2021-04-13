import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Image from "../../images/header.png";
import { signIn, signOut } from "../../store/actions/authActions";
import {
    changeLangtoEng,
    changeLangtoFr,
} from "../../store/actions/langActions";
class DashboarWrapper extends Component {
    renderAuthButton() {
        const L = this.props.lang;
        if (this.props.loggedin) {
            return (
                <div
                    className="wp-header__nav-login"
                    onClick={this.props.logout}
                >
                    {L === "en" ? "LOGOUT" : "SE DÉCONNECTER"} 
                </div>
            );
        }
        return (
            <Link to="/login" className="wp-header__nav-login">
                {L === "en" ? "LOGIN" : "CONNEXION"} 
            </Link>
        );
    }
    render() {
        const L = this.props.lang;
        const pages = [
            { text: L === "en" ? "Home" : "Domicile" , route: "/" },
            { text: L === "en" ? "Portal" : "Portail", route: "/portal" },
            { text: L === "en" ? "My Account" : "Mon compte", route: "/profileinfo" },
        ];
        const subpages = [
            { text: "Vote", route: "/vote" },
            { text: L === "en" ? "Tell a Friend" : "Dire à un ami", route: "/taf" },
            { text: L === "en" ? "My Past Reports" : "Mes rapports passés", route: "/pastreports" },
            { text: L === "en" ? "Contact" : "Contacter", route: "/contact" },
        ];
        return (
            <div className="wp-con">
                <div className="wp-con__header">
                    <div className="wp-header">
                        <div className="wp-header__title">
                            <div className="wp-header__titleT">
                                <img src={Image} alt="Toronto Logo" />
                                <div>Cypress</div>
                            </div>
                            <div className="wp-header__titleSlogan">
                                Cypress / {this.props.text}
                            </div>
                        </div>
                        <div className="wp-header__pages">
                            <div className="wp-header__nav">
                                {this.props.loggedin &&
                                    pages.map(({ text, route }, i) => (
                                        <Link
                                            key={text}
                                            to={route}
                                            className={`wp-header__nav-item ${
                                                i === window.location.pathname
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            {text}
                                        </Link>
                                    ))}
                                {this.renderAuthButton()}
                            </div>
                            {this.props.loggedin && (
                                <div className="wp-header__subnav">
                                    {this.props.loggedin &&
                                        subpages.map(({ text, route }, i) => (
                                            <Link
                                                key={text}
                                                to={route}
                                                className={`wp-header__subnav-item`}
                                            >
                                                {text}
                                            </Link>
                                        ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div
                    className={`wp-con__body ${
                        this.props.clearbg ? "" : "active"
                    }`}
                >
                    {this.props.children}
                </div>
                <div className="wp-con__footer">
                    <div
                        className={this.props.lang === "en" ? "active" : ""}
                        onClick={this.props.changeLangtoEng}
                    >
                        English (En)
                    </div>
                    <div
                        className={this.props.lang === "fr" ? "active" : ""}
                        onClick={this.props.changeLangtoFr}
                    >
                        Français (Fr)
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedin: state.auth.loggedin,
    lang: state.lang.lang,
});

const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(signIn(creds)),
        logout: () => dispatch(signOut()),
        changeLangtoEng: () => dispatch(changeLangtoEng()),
        changeLangtoFr: () => dispatch(changeLangtoFr()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboarWrapper);
