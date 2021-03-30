import React, { Component } from "react";
import SingePageWrapper from "../../components/SinglePageWrapper";

export default class Login extends Component {
    render() {
        return (
            <SingePageWrapper>
                <div className = "register-form">
                <h1>Sign Up</h1>

                        <label for="name"   >Name:</label><br></br>
                        <input type="text" id="name" name="name"    ></input><br></br>

                        <label for="usrn"  >Username:</label><br></br>
                        <input type="text" id="usrn" name="usrn"    ></input><br></br>
 
                        <label for="email"  >Email:</label><br></br>
                        <input type="text" id="email" name="email"    ></input><br></br>

                        <label for="pwd"  >Password:</label><br></br>
                        <input type="password" id="pwd" name="pwd"    ></input><br></br>

                        <label for="pwd"  >Confirm Password:</label><br></br>
                        <input type="password" id="cpwd" name="cpwd"    ></input><br></br>
                </div>
                <a href="/login" className = "register">Register</a>
                    <p>
                        {" "}
                        <a href="/" className = "register ">Cancel</a>{" "}
                    </p>                
            </SingePageWrapper>
        );
    }
}
