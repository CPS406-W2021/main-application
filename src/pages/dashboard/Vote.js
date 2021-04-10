import React, { Component, Fragment } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import blueMarker from "../../images/icons/blue.png";
import greenMarker from "../../images/icons/green.png";
import redMarker from "../../images/icons/red.png";

class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Map: false,
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
    render() {
        return (
            <DashboarWrapper>
                <div className="vot">
                    <div className="header">
                        <h1>Current Problems in Toronto</h1>
                        <div className="header-icons">
                            <span className="horn">
                                <i class="large bullhorn icon"></i>
                                <strong>Most Relevant</strong>
                            </span>
                            <span className="clock">
                                <i class="large black clock outline icon"></i>
                                <strong>Most Recent</strong>{" "}
                            </span>
                        </div>
                    </div>
                    {this.props.reports.map(
                        ({ title, name, uid, loc, selection }) => {
                            const selectionColor = {
                                Other: 2,
                                Pothole: 1,
                                Tree: 0,
                            };
                            return (
                                <Fragment>
                                    <div className="container">
                                        <div className="item-arrow">
                                            <i class="arrow up icon"></i>
                                            <div>76</div>
                                            <i class="arrow down icon"></i>
                                        </div>

                                        <div className="map">
                                            <RenderMap
                                                loc={loc}
                                                Map={this.state.Map}
                                                selection={
                                                    selectionColor[selection]
                                                }
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
                                                    {uid}
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
                                                <span className="open">
                                                    <i class="grey folder open outline icon"></i>
                                                    View Full Report
                                                </span>
                                                <span className="share">
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
    console.log(TOTAL_VOTES);
    return {
        ready: state.report.ready,
        lang: state.lang.lang,
        reports: REPORTS,
    };
};

export default compose(
    connect(mapStateToProps, {}),
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
