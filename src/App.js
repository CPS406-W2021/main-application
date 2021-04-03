import React, { Component } from "react";
import Contact from "./pages/general/Contact";
import Home from "./pages/general/Home";
import PortalBase from "./pages/portal";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
import RAPBase from "./pages/dashboard/ReportAProblem";
import TellAFriend from "./pages/dashboard/TellAFriend";
import Vote from "./pages/dashboard/Vote";
import ProfileInfo from "./pages/account/ProfileInfo";

require("dotenv").config();
export default class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/profileinfo">
                    <ProfileInfo />
                </Route>
                <Route path="/portal">
                    <PortalBase />
                </Route>
                <Route path="/rap">
                    <RAPBase />
                </Route>
                <Route path="/taf">
                    <TellAFriend />
                </Route>
                <Route path="/vote">
                    <Vote />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Router>
        );
    }
}
