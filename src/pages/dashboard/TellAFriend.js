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
                                        placeholder="imafriend@ryerson.ca"
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
                                        alert(
                                            L === "en"
                                                ? "Thank you! We have sent your friend the invite to join Cypress!"
                                                : "Merci! Nous avons envoyé à votre ami l'invitation à rejoindre Cypress! "
                                        );
                                        this.setState({ redirect: true });
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
