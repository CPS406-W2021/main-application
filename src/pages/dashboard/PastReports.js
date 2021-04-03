import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";

export default class PastReports extends Component {
    render() {
        function Header() {
            return (
                <div className="reports">
                    <h1 className="reports-h1">My Past Reports </h1>
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
                                    Select Period:
                                </label>
                                <div className="reports-Period">
                                    <div className="ui form fluid">
                                        <div>
                                            <select>
                                                <option value="-1">
                                                        5 Days
                                                </option>
                                                <option value="0">
                                                        10 Days
                                                </option>
                                                <option value="1">30 Days</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            <label className="reports-Sort" for="user">
                                Sort By:
                            </label>
                            <div className="reports-By">
                                <div className="ui form fluid">
                                    <div>
                                        <select>
                                            <option value="-1">
                                                Ward Name
                                            </option>
                                            <option value="0">
                                                Councillor
                                            </option>
                                            <option value="1">Female</option>
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
                                <div className="label">Successful</div>
                            </div>]

            const newEntry = [<div className="ui brown progress">
                                <div className="bar"></div>
                                <div className="label">New Entry</div>
                            </div>]

            const pending = [<div className="ui red progress">
                                <div className="bar"></div>
                                <div className="label">Pending</div>
                            </div>]

            const information = [
                {
                    name: "Potholes",
                    location: "123 Street Ave.",
                    date: "MM/DD/YYY",
                    status: success
                },
                {
                    name: "Eroded Streets",
                    location: "456 Road Rd.",
                    date: "MM/DD/YYY",
                    status: newEntry
                },
                {
                    name: "Garbage",
                    location: "789 Lorem Lp.",
                    date: "MM/DD/YYY",
                    status: pending
                },
                {
                    name: "Utiltiy Failures",
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
                    name: "Garbage",
                    location: "789 Lorem Lp.",
                    date: "MM/DD/YYY",
                    status: pending
                },
                {
                    name: "Garbage",
                    location: "789 Lorem Lp.",
                    date: "MM/DD/YYY",
                    status: pending
                },
                
            ];
            return (
                <table className="content">
                    <thead className="content-header__con">
                        <tr>
                            <th>PROBLEM</th>
                            <th>ADDRESS</th>
                            <th>DATE CREATED</th>
                            <th>STATUS</th>
                            <th>ACTION</th>
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
