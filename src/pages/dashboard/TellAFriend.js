import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
class TellAFriend extends Component {
    constructor(props) {
        super(props);
        this.state = { add: "", text: "", redirect: false };
    }
    render() {
        const L = this.props.lang;
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        return (
            <DashboarWrapper>
                <div className="taf-con">
                    <div className="taf-map"></div>
                    <div className="taf-body">
                        <h1 className="taf-h1">
                            {L === "en" ? "Tell A Friend" : "Dire à un Ami"}
                        </h1>
                        <div className="taf-sub">
                            {L === "en"
                                ? "Wish to spread the word about the Cypress? Send a message to a friend!"
                                : "Souhaitez-vous faire passer le mot sur Cypress? Envoyez un message à un ami!"}
                        </div>
                        <hr className="taf-line"></hr>

                        <form class="ui form">
                            <div class="field">
                                <label>
                                    {L === "en"
                                        ? "Recipient's Email:"
                                        : "E-mail du destinataire:"}
                                </label>
                                <div className="reports-search__con ui input">
                                    <input
                                        val={this.state.add}
                                        onChange={(e) =>
                                            this.setState({
                                                add: e.target.value,
                                            })
                                        }
                                        className="reports-search "
                                        type="text"
                                        placeholder={L === "en" ? "imafriend@ryerson.ca" : "jesuisunami@ryerson.ca"}
                                    ></input>
                                </div>
                            </div>
                            <div class="field">
                                <label>
                                    {L === "en"
                                        ? "Add a personal message:"
                                        : "Ajoutez un message personnel:"}
                                </label>
                                <textarea
                                    val={this.state.text}
                                    onChange={(e) =>
                                        this.setState({ text: e.target.value })
                                    }
                                ></textarea>
                            </div>
                            <hr className="taf-line"></hr>
                            <div className="taf-buttons">
                                <button
                                    class="ui green button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        function validateEmail(email) {
                                            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                            return re.test(
                                                String(email).toLowerCase()
                                            );
                                        }
                                        if (!validateEmail(this.state.add)) {
                                            alert(
                                                "Please Enter a valid email address"
                                            );
                                            return;
                                        }
                                        // Send default message if user didnt mesage anything

                                        if (this.state.text === "") {
                                            window.open(
                                                `mailto:${this.state.add}?subject=Cypress%20-%20your%20opinion%20is%20Toronto's%20number%20%231%20priority&body=Dear%20Recipient%2C%0D%0A%0D%0AYou%20have%20been%20invited%20to%20join%20Cypress!%20Cypress%20is%20designed%20to%20allow%20our%20citizens%20to%20report%20problems%20the%20concerns%20they%20have%20noticed%20on%20the%20the%20street%20in%20Toronto.%20Along%20with%20that%2C%20our%20citizens%20are%20able%20to%20track%20the%20progress%20of%20their%20reports%20from%20when%20it%20is%20first%20reported%20and%20until%20a%20solution%20is%20found.%20We%20value%20%20our%20citizen's%20input%2C%20and%20we%20want%20our%20citizens'%20voice%20heard.%0D%0A%0D%0A%0D%0A%0D%0AJoin%20us%20today! ${window.location.hostname}%0D%0A%0D%0ATruly%20yours%2C%0D%0AThe%20Cypress%20Team`
                                            );
                                        } else {
                                            window.open(
                                                `mailto:${
                                                    this.state.add
                                                }?subject=Join%20Cypress&body=${this.state.text
                                                    .split()
                                                    .join(
                                                        "%20"
                                                    )}%0D%0A%0D%0AJoin%20Cypress%20today!%0D%0A${
                                                    window.location.hostname
                                                }`,
                                                "_blank"
                                            );
                                        }
                                        // this.setState({ redirect: true });
                                    }}
                                >
                                    {L === "en" ? "Send" : "Envoyer"}
                                </button>
                                <Link to="/" class="ui button" type="submit">
                                    {L === "en" ? "Cancel" : "Annuler"}
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </DashboarWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    lang: state.lang.lang,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TellAFriend);
