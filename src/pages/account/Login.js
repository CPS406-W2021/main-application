import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return <div>
            <h1 className = "User_login">User Login</h1>
            <div>
                <div>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email"></input>
                </div>
                <div>
                    <label for="pwd">Password:</label>
                    <input type="password" id="pwd" name="pwd"></input>
                </div>
                <a href="/portal"><button type="button">Log In</button></a>
                <p>Don't have an account? <a href="/register">Register now</a> </p>
            </div>
        </div>
    }
}
