import React, { Component } from "react";
import SingePageWrapper from "../../components/SinglePageWrapper";
export default class Survey extends Component {
    render() {
        return (
            <SingePageWrapper>
                <div className="survey ui form">
                    <h1>User Survey</h1>
                    <div class="inline fields">
                        <label>How often do you use checkboxes?</label>
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

 
                
                    <button class="ui yellow button">SUBMIT</button>
                </div>

            </SingePageWrapper>
        );
    }
}
