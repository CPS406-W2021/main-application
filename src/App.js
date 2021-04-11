import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/general/Contact";
import Home from "./pages/general/Home";
import PortalBase from "./pages/portal";
import Login from "./pages/account/Login";
import ResetPass from "./pages/account/ResetPass";
import Register from "./pages/account/Register";
import RAPBase from "./pages/dashboard/ReportAProblem";
import TellAFriend from "./pages/dashboard/TellAFriend";
import Vote from "./pages/dashboard/Vote";
import Survey from "./pages/general/Survey";
import PastReports from "./pages/dashboard/PastReports";
import ProtectedRoute from "./Routes/ProtectedRoute";
// import ViewReports from "./pages/dashboard/ViewReports";

require("dotenv").config();
export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    {/* <Route path="/profileinfo">
                        <ProfileInfo />
                    </Route> */}
                    <ProtectedRoute path="/portal">
                        <PortalBase />
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/rap">
                        <RAPBase />
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/taf">
                        <TellAFriend />
                    </ProtectedRoute>
                    <ProtectedRoute path="/vote">
                        <Vote />
                    </ProtectedRoute>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <ProtectedRoute path="/pastReports">
                        <PastReports />
                    </ProtectedRoute>
                    <Route path="/Survey">
                        <Survey />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        );
    }
}
