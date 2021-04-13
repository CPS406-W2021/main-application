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
        return (
            <DashboarWrapper>
                <div className="vot">
                    <div className="header">
                        <h1>Current Problems in Toronto</h1>
                        <div className="header-icons">
                            <span
                                className="horn"
                                onClick={() =>
                                    this.setState({ sort: "relevant" })
                                }
                            >
                                <i class="large bullhorn icon"></i>
                                <strong>Most Relevant</strong>
                            </span>
                            <span
                                className="clock"
                                onClick={() =>
                                    this.setState({ sort: "recent" })
                                }
                            >
                                <i class="large black clock outline icon"></i>
                                <strong>Most Recent</strong>
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
                                                        uid
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
                                                        uid
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
                                                Posted by{" "}
                                                <span className="usr">
                                                    {username}
                                                </span>{" "}
                                                13 hours ago
                                            </span>
                                            <br></br>
                                            <span className="loc">
                                                Location:{" "}
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
                                                    View Full Report
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
                                                    Share
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
    console.log(state.auth.uid);
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
