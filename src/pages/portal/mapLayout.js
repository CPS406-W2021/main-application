import React, { Component, Fragment } from "react";
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
export default class MapLayout extends Component {
    constructor(props) {
        super(props);
        this.state = { stage: 0 };
    }
    render() {
        switch (this.state.stage) {
            default:
                return (
                    <Fragment>
                        <div className="portal-button">
                            Click to add a report!
                        </div>
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
                            <div className="portal-search__footer">
                                Filter by:
                            </div>
                        </div>
                    </Fragment>
                );
        }
    }
}
