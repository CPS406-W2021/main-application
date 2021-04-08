import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import DashboarWrapper from "../../components/ThemeWrapper";
import { cancelReport } from "../../store/actions/reportActions";
class ReportAProblem extends Component {
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
                                <label>Problem at Site</label>
                                <div class="ui form">
                                    <div class="field">
                                        <select>
                                            <option value="-1">
                                                Select an Issue
                                            </option>
                                            <option value="1">Pothole</option>
                                            <option value="0">Tree</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui checkbox">
                                    <input
                                        type="checkbox"
                                        tabindex="0"
                                        class="hidden"
                                    />
                                    <label>
                                        I want to receive updates on this
                                        report:
                                    </label>
                                </div>
                            </div>
                            <div class="field">
                                <label>Enter more information:</label>
                                <textarea></textarea>
                            </div>
                            <hr className="rap-line"></hr>
                            <div className="rap-buttons">
                                <button class="ui green button">Submit</button>
                                <button class="ui button" type="submit">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </DashboarWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    setup: state.report.ready,
    place: state.report.setupreport["name"],
    loc: [state.report.setupreport["long"], state.report.setupreport["lat"]],
});

const mapDispatchToProps = (dispatch) => ({
    cancelReport: () => dispatch(cancelReport),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportAProblem);
