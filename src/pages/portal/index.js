import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";

export default class PortalBase extends Component {
    render() {
        const dummyData = [
            {
                type: "Pothole",
                address: "123 Street St.",
                date: "3/21/2021 11:24AM",
            },
            {
                type: "Pothole",
                address: "123 Street St.",
                date: "3/21/2021 11:24AM",
            },
            {
                type: "Pothole",
                address: "123 Street St.",
                date: "3/21/2021 11:24AM",
            },
            {
                type: "Pothole",
                address: "123 Street St.",
                date: "3/21/2021 11:24AM",
            },
            {
                type: "Pothole",
                address: "123 Street St.",
                date: "3/21/2021 11:24AM",
            },
            {
                type: "Pothole",
                address: "123 Stret St.",
                date: "3/21/2021 11:24AM",
            },
            {
                type: "Pothole",
                address: "123 Street St.",
                date: "3/21/2021 11:24AM",
            },
            {
                type: "Pothole",
                address: "123 Street St.",
                date: "3/21/2021 11:24AM",
            },
            {
                type: "Pothole",
                address: "123 Street St.",
                date: "3/21/2021 11:24AM",
            },
            {
                type: "Pothole",
                address: "123 Street St.",
                date: "3/21/2021 11:24AM",
            },
            {
                type: "Pothole",
                address: "123 Street St.",
                date: "3/21/2021 11:24AM",
            },
            {
                type: "Pothole",
                address: "123 Street St.",
                date: "3/21/2021 11:24AM",
            },
        ];
        return (
            <DashboarWrapper currentPage={1} clearbg={true}>
                <div className="portal-con">
                    <div className="portal-button">Report</div>
                    <div className="portal-search">
                        <div className="portal-search__header">
                            <div>Recent Activity </div>
                            <div>
                                <i class="far fa-clock"></i>
                            </div>
                        </div>
                        <div className="portal-search__body">
                            {dummyData.map(({ type, address, date }) => (
                                <div className="portal-search__issue">
                                    <div>
                                        <span>{type}</span>
                                        <span>at</span>
                                        <span>{address}</span>
                                    </div>
                                    <div>Reported on {date}</div>
                                </div>
                            ))}
                        </div>
                        <div className="portal-search__footer">Filter by:</div>
                    </div>
                </div>
            </DashboarWrapper>
        );
    }
}
