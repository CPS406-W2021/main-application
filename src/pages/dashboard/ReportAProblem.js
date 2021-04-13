import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import DashboarWrapper from "../../components/ThemeWrapper";
import { createReport } from "../../store/actions/reportActions";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import { cancelReport } from "../../store/actions/reportActions";
import blueMarker from "../../images/icons/blue.png";
import greenMarker from "../../images/icons/green.png";
import redMarker from "../../images/icons/red.png";
class ReportAProblem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkUpdates: true,
            selection: -1,
            information: "",
            Map: false,
            title: "",
        };
    }
    onSubmit = (e) => {
        const L = this.props.lang;
        e.preventDefault();
        const uid = this.props.uid;
        const { selection, information, title } = this.state;
        if (selection === -1 || information === "" || title === "") {
            alert(L === "en" ? "Please fill out all the fields" : "Veuillez remplir tous les champs");
            return;
        }
        // const selectionType = ["Maintainence", "Incident", "Other"];
        this.props.createReport({
            uid,
            selection: selection,
            information,
            name: this.props.place,
            loc: this.props.loc,
            title,
            date: new Date().toISOString(),
            votes: 0,
            username: this.props.user.name,
        });
    };
    componentDidMount() {
        const Map = ReactMapboxGl({
            accessToken:
                "pk.eyJ1IjoiZmFyaGFuaG0iLCJhIjoiY2tuMTUxYjNnMHIyODJvbzJueDJzdWJmcCJ9.EIl7ZcqlshPyJxnxyGNGhg",
            interactive: false,
        });
        this.setState({ Map: Map });
    }
    render() {
        const L = this.props.lang;
        if (!this.props.ready) {
            return <Redirect to="/portal"></Redirect>;
        }
        return (
            <DashboarWrapper currentPage={2}>
                <div className="rap-con">
                    <div className="rap-map">
                        <RenderMap
                            loc={this.props.loc}
                            Map={this.state.Map}
                            selection={this.state.selection}
                        ></RenderMap>
                    </div>
                    <div className="rap-body">
                        <h1 className="rap-h1">
                            {L === "en"
                                ? "Report a Problem"
                                : "Signaler un problème"}
                        </h1>
                        <div className="rap-sub">
                            {L === "en" ? "at" : "à"} {this.props.place}
                        </div>

                        <form class="ui form">
                            <div class="field">
                                <label>
                                    {L === "en"
                                        ? "Report Title"
                                        : "Titre du rapport"}
                                </label>
                                <div className="reports-search__con ui input">
                                    <input
                                        onChange={(e) => {
                                            e.preventDefault();
                                            this.setState({
                                                title: e.target.value,
                                            });
                                        }}
                                        val={this.state.title}
                                        className="reports-search "
                                        type="text"
                                        placeholder={ L === "en" ? "Car crash in the middle of the intersection" : "Accident de voiture au milieu de l'intersection" }
                                    ></input>
                                </div>
                            </div>
                            <div class="field">
                                <label>
                                    {L === "en"
                                        ? "Problem at Site"
                                        : "Problème sur le site"}
                                </label>
                                <div class="ui form">
                                    <div class="field">
                                        <select
                                            onChange={(e) => {
                                                this.setState({
                                                    selection: e.target.value,
                                                });
                                            }}
                                            val={this.state.selection}
                                        >
                                            <option value={-1}>
                                                {L === "en"
                                                    ? "Select an Issue"
                                                    : "Sélectionnez un problème"}
                                            </option>
                                            <option value={0}>
                                                {L === "en"
                                                    ? "Maintenance"
                                                    : "Maintenance"}
                                            </option>
                                            <option value={1}>
                                                {L === "en"
                                                    ? "Incident"
                                                    : "Incidente"}
                                            </option>
                                            <option value={2}>
                                                {L === "en" ? "Other" : "Autre"}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div
                                    class="ui checkbox"
                                    onClick={() =>
                                        this.setState({
                                            checkUpdates: !this.state
                                                .checkUpdates,
                                        })
                                    }
                                >
                                    <input
                                        type="checkbox"
                                        tabindex="0"
                                        class="hidden"
                                        checked={this.state.checkUpdates}
                                    />
                                    <label>
                                        {L === "en"
                                            ? "I want to receive updates on this report"
                                            : "Je souhaite recevoir des mises à jour sur ce rapport"}
                                    </label>
                                </div>
                            </div>
                            <div class="field">
                                <label>
                                    {L === "en"
                                        ? "Enter more information:"
                                        : "Entrez plus d'informations:"}
                                </label>
                                <textarea
                                    val={this.state.information}
                                    onChange={(e) => {
                                        this.setState({
                                            information: e.target.value,
                                        });
                                    }}
                                ></textarea>
                            </div>
                            <hr className="rap-line"></hr>
                            <div className="rap-buttons">
                                <button
                                    class="ui green button"
                                    onClick={this.onSubmit}
                                >
                                    {L === "en" ? "Submit" : "Soumettre"}
                                </button>
                                <button
                                    class="ui button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.props.cancelReport();
                                    }}
                                >
                                    {L === "en" ? "Cancel" : "Annuler"}
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
    error: state.report.error,
    uid: state.auth.uid,
    place: state.report.setupreport["name"],
    loc: [state.report.setupreport["long"], state.report.setupreport["lat"]],
    ready: state.report.ready,
    lang: state.lang.lang,
    user: state.auth.userData,
});

const mapDispatchToProps = (dispatch) => ({
    createReport: (r) => dispatch(createReport(r)),
    cancelReport: () => dispatch(cancelReport()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportAProblem);

class RenderMap extends Component {
    render() {
        const markerIcons = [blueMarker, greenMarker, redMarker];
        const selection = this.props.selection;
        if (this.props.Map) {
            let Map = this.props.Map;
            return (
                <Map
                    // eslint-disable-next-line
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        flex: 1,
                        borderRadius: 35,
                    }}
                    center={this.props.loc}
                    zoom={[17]}
                >
                    {selection >= 0 && (
                        <Marker coordinates={this.props.loc} anchor="center">
                            <img
                                src={markerIcons[selection]}
                                width="30px"
                                height="30px"
                                alt="marker"
                            />
                        </Marker>
                    )}
                </Map>
            );
        } else {
            return <div>Loading Map</div>;
        }
    }
}
