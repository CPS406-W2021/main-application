import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import { connect } from "react-redux";
import ReactMapboxGl from "react-mapbox-gl";
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
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const Map = ReactMapboxGl({
            accessToken:
                "pk.eyJ1IjoiZmFyaGFuaG0iLCJhIjoiY2tuMTUxYjNnMHIyODJvbzJueDJzdWJmcCJ9.EIl7ZcqlshPyJxnxyGNGhg",
            interactive: false,
        });
        const { report } = this.props;
        console.log(report);
        const rdate = new Date(report.date);
        return (
            <DashboarWrapper>
                <div className="view-con">
                    <div className="view-map">
                        <Map
                            // eslint-disable-next-line
                            style="mapbox://styles/mapbox/streets-v9"
                            containerStyle={{
                                flex: 1,
                            }}
                            center={report.loc}
                            zoom={[17]}
                        ></Map>
                    </div>
                    <div className="view-body">
                        <h1 className="view-h1">{report.title}</h1>
                        <div className="view-sub">
                            <span className="address">at {report.name}</span>
                        </div>
                        <div className="view-progress">
                            <ul>
                                {updates.map(({ type, q, a }) => {
                                    return (
                                        <Updates
                                            key={q}
                                            q={q}
                                            a={a}
                                            type={type}
                                        />
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="view-descr">
                            <label className="descr">Description:</label>
                            <div className="text">{report.information}</div>
                        </div>
                        <div className="view-by">
                            <div className="view-by__icon">
                                <i className="user circle icon"></i>
                            </div>
                            <div className="view-by__body">
                                <div className="view-by__body-time">
                                    {rdate.toLocaleDateString()}
                                </div>
                                <div className="view-by__body-posted">
                                    <strong>Posted by:</strong> {report.uid}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboarWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return { report: state.report.loadedreport };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ViewReports);
