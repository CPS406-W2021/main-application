import React, { Component } from "react";
import SingePageWrapper from "../../components/SinglePageWrapper";
export default class Login extends Component {
    render() {
        return (
            <SingePageWrapper>
                <h1>User Login</h1>
                <div className="auth-con__body__login-form">
                    <label for="email" className="auth-label">
                        Email
                    </label>
                    <br></br>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="auth-input"
                    ></input>
                    <br></br>
                    <br></br>

                    <label for="pwd" className="auth-label">
                        Password:
                    </label>
                    <br></br>
                    <input
                        type="password"
                        id="pwd"
                        name="pwd"
                        className="auth-input"
                    ></input>
                </div>
                <br></br>
                <br></br>
                <a href="/portal">Log In</a>
                <p>
                    Don't have an account? <a href="/register">Register now</a>{" "}
                </p>
                {/* 
                <form class="ui form">
                    <div class="field">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="first-name"
                            placeholder="First Name"
                        />
                    </div>
                    <div class="field">
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="last-name"
                            placeholder="Last Name"
                        />
                    </div>
                    <div class="field">
                        <div class="ui checkbox">
                            <input
                                type="checkbox"
                                tabindex="0"
                                class="hidden"
                            />
                            <label>I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                    <button class="ui button" type="submit">
                        Submit
                    </button>
                </form>
            
             */}
            </SingePageWrapper>
        );
    }
}
