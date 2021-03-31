import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";


export default class Contact extends Component {
    render() {

        function Header() {
            return (
                <div className= "contact">
                    <h1 className="contact-h1">Contact City Officials </h1>
                    <input className="contact-search" type="text" placeholder="Search..."></input>
                    <label className="contact-label" for="user"> Sort By: </label>
                    <div className="contact-field">
                        <div class="ui form">
                            <div class="contact-field">
                                <select>
                                    <option value="-1">
                                        Ward Name
                                    </option>
                                    <option value="1">Councillor</option>
                                </select>
                            </div>
                        </div>
                    </div>
                   
                </div>
        );
    }
    function Table() {
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
                        <tr>
                            <td>Etobicoke North</td>
                            <td>Councillor Michael Ford</td>
                            <td>councillor@cypress.ca</td>
                            <td>(000) 0000 - 0000</td>
                        </tr>

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
                    </tbody>
                </table>
            );
    }
    
    return (
        <DashboarWrapper currentPage={3}>
            <Header />
            <Table />
        </DashboarWrapper>
        );
    }
}
