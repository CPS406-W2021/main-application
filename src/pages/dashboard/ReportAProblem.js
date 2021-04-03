import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";

export default class ReportAProblem extends Component {
    render() {
        return (
            <DashboarWrapper currentPage={2}>
                <div className="rap-con">
                    <div className="rap-map"></div>
                    <div className="rap-body">
                        <h1 className="rap-h1">Report a Problem</h1>
                        <div className="rap-sub">at 123 St. Street St.</div>

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
