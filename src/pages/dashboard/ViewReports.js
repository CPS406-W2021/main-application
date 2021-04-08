import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import { connect } from "react-redux";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
const updates = [
    {
        type: "s",
        a: "Request received.",
    },
    {
        type: "a",
        a: "Request Approved.",
    },
    {
        type: "u",
        a:
            "Update 1 : City of Toronto is taking action to clear the fallen tree.",
    },
    {
        type: "u",
        a: "Update 2 : Unexpected Problems causing delay.",
    },
    {
        type: "r",
        a: "Resolved : Road has been cleared.",
    },
];
class Updates extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    renderTitle() {
        switch (this.props.type) {
            case "s":
                return "Request";
            case "a":
                return "Approved";
            case "u":
                return "Update";
            case "r":
                return "Resolved";
            default:
                return "";
        }
    }
    render() {
        return (
            <li className={`update-listi ${this.props.type}`}>
                <div className="update-title">
                    <i className="check circle outline icon"></i>
                    <div className="update-body"> {this.props.a}</div>
                </div>
            </li>
        );
    }
}
class ViewReports extends Component {
    render() {
        const Map = ReactMapboxGl({
            accessToken:
                "pk.eyJ1IjoiZmFyaGFuaG0iLCJhIjoiY2tuMTUxYjNnMHIyODJvbzJueDJzdWJmcCJ9.EIl7ZcqlshPyJxnxyGNGhg",
            interactive: false,
        });
        return (
            <DashboarWrapper>
                <div className="view-con">
                    <div className="view-map">
                        <Map
                            style="mapbox://styles/mapbox/streets-v9"
                            containerStyle={{
                                flex: 1,
                            }}
                            center={[-79.3788, 43.6577]}
                            zoom={[17]}
                        ></Map>
                    </div>
                    <div className="view-body">
                        <h1 className="view-h1">Tree Collapse</h1>
                        <div className="view-sub">
                            <span class="address">
                                at 123 St. Street St. Toronto, ON. Canada
                            </span>
                        </div>
                        <div className="view-progress">
                            <ul>
                                {updates.map(({ type, q, a }) => {
                                    return <Updates q={q} a={a} type={type} />;
                                })}
                            </ul>
                        </div>
                        <div className="view-descr">
                            <label className="descr">Description:</label>
                            <div className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, q uis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                        <div className="view-by">
                            <div className="view-by__icon">
                                <i class="user circle icon"></i>
                            </div>
                            <div className="view-by__body">
                                <div className="view-by__body-time">
                                    3 days ago
                                </div>
                                <div className="view-by__body-posted">
                                    <strong>Posted by:</strong> Farhan Mohammed
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboarWrapper>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ViewReports);
