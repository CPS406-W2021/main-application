import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loadReport } from "../../store/actions/reportActions";
import Report from "./ViewReports";
class ReportRouter extends Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }
    render() {
        var queryDict = {};
        const params = window.location.search.substr(1);
        params.split("&").forEach(function (item) {
            queryDict[item.split("=")[0]] = item.split("=")[1];
        });
        if (queryDict["report"] === undefined) {
            return <Redirect to="/"></Redirect>;
        } else if (!this.state.loaded) {
            this.props.loadReport(queryDict["report"]);
            this.setState({ loaded: true });
        }
        return <Report></Report>;
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    loadReport: (r) => dispatch(loadReport(r)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportRouter);
