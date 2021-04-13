import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import { connect } from "react-redux";
import ReactMapboxGl from "react-mapbox-gl";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteReport, editReport } from "../../store/actions/reportActions";
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
        this.state = { editMode: false, title: "", information: "" };
    }
    renderToolbar = (owner) => {
        if (!owner || this.state.editMode) return;
        return (
            <div className="view-toolbar__con">
                <i
                    class="edit icon"
                    onClick={(e) => {
                        this.setState({
                            editMode: true,
                            title: this.props.curReport.title,
                            desc: this.props.curReport.information,
                        });
                    }}
                ></i>
                <i class="trash alternate icon" onClick={this.onDelete}></i>
            </div>
        );
    };
    onDelete = () => {
        if (window.prompt(this.props.user.scq) === this.props.user.sca) {
            this.props.deleteReport(this.props.rid);
        }
    };
    OnClickSave = () => {
        if (this.state.text === "" && this.state.information === "") {
            alert("please enter a new title or description");
        } else if (window.prompt(this.props.user.scq) === this.props.user.sca) {
            this.props.updateReport(
                this.props.rid,
                this.state.title,
                this.state.information
            );
            this.setState({ editMode: false });
        }
    };
    renderFooter() {
        if (this.state.editMode) {
            return (
                <div className="view-toolbar__footer">
                    <button class="ui button green" onClick={this.OnClickSave}>
                        Save
                    </button>
                    <div
                        class="ui button"
                        onClick={(e) => this.setState({ editMode: false })}
                    >
                        Cancel
                    </div>
                </div>
            );
        }
    }
    renderTitle(owner) {
        if (owner && this.state.editMode) {
            return (
                <div class="ui input">
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(e) =>
                            this.setState({ title: e.target.value })
                        }
                    />
                </div>
            );
        } else {
            return <h1 className="view-h1">{this.props.curReport.title}</h1>;
        }
    }
    renderDesc = (owner) => {
        if (owner && this.state.editMode) {
            return (
                <div
                    class="ui input"
                    style={{ width: "100%", display: "block" }}
                >
                    <textarea
                        type="text"
                        value={this.state.information}
                        onChange={(e) =>
                            this.setState({ information: e.target.value })
                        }
                    />
                </div>
            );
        } else {
            return (
                <div className="text">{this.props.curReport.information}</div>
            );
        }
    };
    render() {
        const Map = ReactMapboxGl({
            accessToken:
                "pk.eyJ1IjoiZmFyaGFuaG0iLCJhIjoiY2tuMTUxYjNnMHIyODJvbzJueDJzdWJmcCJ9.EIl7ZcqlshPyJxnxyGNGhg",
            interactive: false,
        });
        const { curReport } = this.props;
        if (curReport === {} || curReport === null) {
            return (
                <DashboarWrapper>
                    Either the report is loading or has been deleted.
                </DashboarWrapper>
            );
        }
        const owner = this.props.loggedin && this.props.uid === curReport.uid;
        const rdate = new Date(curReport.date);
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
                            center={curReport.loc}
                            zoom={[17]}
                        ></Map>
                    </div>
                    <div className="view-body">
                        {this.renderTitle(owner)}
                        <div className="view-sub">
                            <span className="address">at {curReport.name}</span>
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
                        {this.renderToolbar(owner)}
                        <div className="view-descr">
                            <label className="descr">Description:</label>
                            {this.renderDesc(owner)}
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
                                    <strong>Posted by:</strong>{" "}
                                    {curReport.username}
                                </div>
                            </div>
                        </div>
                        {this.renderFooter()}
                    </div>
                </div>
            </DashboarWrapper>
        );
    }
}

const mapStateToProps = (state, props) => {
    let curReport = {};
    if (state.firestore.data.reports) {
        curReport = state.firestore.data.reports[props.rid];
    }
    return {
        curReport,
        report: state.report.loadedreport,
        loggedin: state.auth.loggedin,
        uid: state.auth.uid,
        user: state.auth.userData,
    };
};

const mapDispatchToProps = (dispatch) => ({
    deleteReport: (rid) => dispatch(deleteReport(rid)),
    updateReport: (rid, title, info) =>
        dispatch(editReport(rid, { title, information: info })),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => {
        return [`reports/${props.rid}`];
    })
)(ViewReports);
