import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import { connect } from "react-redux";
{/* <h1 className="main-slogan">
{L === "en"
    ? "Keeping Toronto Safe"
    : "Assurer la sécurité de Toronto"}
</h1> */}

class ReportAProblem extends Component {
    render() {
        const L = this.props.lang;
        return (
            <DashboarWrapper currentPage={2}>
                <div className="rap-con">
                    <div className="rap-map"></div>
                    <div className="rap-body">
                        <h1 className="rap-h1">
                            { L === "en"
                                ? "Report a Problem"
                                : "Signaler un problème" }
                        </h1>
                        
                        <div className="rap-sub">
                            { L === "en"
                                ? "at 123 St. Street"
                                : "au 123 St. Street St" }
                            </div>
                        <form class="ui form">
                            <div class="field">
                                <label>
                                    { L === "en"
                                        ? "Problem at Site"
                                        : "Problème sur le site" }
                                </label>
                                <div class="ui form">
                                    <div class="field">
                                        <select>
                                            <option value="-1">
                                                { L === "en"
                                                    ? "Select an Issue"
                                                    : "Sélectionnez un problème" }
                                            </option>
                                            <option value="1">
                                                { L === "en"
                                                    ? "Pothole"
                                                    : "Nid de poule" }
                                            </option>
                                            <option value="0">
                                                { L === "en"
                                                    ? "Tree"
                                                    : "Arbre" }
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui checkbox">
                                    <input
                                        type="checkbox"
                                        tabindex="0"
                                        class="hidden"
                                    />
                                    <label>
                                        { L === "en"
                                            ? "I want to receive updates on this report"
                                            : "Je souhaite recevoir des mises à jour sur ce rapport" }
                                    </label>
                                </div>
                            </div>
                            <div class="field">
                                <label>
                                    { L === "en"
                                        ? "Enter more information"
                                        : "Entrez plus d'informations" }
                                </label>
                                <textarea></textarea>
                            </div>
                            <hr className="rap-line"></hr>
                            <div className="rap-buttons">
                                <button class="ui green button">
                                    { L === "en"
                                        ? "Submit"
                                        : "Nous faire parvenir" }
                                </button>
                                <button class="ui button" type="submit">
                                    { L === "en"
                                        ? "Cancel"
                                        : "Annuler" }
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

export default connect(mapStateToProps, mapDispatchToProps)(ReportAProblem);