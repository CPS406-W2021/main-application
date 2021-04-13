import React, { Component, Fragment } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import blueMarker from "../../images/icons/blue.png";
import greenMarker from "../../images/icons/green.png";
import redMarker from "../../images/icons/red.png";
import { Link } from "react-router-dom";
import {
    downVoteReport,
    upVoteReport,
} from "../../store/actions/reportActions";
class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Map: false,
            sort: "recent",
        };
    }
    componentDidMount() {
        const Map = ReactMapboxGl({
            accessToken:
                "pk.eyJ1IjoiZmFyaGFuaG0iLCJhIjoiY2tuMTUxYjNnMHIyODJvbzJueDJzdWJmcCJ9.EIl7ZcqlshPyJxnxyGNGhg",
            interactive: false,
        });
        this.setState({ Map: Map });
    }
    renderList() {
        function sortBy(field) {
            return function (a, b) {
                return (a[field] > b[field]) - (a[field] < b[field]);
            };
        }
        if (this.state.sort === "recent") {
            return this.props.reports;
        } else {
            return [...this.props.reports].sort(sortBy("votes")).reverse();
        }
    }
    render() {
        const L = this.props.lang;
        const NOW = new Date();
        const timeDifference = function (previous, current = NOW) {
            var msPerMinute = 60 * 1000;
            var msPerHour = msPerMinute * 60;
            var msPerDay = msPerHour * 24;
            var msPerMonth = msPerDay * 30;
            var msPerYear = msPerDay * 365;

            var elapsed = current - previous;

            if (elapsed < msPerMinute) {
                return Math.round(elapsed / 1000) + " seconds ago";
            } else if (elapsed < msPerHour) {
                return Math.round(elapsed / msPerMinute) + " minutes ago";
            } else if (elapsed < msPerDay) {
                return Math.round(elapsed / msPerHour) + " hours ago";
            } else if (elapsed < msPerMonth) {
                return (
                    "approximately " +
                    Math.round(elapsed / msPerDay) +
                    " days ago"
                );
            } else if (elapsed < msPerYear) {
                return (
                    "approximately " +
                    Math.round(elapsed / msPerMonth) +
                    " months ago"
                );
            } else {
                return (
                    "approximately " +
                    Math.round(elapsed / msPerYear) +
                    " years ago"
                );
            }
        };
        return (
            <DashboarWrapper>
                <div className="vot">
                    <div className="header">
                        <h1>
                            {L === "en"
                                ? "Current Problems in Toronto"
                                : "Problèmes actuels à Toronto"}
                        </h1>
                        <div className="header-icons">
                            <span
                                className="horn"
                                onClick={() =>
                                    this.setState({ sort: "relevant" })
                                }
                            >
                                <i class="large bullhorn icon"></i>
                                <strong>
                                    {L === "en"
                                        ? "Most Relevant"
                                        : "Le plus pertinent"}
                                </strong>
                            </span>
                            <span
                                className="clock"
                                onClick={() =>
                                    this.setState({ sort: "recent" })
                                }
                            >
                                <i class="large black clock outline icon"></i>
                                <strong>
                                    {L === "en"
                                        ? "Most Recent"
                                        : "Le plus récent"}
                                </strong>
                            </span>
                        </div>
                    </div>
                    {this.renderList().map(
                        ({
                            title,
                            name,
                            username,
                            loc,
                            selection,
                            key,
                            uid,
                            votes,
                            date,
                        }) => {
                            return (
                                <Fragment>
                                    <div className="container">
                                        <div className="item-arrow item-arrow__con">
                                            <div
                                                className="item-arrow__up"
                                                onClick={() =>
                                                    this.props.upVoteReport(
                                                        key,
                                                        this.props.currUser
                                                    )
                                                }
                                            >
                                                <i class="arrow up icon"></i>
                                            </div>
                                            <div className="item-arrow__num">
                                                {votes}
                                            </div>
                                            <div
                                                className="item-arrow__down"
                                                onClick={() =>
                                                    this.props.downVoteReport(
                                                        key,
                                                        this.props.currUser
                                                    )
                                                }
                                            >
                                                <i class="arrow down icon"></i>
                                            </div>
                                        </div>

                                        <div className="map">
                                            <RenderMap
                                                loc={loc}
                                                Map={this.state.Map}
                                                selection={selection}
                                            ></RenderMap>
                                        </div>

                                        <div className="item-desc">
                                            <span className="title">
                                                {title}
                                            </span>
                                            <br></br>
                                            <span className="info">
                                                {L === "en"
                                                    ? "Posted by"
                                                    : "Posté par"}{" "}
                                                <span className="usr">
                                                    {username}
                                                </span>{" "}
                                                {L === "en"
                                                    ? `${timeDifference(
                                                          new Date(date)
                                                      )}`
                                                    : " Il y a 13 heures"}
                                            </span>
                                            <br></br>
                                            <span className="loc">
                                                {L === "en"
                                                    ? "Location: "
                                                    : "Emplacement: "}{" "}
                                                <span className="address">
                                                    {name}
                                                </span>
                                            </span>

                                            <div className="report-icons">
                                                <Link
                                                    to={`/report?report=${key}`}
                                                    className="open"
                                                >
                                                    <i class="grey folder open outline icon"></i>
                                                    {L === "en"
                                                        ? "View Full Report"
                                                        : "Afficher le rapport complet"}
                                                </Link>
                                                <span
                                                    className="share"
                                                    onClick={() => {
                                                        navigator.clipboard.writeText(
                                                            `${window.location.origin}/report?report=${key}`
                                                        );
                                                    }}
                                                >
                                                    <i class="grey share square outline icon"></i>
                                                    {L === "en"
                                                        ? "Share"
                                                        : "Partager"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ui divider"></div>
                                </Fragment>
                            );
                        }
                    )}
                </div>
            </DashboarWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state.auth.uid);
    const REPORTS = state.firestore.data["reports"]
        ? Object.keys(state.firestore.data["reports"]).map((k) => ({
              key: k,
              ...state.firestore.data["reports"][k],
          }))
        : [];
    // Rocky here
    return {
        ready: state.report.ready,
        lang: state.lang.lang,
        reports: REPORTS,
        currUser: state.auth.uid,
    };
};
const mapDispatchToProps = (dispatch) => ({
    downVoteReport: (rid, uid) =>
        dispatch(downVoteReport({ reportId: rid, uid: uid })),
    upVoteReport: (rid, uid) =>
        dispatch(upVoteReport({ reportId: rid, uid: uid })),
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
            { collection: "votes" },
        ];
    })
)(Vote);

class RenderMap extends Component {
    render() {
        const markerIcons = [blueMarker, greenMarker, redMarker];
        const selection = this.props.selection;
        if (this.props.Map) {
            let Map = this.props.Map;
            return (
                <Map
                    // eslint-disable-next-line
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        flex: 1,
                    }}
                    center={this.props.loc}
                    zoom={[13]}
                >
                    {selection >= 0 && (
                        <Marker coordinates={this.props.loc} anchor="center">
                            <img
                                src={markerIcons[selection]}
                                width="30px"
                                height="30px"
                                alt="marker"
                            />
                        </Marker>
                    )}
                </Map>
            );
        } else {
            return <div>Loading Map</div>;
        }
    }
}
