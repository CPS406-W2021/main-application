import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";

export default class Contact extends Component {
    render() {
        function Header() {
            return (
                <div className="contact">
                    <h1 className="contact-h1">Contact City Officials </h1>
                    <div className="contact-input__con">
                        <div className="contact-search__con ui input">
                            <input
                                className="contact-search "
                                type="text"
                                placeholder="Search..."
                            ></input>
                        </div>
                        <div className="contact-dropdown__con">
                            <label className="contact-label" for="user">
                                Sort By:
                            </label>
                            <div className="contact-field">
                                <div class="ui form fluid">
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
            const information = [
                {
                    name: "1Etobicoke North",
                    location: "Councillor Michael Ford",
                    email: "councillor@cypress.ca",
                    phone: "(000) 0000 - 0000",
                },
                {
                    name: "2Etobicoke North",
                    location: "Councillor Michael Ford",
                    email: "councillor@cypress.ca",
                    phone: "(000) 0000 - 0000",
                },
                {
                    name: "3Etobicoke North",
                    location: "Councillor Michael Ford",
                    email: "councillor@cypress.ca",
                    phone: "(000) 0000 - 0000",
                },
                {
                    name: "4Etobicoke North",
                    location: "Councillor Michael Ford",
                    email: "councillor@cypress.ca",
                    phone: "(000) 0000 - 0000",
                },
            ];
            return (
                <table className="content">
                    <thead className="content-header">
                        <tr>
                            <th>WARD NAME</th>
                            <th>COUNCILLOR</th>
                            <th>EMAIL</th>
                            <th>TELEPHONE</th>
                        </tr>
                    </thead>

                    <tbody className="content-body">
                        {information.map(({ name, location, email, phone }) => {
                            return (
                                <tr>
                                    <td>{name}</td>
                                    <td>{location}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                </tr>
                            );
                        })}

                        <tr>
                            <td>Etobicoke Centre</td>
                            <td>Councillor Stephen Holyday</td>
                            <td>councillor@cypress.ca</td>
                            <td>(000) 0000 - 0000</td>
                        </tr>

                        <tr>
                            <td>Etobicoke-Lakeshore</td>
                            <td>Councillor Mark Grimes.</td>
                            <td>councillor@cypress.ca</td>
                            <td>(000) 0000 - 0000</td>
                        </tr>

                        <tr>
                            <td>Parkdale-High Park</td>
                            <td>Councillor Gord Perks.</td>
                            <td>councillor@cypress.ca</td>
                            <td>(000) 0000 - 0000</td>
                        </tr>

                        <tr>
                            <td>York South-Weston</td>
                            <td>Councillor Frances Nunziata</td>
                            <td>councillor@cypress.ca</td>
                            <td>(000) 0000 - 0000</td>
                        </tr>

                        <tr>
                            <td>York Centre</td>
                            <td>Councillor James Pasternak</td>
                            <td>councillor@cypress.ca</td>
                            <td>(000) 0000 - 0000</td>
                        </tr>
                        <tr>
                            <td>York Centre</td>
                            <td>Councillor James Pasternak</td>
                            <td>councillor@cypress.ca</td>
                            <td>(000) 0000 - 0000</td>
                        </tr>
                        <tr>
                            <td>York Centre</td>
                            <td>Councillor James Pasternak</td>
                            <td>councillor@cypress.ca</td>
                            <td>(000) 0000 - 0000</td>
                        </tr>
                        <tr>
                            <td>York Centre</td>
                            <td>Councillor James Pasternak</td>
                            <td>councillor@cypress.ca</td>
                            <td>(000) 0000 - 0000</td>
                        </tr>
                        <tr>
                            <td>York Centre</td>
                            <td>Councillor James Pasternak</td>
                            <td>councillor@cypress.ca</td>
                            <td>(000) 0000 - 0000</td>
                        </tr>
                    </tbody>
                </table>
            );
        }

        return (
            <DashboarWrapper currentPage={3}>
                <div className="content-con">
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
