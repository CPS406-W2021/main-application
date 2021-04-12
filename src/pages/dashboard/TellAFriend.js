import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import { connect } from "react-redux";

class TellAFriend extends Component {
    render() {
        const L = this.props.lang;
        return (
            <DashboarWrapper>
                <div className="taf-con">
                    <div className="taf-map"></div>
                    <div className="taf-body">
                        <h1 className="taf-h1">
                            { L === "en" ? "Tell A Friend" : "Dire à un Ami" }
                        </h1>
                        <div className="taf-sub">
                            { L === "en"
                            ? "Wish to spread the word about the Cypress? Send a message to a friend!"
                            : "Souhaitez-vous faire passer le mot sur Cypress? Envoyez un message à un ami!"
                            }
                        </div>
                        <hr className="taf-line"></hr>
                        
                        <form class="ui form">
                            <div class="field">
                                <label>
                                    { L === "en" ? "Recipient's Email:" : "E-mail du destinataire:" }
                                </label>
                                <div className="reports-search__con ui input">
                                    <input
                                        className="reports-search "
                                        type="text"
                                        placeholder="imafriend@ryerson.ca"
                                    ></input>
                                </div>
                            </div>
                            <div class="field">
                                <label>
                                    { L === "en"
                                    ? "Add a personal message:"
                                    : "Ajoutez un message personnel:"
                                    }
                                </label>
                                <textarea></textarea>
                            </div>
                            <hr className="taf-line"></hr>
                            <div className="taf-buttons">
                                <button class="ui green button">
                                    { L === "en" ? "Send" : "Envoyer" }
                                </button>
                                <button class="ui button" type="submit">
                                    { L === "en" ? "Cancel" : "Annuler" }
                                </button>
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TellAFriend);

