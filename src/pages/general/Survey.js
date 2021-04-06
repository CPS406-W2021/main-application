import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SingePageWrapper from "../../components/SinglePageWrapper";
import { enterSurvey } from "../../store/actions/surveryActions";
class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirecToHome: false,
            page: 0,
            answers: [-1, -1, -1, -1, -1, -1],
        };
    }
    changeInput = (v, i) => {
        let { answers } = this.state;
        answers[i] = v;
        this.setState({ answers });
    };
    onSubmit = () => {
        const { answers } = this.state;
        if (answers.some((i) => i === -1)) {
            alert("Please fill out all of the questions");
        }
        this.props.enterSurvey(answers);
    };
    render() {
        if (this.props.surveyEntered) {
            alert("Thanks for filling out the survery!");
            return <Redirect to="/"></Redirect>;
        }
        if (this.state.redirecToHome) {
            return <Redirect to="/"></Redirect>;
        }
        if (this.state.page === 0) {
            return (
                <SingePageWrapper>
                    <div className="surveyC">
                        <h1>User Survey</h1>
                        <p>
                            <strong>
                                Would you like to part-take in a survey about
                                the city?
                            </strong>
                            <br></br> This Would take approximately{" "}
                            <span>5 minutes </span> to complete
                        </p>

                        <button
                            className="ui yellow button"
                            onClick={() => this.setState({ page: 1 })}
                        >
                            Yes
                        </button>
                        <button
                            className="ui grey button"
                            onClick={() =>
                                this.setState({ redirecToHome: true })
                            }
                        >
                            No
                        </button>
                    </div>
                </SingePageWrapper>
            );
        }
        const surveyC = [
            {
                q:
                    " Toronto keeps residents informed about changes that affect them",
            },
            {
                q:
                    "Toronto keeps resident's views in mind when making decisions",
            },
            {
                q: "Toronto keeps up with regular maintenace about the city",
            },
            {
                q:
                    "I am satisfied with the services and facilities provided by Toronto",
            },
            {
                q:
                    "Toronto's security and safety measures are up to date and I feel safe",
            },
            {
                q: "I would recommend Toronto as a city to live in to others",
            },
        ];
        return (
            <SingePageWrapper>
                <div className="survey ui form">
                    <h1>User Survey</h1>

                    <div class="inline fields">
                        <label className="q">
                            Do you agree with the following statements?
                        </label>
                        <div class="field">No</div>
                        <div class="field">Somewhat</div>
                        <div class="field">Yes</div>
                    </div>
                    {surveyC.map(({ q }, i) => (
                        <SurveryRow
                            text={q}
                            i={i}
                            changeInput={(v) => this.changeInput(v, i)}
                        ></SurveryRow>
                    ))}
                    <button class="ui yellow button" onClick={this.onSubmit}>
                        SUBMIT
                    </button>
                </div>
            </SingePageWrapper>
        );
    }
}
class SurveryRow extends Component {
    render() {
        const { i, text, changeInput } = this.props;
        return (
            <div class="inline fields">
                <label className="q">{text}</label>
                <div class="field">
                    <div class="ui radio checkbox">
                        <input
                            type="radio"
                            name={`freq${i}`}
                            value={0}
                            onChange={(e) => changeInput(e.target.value)}
                        ></input>
                        <label></label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui radio checkbox">
                        <input
                            type="radio"
                            name={`freq${i}`}
                            value={1}
                            onChange={(e) => changeInput(e.target.value)}
                        ></input>
                        <label></label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui radio checkbox">
                        <input
                            type="radio"
                            name={`freq${i}`}
                            value={2}
                            onChange={(e) => changeInput(e.target.value)}
                        ></input>
                        <label></label>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return { surveyEntered: state.survey.entered };
};

const mapDispatchToProps = {
    enterSurvey: enterSurvey,
};

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
