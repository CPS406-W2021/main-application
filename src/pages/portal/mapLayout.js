import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

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

class MapLayout extends Component {
    constructor(props) {
        super(props);
        this.state = { stage: 0 };
    }
    render() {
        const L = this.props.lang;
        switch (this.state.stage) {
            default:
                return (
                    <Fragment>
                        <div className="portal-button">
                            { L === "en" ? "Click to add a report!" : "Cliquez pour ajouter un rapport!" }
                        </div>
                        <div className="portal-search">
                            <div className="portal-search__header">
                                <div>
                                { L === "en" ? "Recent Activity" : "Activité Récente" }
                                </div>
                                <div>
                                    <i class="far fa-clock"></i>
                                </div>
                            </div>
                            <div className="portal-search__body">
                                {dummyData.map(({ type, address, date }) => (
                                    <div className="portal-search__issue">
                                        <div>
                                            <span>{type}</span>
                                            <span> { L === "en" ? "at " : "à " } </span>
                                            <span>{address}</span>
                                        </div>
                                        <div>
                                            { L === "en" ? "Reported on " : "Rapporté le " } {date} 
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="portal-search__footer">
                                { L === "en" ? "Filter by:" : "Filtrer par:" }
                            </div>
                        </div>
                    </Fragment>
                );
        }
    }
}

const mapStateToProps = (state) => ({
    lang: state.lang.lang,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MapLayout);
