import React, { Component } from "react";
import SingePageWrapper from "../../components/SinglePageWrapper";
export default class Survey extends Component {
    render() {
        return (
            <SingePageWrapper>
                <div className="surveyC">
                    <h1>User Survey</h1>
                    <p> <strong>Would you like to part-take in a survey about the city?</strong><br></br> This Would
                    take approximately <span>5 minutes </span>to complete</p>

                    <button className="ui yellow button">Yes</button>
                    <button className="ui grey button">No</button>            
                </div>

            </SingePageWrapper>
        );
    }
}

