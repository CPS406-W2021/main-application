import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

class ProtectedRoute extends Component {
    render() {
        if (!this.props.loggedin) {
            return <Redirect to="/login"></Redirect>;
        }
        console.log(this.props);
        return <Route path={this.props.route}>{this.props.children}</Route>;
    }
}

const mapStateToProps = (state) => ({
    loggedin: state.auth.loggedin,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
