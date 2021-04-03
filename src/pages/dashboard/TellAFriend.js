import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";

export default class TellAFriend extends Component {
    render() {
        return (
            <DashboarWrapper>
                <div className="taf-con">
                    <div className="taf-map"></div>
                    <div className="taf-body">
                        <h1 className="taf-h1">Tell A Friend</h1>
                        <div className="taf-sub">Wish to spread the word about the CyPress? Send a message to a friend!</div>
                        <hr className="taf-line"></hr>
                        
                        <form class="ui form">
                            <div class="field">
                                <label>Recipient's Email</label>
                                <div className="reports-search__con ui input">
                                    <input
                                        className="reports-search "
                                        type="text"
                                        placeholder="imafriend@ryerson.ca"
                                    ></input>
                                </div>
                            </div>
                            <div class="field">
                                <label>Add a personal message:</label>
                                <textarea></textarea>
                            </div>
                            <hr className="taf-line"></hr>
                            <div className="taf-buttons">
                                <button class="ui green button">Send</button>
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
