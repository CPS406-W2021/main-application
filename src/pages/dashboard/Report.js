import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Report from "./ViewReports";
export class ReportRouter extends Component {
    render() {
        var queryDict = {};
        const params = window.location.search.substr(1);
        params.split("&").forEach(function (item) {
            queryDict[item.split("=")[0]] = item.split("=")[1];
        });
        if (queryDict["report"] === undefined) {
            return <Redirect to="/"></Redirect>;
        }
        return <Report></Report>;
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ReportRouter);
