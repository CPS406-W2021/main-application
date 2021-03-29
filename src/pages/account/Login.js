import React, { Component } from "react";
import Image from "../../images/header.png";
export default class Login extends Component {
    render() {
        return (
            <div className="auth-con">
                    <div className={`auth-header ${this.props.clearbg ? "" : "active"}`}>

                        <div className="auth-header__title">
                            <div className="auth-header__titleT">
                                <img src={Image} alt="Toronto Logo" />
                                <div>Cypress</div>
                            </div>

                        </div>
                    </div>

                <div className={`auth-con__body ${this.props.clearbg ? "" : "active"}`}>
                    <h1>User Login</h1>
                    <div className = "auth-con__body__login-form">
                        <label for="email">Email</label><br></br>
                        <input type="text" id="email" name="email"></input><br></br><br></br>

                        <label for="pwd">Password:</label><br></br>
                        <input type="password" id="pwd" name="pwd"></input>
                    </div><br></br>
                    <a href="/portal">Log In</a>
                    <p>Don't have an account? <a href="/register">Register now</a> </p>

                </div>
                <div className="auth-con__footer">
                    <div className="active">English (En)</div>
                    <div>Français (Fr)</div>
                </div>
            </div>
        );
    }

}
