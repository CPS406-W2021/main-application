import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "../../images/header.png";
export default class DashboarWrapper extends Component {
    render() {
        const pages = [
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
                                {pages.map(({ text, route }, i) => (
                                    <Link
                                        to={route}
                                        className={`wp-header__nav-item ${i == currentPage ? "active" : ""
                                            }`}
                                    >
                                        {text}
                                    </Link>
                                ))}
                                <div className="wp-header__nav-login">
                                    LOGIN
                                </div>
                            </div>
                            <div className="wp-header__subnav">subnav</div>
                        </div>
                    </div>
                </div>
                <div
                    className={`wp-con__body ${this.props.clearbg ? "" : "active"
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
