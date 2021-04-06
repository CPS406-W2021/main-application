import React, { Component } from "react";
import SingePageWrapper from "../../components/SinglePageWrapper";
export default class Survey extends Component {
    render() {
        return (
            <SingePageWrapper>
                <div className="survey ui form">
                    <h1>User Survey</h1>
                    <div className = "options">No &nbsp; Somewhat  &nbsp; Yes</div>

            
                    <div class="inline fields">
                        <label>Toronto keeps residents informed about changes that affect them</label>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency"></input>
                            <label></label>
                        </div>
                        </div>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency"></input>
                            <label></label>
                        </div>
                        </div>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency"></input>
                            <label></label>
                        </div>
                        </div>

                    </div>

                    <div class="inline fields">
                        <label>Toronto keeps resident's views in mind when making decisions</label>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency1"></input>
                            <label></label>
                        </div>
                        </div>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency1"></input>
                            <label></label>
                        </div>
                        </div>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency1"></input>
                            <label></label>
                        </div>
                        </div>

                    </div>
 
                    <div class="inline fields">
                        <label>Toronto keeps up with regular maintenace about the city</label>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency2"></input>
                            <label></label>
                        </div>
                        </div>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency2"></input>
                            <label></label>
                        </div>
                        </div>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency2"></input>
                            <label></label>
                        </div>
                        </div>

                    </div>

                    <div class="inline fields">
                        <label>I am satisfied with the services and facilities provided by Toronto</label>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency3"></input>
                            <label></label>
                        </div>
                        </div>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency3"></input>
                            <label></label>
                        </div>
                        </div>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency3"></input>
                            <label></label>
                        </div>
                        </div>

                    </div>

                    <div class="inline fields">
                        <label>Toronto's security and safety measures are up to date and I feel safe</label>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency4"></input>
                            <label></label>
                        </div>
                        </div>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency4"></input>
                            <label></label>
                        </div>
                        </div>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency4"></input>
                            <label></label>
                        </div>
                        </div>
                    </div>

                    <div class="inline fields">
                        <label>Toronto provides a safe environment during the pandemic</label>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency5"></input>
                            <label></label>
                        </div>
                        </div>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency5"></input>
                            <label></label>
                        </div>
                        </div>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency5"></input>
                            <label></label>
                        </div>
                        </div>

                    </div>    

                    <div class="inline fields">
                        <label>I would recommend Toronto as a city to live in to others</label>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency6"></input>
                            <label></label>
                        </div>
                        </div>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency6"></input>
                            <label></label>
                        </div>
                        </div>
                        <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency6"></input>
                            <label></label>
                        </div>
                        </div>

                    </div>                                        
                    <button class="ui yellow button">SUBMIT</button>
                </div>

            </SingePageWrapper>
        );
    }
}
