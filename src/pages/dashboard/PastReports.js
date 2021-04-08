import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import { connect } from "react-redux";

class PastReports extends Component {
    render() {
        const L = this.props.lang;
        function Header() {
            return (
                <div className="reports">
                    <h1 className="reports-h1">
                        {L === "en"
                            ? "My Past Reports"
                            : "Mes rapports antérieurs"}
                        </h1>
                    <div className="reports-input__con">
                        <div className="reports-search__con ui input">
                            <input
                                className="reports-search "
                                type="text"
                                placeholder="Search..."
                            ></input>
                        </div>
                        <div className="reports-dropdown__con">
                            <label className="reports-Select" for="user">
                                {L === "en"
                                    ? "Select Period"
                                    : "Sélectionnez la période"}
                                </label>
                                <div className="reports-Period">
                                    <div className="ui form fluid">
                                        <div>
                                            <select>
                                                <option value="-1">
                                                    {L === "en"
                                                        ? "5 days"
                                                        : "5 jours"}
                                                </option>
                                                <option value="0">
                                                    {L === "en"
                                                        ? "10 days"
                                                        : "10 jours"}
                                                </option>
                                                <option value="1">
                                                    {L === "en"
                                                        ? "30 days"
                                                        : "30 jours"}           
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            <label className="reports-Sort" for="user">
                                {L === "en"
                                    ? "Sort By"
                                    : "Trier par"}
                            </label>
                            <div className="reports-By">
                                <div className="ui form fluid">
                                    <div>
                                        <select>
                                            <option value="-1">
                                                {L === "en"
                                                    ? "Ward Name"
                                                    : "Nom du quartier"}  
                                            </option>
                                            <option value="0">
                                                {L === "en"
                                                    ? "Councillor"
                                                    : "Conseillère/Conseiller"}   
                                            </option>
                                            <option value="1">
                                                {L === "en"
                                                    ? "Female"
                                                    : "Femelle"}   
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        function Table() {
            const success = [<div className="ui green progress">
                                <div className="bar"></div>
                                <div className="label">
                                    {L === "en"
                                        ? "Successful"
                                        : "Réussi"} </div>
                            </div>]

            const newEntry = [<div className="ui brown progress">
                                <div className="bar"></div>
                                <div className="label">
                                    {L === "en"
                                        ? "New entry"
                                        : "Nouvelle entrée"} </div>
                            </div>]

            const pending = [<div className="ui red progress">
                                <div className="bar"></div>
                                <div className="label">
                                {L === "en"
                                    ? "Pending"
                                    : "En attente"}</div>
                            </div>]

            const information = [
                {
                    name:  L === "en"
                    ? "Potholes"
                    : "Nids-de-poule",
                    location: "123 Street Ave.",
                    date: "MM/DD/YYY",
                    status: success
                },
                {
                    name: L === "en"
                    ? "Eroded Streets"
                    : "Rues érodées",
                    location: "456 Road Rd.",
                    date: "MM/DD/YYY",
                    status: newEntry
                },
                {
                    name: L === "en"
                    ? "Garbage"
                    : "Des ordures",
                    location: "789 Lorem Lp.",
                    date: "MM/DD/YYY",
                    status: pending
                },
                {
                    name: L === "en"
                    ? "Utility Failures"
                    : "Pannes de l'utilitaire",
                    location: "102 Jarvis St.",
                    date: "MM/DD/YYY",
                    status: success,
                },
                {
                    name: "Ralph Liton",
                    location: "789 Lorem Lp.",
                    date: "MM/DD/YYY",
                    status: success
                },
                {
                    name: "Ralph Liton",
                    location: "123 Street Ave.",
                    date: "MM/DD/YYY",
                    status: success
                },
                {
                    name: L === "en"
                    ? "Garbage"
                    : "Des ordures",
                    location: "789 Lorem Lp.",
                    date: "MM/DD/YYY",
                    status: pending
                },
                {
                    name: L === "en"
                    ? "Garbage"
                    : "Des ordures",
                    location: "789 Lorem Lp.",
                    date: "MM/DD/YYY",
                    status: pending
                },
                
            ];
            return (
                <table className="content">
                    <thead className="content-header__con">
                        <tr>
                            <th>
                            {L === "en"
                                ? "PROBLEM"
                                : "PROBLÈME"}</th>
                            <th>
                            {L === "en"
                                ? "ADDRESS"
                                : "ADRESSE"}</th>
                            <th>
                            {L === "en"
                                ? "DATE CREATED"
                                : "DATE CRÉÉE"}</th>
                            <th>
                            {L === "en"
                                ? "STATUS"
                                : "STATUT"}</th>
                            <th>
                            {L === "en"
                                ? "ACTION"
                                : "ACTION"}</th>
                        </tr>
                    </thead>

                    <tbody className="content-body__con">
                        {information.map(({ name, location, date, status }) => {
                            return (
                                <tr>
                                    <td>{name}</td>
                                    <td>{location}</td>
                                    <td>{date}</td>
                                    <td>{status}</td>
                                    <td>{
                                        <div>
                                            <a href="#" className="bell"><i className="bell icon"></i></a>
                                            <a href="#" className="edit"><i className="edit icon"></i> </a>
                                            <a href="#" className="trash"><i className="trash alternate icon"></i></a>
                                        </div>}</td>
                                </tr>
                            );
                        })}
                        
                    </tbody>
                </table>
            );
        }
        return (
            <DashboarWrapper >
                <div className="content__con">
                    <div className="content-header">
                        <Header />
                    </div>
                    <div className="content-table">
                        <Table />
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

export default connect(mapStateToProps, mapDispatchToProps)(PastReports);