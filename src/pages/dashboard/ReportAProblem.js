import React, { Component } from "react";
import { connect } from "react-redux";
import { authIsReady } from "react-redux-firebase";
import { Link, Redirect } from "react-router-dom";
import DashboarWrapper from "../../components/ThemeWrapper";
import { createReport } from "../../store/actions/reportActions";
import ReactMapboxGl from "react-mapbox-gl";
import { cancelReport } from "../../store/actions/reportActions";

class ReportAProblem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkUpdates: true,
            selection: -1,
            information: "",
        };
    }
    onSubmit = (e) => {
        e.preventDefault();
        const uid = this.props.uid;
        const { checkUpdates, selection, information } = this.state;
        const selectionType = ["Tree", "Pothole", "Other"];
        const add = "123 St";
        const latlong = [0, 0];
        this.props.createReport({
            uid,
            checkUpdates,
            selection: selectionType[Number(selection)],
            information,
            add,
            latlong,
        });
    };
    render() {
        const Map = ReactMapboxGl({
            accessToken:
                "pk.eyJ1IjoiZmFyaGFuaG0iLCJhIjoiY2tuMTUxYjNnMHIyODJvbzJueDJzdWJmcCJ9.EIl7ZcqlshPyJxnxyGNGhg",
            interactive: false,
        });
        if (this.props.setup === false) {
            return <Redirect to="/portal"></Redirect>;
        }
        return (
            <DashboarWrapper currentPage={2}>
                <div className="rap-con">
                    <div className="rap-map">
                        <Map
                            style="mapbox://styles/mapbox/streets-v9"
                            containerStyle={{
                                flex: 1,
                                borderRadius: 35,
                            }}
                            center={[-79.3788, 43.6577]}
                            zoom={[17]}
                        ></Map>
                    </div>
                    <div className="rap-body">
                        <h1 className="rap-h1">Report a Problem</h1>
                        <div className="rap-sub">at {this.props.place}</div>

                        <form class="ui form">
                            <div class="field">
                                <label>Report Title</label>
                                <div className="reports-search__con ui input">
                                    <input
                                        onChange={(e) =>
                                            this.setState({
                                                title: e.target.value,
                                            })
                                        }
                                        val={this.state.title}
                                        className="reports-search "
                                        type="text"
                                        placeholder="Rat Cleanup at Aisle 7"
                                    ></input>
                                </div>
                            </div>
                            <div class="field">
                                <label>Problem at Site</label>
                                <div class="ui form">
                                    <div class="field">
                                        <select
                                            onChange={(e) => {
                                                this.setState({
                                                    selection: e.target.value,
                                                });
                                            }}
                                            val={this.state.selection}
                                        >
                                            <option value="-1">
                                                Select an Issue
                                            </option>
                                            <option value="0">Tree</option>
                                            <option value="1">Pothole</option>
                                            <option value="2">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div
                                    class="ui checkbox"
                                    onClick={() =>
                                        this.setState({
                                            checkUpdates: !this.state
                                                .checkUpdates,
                                        })
                                    }
                                >
                                    <input
                                        type="checkbox"
                                        tabindex="0"
                                        class="hidden"
                                        checked={this.state.checkUpdates}
                                    />
                                    <label>
                                        I want to receive updates on this report
                                    </label>
                                </div>
                            </div>
                            <div class="field">
                                <label>Enter more information:</label>
                                <textarea
                                    val={this.state.information}
                                    onChange={(e) => {
                                        this.setState({
                                            information: e.target.value,
                                        });
                                    }}
                                ></textarea>
                            </div>
                            <hr className="rap-line"></hr>
                            <div className="rap-buttons">
                                <button
                                    class="ui green button"
                                    onClick={this.onSubmit}
                                >
                                    Submit
                                </button>
                                <Link
                                    to="/portal"
                                    class="ui button"
                                    type="submit"
                                >
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </DashboarWrapper>
        );
    }
}
const mapStateToProps = (state) => ({
    error: state.report.error,
    uid: state.auth.uid,
    place: state.report.setupreport["name"],
    loc: [state.report.setupreport["long"], state.report.setupreport["lat"]],
});

const mapDispatchToProps = (dispatch) => ({
    createReport: (r) => dispatch(createReport(r)),

    cancelReport: () => dispatch(cancelReport),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportAProblem);
