import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";

export default class ProfileInfo extends Component {
    render() {
        return <DashboarWrapper> <div>
            <div> <br></br>
            <h2>Edit account <button type= "button">Save Changes</button></h2> 
            <h5> Change your profile information. </h5> <br></br><hr></hr><br></br>
            </div>
            <div>
                <label for="name>">Name </label>
                <input type="text" id="name" placeholder="Bob Smith"></input>
                <label for="user"> Username </label>
                <input type="text" id="user" placeholder= "bobbysmithy"></input>
            </div> 
            <div> <br></br>
                <label for="email">Email </label>
                <input type="text" id="email" placeholder= "bobbysmith@cypyress.ca"></input>
                <label for="phone"> Phone Number </label>
                <input type="number" id="phone" placeholder= "(000) 000 - 0000"></input>
            </div> 
            <div> <br></br>
                <label for="pwd">Password </label>
                <input type="password" id = "pwd" placeholder= "XXXXX"></input>
            </div>

            <div> <br></br><hr></hr><br></br>
            <h2>Delete Account <button type= "button">Delete profile</button></h2>
            <h5> This action cannot be undone. </h5> 
            </div>
        </div> </DashboarWrapper>
    }
}
