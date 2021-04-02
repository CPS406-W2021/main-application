import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";

export default class ViewReports extends Component {
    render() {
        return (
            <DashboarWrapper>
                <div className="view-con">
                    <div className="view-map"></div>
                    <div className="view-body">
                        <h1 className="view-h1">Tree Collapse</h1>
                        <div className="view-sub">at 123 St. Street St. Toronto, ON. Canada</div>
                        <hr className="view-line"></hr>

                        <form class="ui form">
                            <div class="field">
                                <label>Submitted By</label>
                            </div>
            
                            <div class="field">
                                <label>Description:</label>
                                <textarea></textarea>
                            </div>
                            <hr className="view-line"></hr>
                            <div className="view-buttons">
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
