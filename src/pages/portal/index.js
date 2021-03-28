import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";

export default class PortalBase extends Component {
    render() {
        return <DashboarWrapper currentPage={1}>portal</DashboarWrapper>;
    }
}
