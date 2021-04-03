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
                        <div className="view-sub"> <span class="address"> at 123 St. Street St. Toronto, ON. Canada</span></div>
                        <div className="view-progress">    
                            <ul>
                                <li> <i className="check circle outline icon"></i>
                                     <p>Submitted</p></li>
                                <li> <i className="check circle outline icon"></i>
                                     <p>Approved</p> </li>
                                <li> <i className="fas fa-circle"></i>
                                    <p>In Progress</p> </li>
                                <li> <i className="fas fa-circle"></i>
                                    <p>Processing</p></li>
                                <li> <i className="fas fa-circle"></i>
                                <p>Resolved</p></li>
                            </ul>
                        </div>
                        
                        <hr className="view-line"></hr>
                        <div className="view-submit">
                            <form className="ui form">
                                <div className="field">
                                    <label>Submitted By:</label>
                                    <i className="user icon"></i>
                                    <label className="name">Elliot</label>
                                </div>
                            </form>
                        </div>

                        <div className="view-descr">
                            <form className="ui form">
                                <div className="field">
                                    <label className="descr">Description:</label>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q
                                        uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                    <hr className="view-line"></hr>
                                    <div className="view-buttons">
                                        <button className="ui button" type="cancel">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </DashboarWrapper>
        );
    }
}
