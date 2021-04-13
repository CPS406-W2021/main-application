import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { deleteReport } from "../../store/actions/reportActions";

class PastReports extends Component {
    deleteReport = (title, rid) => {
        if (window.confirm(`Are you sure you want to delete ${title}?`)) {
            this.props.deleteReport(rid);
        }
    };
    renderReports = () => {
        const L = this.props.lang;
        // const success = (
        //     <div className="ui green progress">
        //         <div className="bar"></div>
        //         <div className="label">
        //             {L === "en" ? "Successful" : "Réussi"}{" "}
        //         </div>
        //     </div>
        // );

        const newEntry = (
            <div className="ui brown progress">
                <div className="bar"></div>
                <div className="label">
                    {L === "en" ? "New entry" : "Nouvelle entrée"}{" "}
                </div>
            </div>
        );

        // const pending = (
        //     <div className="ui red progress">
        //         <div className="bar"></div>
        //         <div className="label">
        //             {L === "en" ? "Pending" : "En attente"}
        //         </div>
        //     </div>
        // );

        const status = newEntry;
        const problem = ["Maintenence", "Incident", "Other"];
        return (
            <table className="content">
                <thead className="content-header__con">
                    <tr>
                        <th>{L === "en" ? "PROBLEM" : "PROBLÈME"}</th>
                        <th>{L === "en" ? "ADDRESS" : "ADRESSE"}</th>
                        <th>{L === "en" ? "DATE CREATED" : "DATE CRÉÉE"}</th>
                        <th>{L === "en" ? "STATUS" : "STATUT"}</th>
                        <th>{L === "en" ? "ACTION" : "ACTION"}</th>
                    </tr>
                </thead>

                <tbody className="content-body__con">
                    {this.props.reports.map(
                        ({ selection, name, location, date, key, title }) => {
                            return (
                                <tr>
                                    <td>{problem[selection]}</td>
                                    <td>{name}</td>
                                    <td>
                                        {date.split("T").map((i) => (
                                            <div>{i}</div>
                                        ))}
                                    </td>
                                    <td>{status}</td>
                                    <td>
                                        {
                                            <div>
                                                {/* <a href="/" className="bell">
                                                    <i className="bell icon"></i>
                                                </a> */}
                                                <Link
                                                    to={`/report?report=${key}`}
                                                    className="edit"
                                                >
                                                    <i className="edit icon"></i>{" "}
                                                </Link>
                                                <span
                                                    className="trash"
                                                    onClick={() =>
                                                        this.deleteReport(
                                                            title,
                                                            key
                                                        )
                                                    }
                                                >
                                                    <i className="trash alternate icon"></i>
                                                </span>
                                            </div>
                                        }
                                    </td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </table>
        );
    };
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
                        </div>
                    </div>
                </div>
            );
        }

        console.log(this.props);
        return (
            <DashboarWrapper>
                <div className="content__con">
                    <div className="content-header">
                        <Header />
                    </div>
                    <div className="content-table">{this.renderReports()}</div>
                </div>
            </DashboarWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    const REPORTS = state.firestore.data["reports"]
        ? Object.keys(state.firestore.data["reports"])
              .map((k) => ({
                  key: k,
                  ...state.firestore.data["reports"][k],
              }))
              .filter(({ uid }) => uid === state.auth.uid)
        : [];

    return {
        reports: REPORTS,
        lang: state.lang.lang,
        uid: state.auth.uid,
        user: state.auth.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteReport: (rid) => dispatch(deleteReport(rid)),
    };
};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(() => {
        return [
            {
                collection: "reports",
                orderBy: ["date", "desc"],
                storeAs: "reports",
            },
        ];
    })
)(PastReports);
