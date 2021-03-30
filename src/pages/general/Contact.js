import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";


export default class Contact extends Component {
    render() {
        
        function Header() {
            return (
                <header>
                    
                    <h1>Contact City Officials </h1>

                    <div className="header">
                        <input type="text" placeholder="Search..."></input>
                        <label for="user"> Sort By: </label>
                        <button>Ward Name</button> 
                    </div>
                </header>
        );
    }
    function Table() {
            return (
                <table className="content">
                    <thead>
                        <tr>
                            <th>WARD NAME</th>
                            <th>COUNCILLOR</th>
                            <th>EMAIL</th>
                            <th>TELEPHONE</th>
                        </tr>
                    </thead>

                    <tbody>
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
