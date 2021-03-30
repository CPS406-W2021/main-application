import React, { Component } from "react";
import SingePageWrapper from "../../components/SinglePageWrapper";

export default class Login extends Component {
    render() {
        return (
            <SingePageWrapper>
                <h1>Sign Up</h1>
                <div>
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name"></input>
                    </div>
                    <div>
                        <label for="usrn">Username:</label>
                        <input type="text" id="usrn" name="usrn"></input>
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email"></input>
                    </div>
                    <div>
                        <label for="pwd">Password:</label>
                        <input type="password" id="pwd" name="pwd"></input>
                    </div>
                    <div>
                        <label for="pwd">Confirm Password:</label>
                        <input type="password" id="cpwd" name="cpwd"></input>
                    </div>
                    <a href="/login">
                        <button type="button">Register</button>
                    </a>
                    <p>
                        {" "}
                        <a href="/">Cancel</a>{" "}
                    </p>
                </div>
            </SingePageWrapper>
        );
    }
}
