import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Image from "../../images/header.png";
import { signIn, signOut } from "../../store/actions/authActions";
class DashboarWrapper extends Component {
    renderAuthButton() {
        if (this.props.loggedin) {
            return (
                <div
                    className="wp-header__nav-login"
                    onClick={this.props.logout}
                >
                    LOGOUT
                </div>
            );
        }
        return (
            <Link to="/login" className="wp-header__nav-login">
                LOGIN
            </Link>
        );
    }
    render() {
        let pages = [
            { text: "Home", route: "/" },
            { text: "Portal", route: "/portal" },
            { text: "My Account", route: "/rap" },
            { text: "Contact", route: "/contact" },
        ];
        let currentPage = this.props.currentPage || 0;
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
                                Cypress / {pages[currentPage]["text"]}
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
                                                i === currentPage
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
                                <div className="wp-header__subnav">subnav</div>
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
                    <div className="active">English (En)</div>
                    <div>Français (Fr)</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedin: state.auth.loggedin,
});

const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(signIn(creds)),
        logout: () => dispatch(signOut()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboarWrapper);
