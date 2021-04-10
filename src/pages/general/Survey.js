import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SingePageWrapper from "../../components/SinglePageWrapper";
import { connect } from "react-redux";

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
        const L = this.props.lang;
        const { answers } = this.state;
        if (answers.some((i) => i === -1)) {
            alert(
                L === "en"
                    ? "Please fill out all of the questions"
                    : "Veuillez remplir toutes les questions"
            );
        }
        console.log(this.state.answers);
    };
    render() {
        const L = this.props.lang;
        if (this.state.redirecToHome) {
            return <Redirect to="/"></Redirect>;
        }
        if (this.state.page === 0) {
            return (
                <SingePageWrapper>
                    <div className="surveyC">
                        <h1>
                            {L === "en"
                                ? "User Survey"
                                : "Sondage auprès des utilisateurs"}
                        </h1>
                        <p>
                            <strong>
                                {L === "en"
                                    ? "Would you like to part-take in a survey about the city?"
                                    : "Souhaitez-vous participer à une enquête sur la ville?"}
                            </strong>
                            <br></br>{" "}
                            {L === "en"
                                ? "This Would take approximately"
                                : "Cela prendrait environ"}
                            <span> 5 minutes </span>{" "}
                            {L === "en" ? "to complete" : "compléter"}
                        </p>

                        <button
                            className="ui yellow button"
                            onClick={() => this.setState({ page: 1 })}
                        >
                            {L === "en" ? "Yes" : "Oui"}
                        </button>
                        <button
                            className="ui grey button"
                            onClick={() =>
                                this.setState({ redirecToHome: true })
                            }
                        >
                            {L === "en" ? "No" : "Non"}
                        </button>
                    </div>
                </SingePageWrapper>
            );
        }
        const surveyC = [
            {
                q:
                    L === "en"
                        ? "Toronto keeps residents informed about changes that affect them"
                        : "Toronto tient les résidents informés des changements qui les touchent",
            },
            {
                q:
                    L === "en"
                        ? "Toronto keeps resident's views in mind when making decisions"
                        : "Toronto garde à l'esprit les opinions des résidents lors de la prise de décisions",
            },
            {
                q:
                    L === "en"
                        ? "Toronto keeps up with regular maintenace about the city"
                        : "Toronto assure régulièrement l'entretien de la ville",
            },
            {
                q:
                    L === "en"
                        ? "I am satisfied with the services and facilities provided by Toronto"
                        : "Je suis satisfait des services et des installations fournis par Toronto",
            },
            {
                q:
                    L === "en"
                        ? "Toronto's security and safety measures are up to date and I feel safe"
                        : "Les mesures de sécurité et de sûreté de Toronto sont à jour et je me sens en sécurité",
            },
            {
                q:
                    L === "en"
                        ? "I would recommend Toronto as a city to live in to others"
                        : "Je recommanderais Toronto comme ville où vivre aux autres",
            },
        ];
        return (
            <SingePageWrapper>
                <div className="survey ui form">
                    <h1>
                        {L === "en"
                            ? "User Survey"
                            : "Sondage auprès des utilisateurs"}
                    </h1>
                    <div class="fields survRow">
                        <div className="survRow-text">
                            Do you agree with the following?
                        </div>
                        <div class="field survRow-field">
                            {L === "en" ? "No" : "Non"}
                        </div>
                        <div class="field survRow-field">
                            {L === "en" ? "Somewhat" : "Quelque peu"}
                        </div>
                        <div class="field survRow-field">
                            {L === "en" ? "Yes" : "Oui"}
                        </div>
                    </div>
                    <hr style={{ marginBottom: 10 }}></hr>
                    {surveyC.map(({ q, a }, i) => (
                        <SurveryRow
                            text={q}
                            i={i}
                            changeInput={(v) => this.changeInput(v, i)}
                        ></SurveryRow>
                    ))}
                    <button class="ui yellow button" onClick={this.onSubmit}>
                        {L === "en" ? "SUBMIT" : "NOUS FAIRE PARVENIR"}
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
            <div class="fields survRow">
                <div className="survRow-text">{text}</div>
                <div class="field survRow-field">
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
                <div class="field survRow-field">
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
                <div class="field survRow-field">
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

const mapStateToProps = (state) => ({
    lang: state.lang.lang,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
