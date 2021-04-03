import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";

export default class ProfileInfo extends Component {
    render() {
        return (
            <DashboarWrapper currentPage={2}>
                <div className="pro-con">
                    <div className="pro-nav">
                        <h1>Account Setting</h1>
                        {/* <div class="ui divider"></div>
                        <div class="ui divider"></div>
                        <div class="ui divider"></div> */}

                    </div>
                    <div className="pro-body">
                        <h2>Edit Account</h2>
                        <div className="pro-sub">Change your profile information.
                        <button class="ui green button">Save Changes</button>
                        </div>
                        <div class="ui divider"></div>
                        <div className = "profile-form ui small form">
                        
                        <div class="two fields">
                            <div class="field">
                                <label>Name</label>
                                <input type="text" id="name" name="name"    ></input>
                            </div>
                            <div class="field">
                                <label>Username</label>
                                <input type="text" id="usrn" name="usrn"    ></input>
                            </div>
                        </div>

                        <div class="two fields">
                            <div class="field">
                                <label>Email</label>
                                <input type="text" id="email" name="email"    ></input>
                            </div>
                            <div class="field">
                                <label>Phone Number</label>
                                <input type="text" id="phone" name="phone"    ></input>
                            </div>
                        </div>    

                        <div class="two fields">
                            <div class="field">
                                <label>Password</label>
                                <input type="text" id="pass" name="pass"    ></input>
                            </div>
                        </div> 
                </div>
                <div class="ui divider"></div>     
                <h2>Delete Account</h2>
                        <div className="pro-del">This action cannot be undone.
                        <button class="ui red button">Delete Account</button>
                        </div>
                    </div>
                </div>
            </DashboarWrapper>
        );
    }
}                            