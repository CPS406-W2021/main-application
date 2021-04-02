import React, { Component } from "react";
import SingePageWrapper from "../../components/SinglePageWrapper";
export default class Login extends Component {
    render() {
        return (
            <SingePageWrapper>
                <div className="login-form ui small form">
                    <h1>User Login</h1>

                    <label for="email">
                        Email
                    </label>
                    <br></br>
                    <input type="text" id="email" name="email" ></input><br></br>


                    <label for="pwd">
                        Password:
                    </label>
                    <br></br>
                    <input
                        type="password"
                        id="pwd"
                        name="pwd"
                    ></input>
                    <button class="ui yellow button">LOG IN</button>
                    <p> Don't have an account? <a href="/register">Register now</a>{" "} </p>
                </div>

            </SingePageWrapper>
        );
    }
}

