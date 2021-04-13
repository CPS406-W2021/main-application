import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import { connect } from "react-redux";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
import { setupReport } from "../../store/actions/reportActions";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import blueMarker from "../../images/icons/blue.png";
import greenMarker from "../../images/icons/green.png";
import redMarker from "../../images/icons/red.png";

class PortalBase extends Component {
    constructor(props) {
        super(props);
        this.state = { stage: 0, mapLoc: [-79.3788, 43.6577], Map: false };
    }
    componentDidMount() {
        const Map = ReactMapboxGl({
            accessToken:
                "pk.eyJ1IjoiZmFyaGFuaG0iLCJhIjoiY2tuMTUxYjNnMHIyODJvbzJueDJzdWJmcCJ9.EIl7ZcqlshPyJxnxyGNGhg",
        });
        this.setState({ Map: Map });
    }
    renderMap = () => {
        if (this.props.ready) {
            return <Redirect to="/rap"></Redirect>;
        }
        const L = this.props.lang;
        return (
            <RenderMap
                setupReport={this.props.setupReport}
                loc={[-79.3788, 43.6577]}
                Map={this.state.Map}
                L={L}
                reports={this.props.reports}
                // selection={this.state.selection}
            ></RenderMap>
        );
    };
    render() {
        let { reports } = this.props;
        const L = this.props.lang;
        const s = ["Maintenece", "Incident", "Other Issue"];
        return (
            <DashboarWrapper
                currentPage={1}
                clearbg={true}
                subnav={[{ title: "Vote on Reports", to: "/vote" }]}
            >
                <div className="portal-con">
                    {this.renderMap()}
                    <div className="portal-button">
                        {L === "en"
                            ? "Click to add a report!"
                            : "Cliquez pour ajouter un rapport!"}
                    </div>
                    <div className="portal-search">
                        <div className="portal-search__header">
                            <div>
                                {L === "en"
                                    ? "Recent Activity"
                                    : "Activité Récente"}
                            </div>
                            <div>
                                <i class="far fa-clock"></i>
                            </div>
                        </div>
                        <div className="portal-search__body">
                            {reports.map(({ selection, name, date, title }) => (
                                <div className="portal-search__issue">
                                    <div>
                                        <span>{s[selection]}</span>
                                        <span>
                                            {L === "en" ? "at " : "à "}{" "}
                                        </span>
                                        <span>{name}</span>
                                    </div>
                                    <div>
                                        {L === "en"
                                            ? "Reported on "
                                            : "Rapporté le "}{" "}
                                        {date}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="portal-search__footer">
                            {L === "en" ? "Filter by:" : "Filtrer par:"}
                        </div>
                    </div>
                </div>
            </DashboarWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    ready: state.report.ready,
    lang: state.lang.lang,
    setup: state.report.setupreport,
    reports: state.firestore.data["reports"]
        ? Object.values(state.firestore.data["reports"])
        : [],
});

const mapDispatchToProps = (dispatch) => ({
    setupReport: (report) => dispatch(setupReport(report)),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(() => {
        return [
            {
                collection: "reports",
                orderBy: ["date", "desc"],
                storeAs: "reports",
            },
        ];
    })
)(PortalBase);

class RenderMap extends Component {
    render() {
        const markerIcons = [blueMarker, greenMarker, redMarker];
        if (this.props.Map) {
            let Map = this.props.Map;
            const { L, reports } = this.props;
            return (
                <Map
                    // eslint-disable-next-line
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        flex: 1,
                        borderRadius: 35,
                    }}
                    center={this.props.loc}
                    zoom={[17]}
                    onClick={(map, e) => {
                        const lat = map.getCenter().lat.toFixed(4);
                        const long = map.getCenter().lng.toFixed(4);

                        axios
                            .get(
                                `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=pk.eyJ1IjoiZmFyaGFuaG0iLCJhIjoiY2tuMTUxYjNnMHIyODJvbzJueDJzdWJmcCJ9.EIl7ZcqlshPyJxnxyGNGhg`
                            )
                            .then(({ data }) => {
                                const { place_name } = data["features"][0];
                                if (
                                    window.confirm(
                                        L === "en"
                                            ? `Comfirm your point\nLAT:${long}\nLONG:${lat}\n${place_name}\n`
                                            : `Confirmez votre point\nLAT:${long}\nLONG:${lat}\n${place_name}\n`
                                    )
                                ) {
                                    console.log("here");
                                    this.props.setupReport({
                                        lat,
                                        long,
                                        name: place_name,
                                    });
                                }
                            })
                            .catch((e) => {
                                console.log(e);
                            });
                    }}
                >
                    {reports.map(({ loc, selection }) => {
                        console.log(selection);
                        return (
                            <Marker coordinates={loc} anchor="center">
                                <img
                                    src={markerIcons[selection]}
                                    width="30px"
                                    height="30px"
                                    alt="marker"
                                />
                            </Marker>
                        );
                    })}
                </Map>
            );
        } else {
            return <div>Loading Map</div>;
        }
    }
}
