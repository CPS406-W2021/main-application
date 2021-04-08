import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
const Request = [
    {
        q: <i class="info circle icon"></i>,
        a:<form class="ui form"> <div class="field"><label>Request received.</label></div></form>
    },
];
const Approved =[ 
    {
        q: <i class="info circle icon"></i>,
        a:<form class="ui form"> <div class="field"><label>Request Approved.</label></div></form>
    },
];
const Update1 =[ 
    {
        q: <i class="info circle icon"></i>,
        a: <form class="ui form"> <div class="field"><label>Update 1 : City of Toronto is taking action to clear the fallen tree.</label></div></form>,
    },
];
const Update2 =[ 
    {
        q: <i class="info circle icon"></i>,
        a:<form class="ui form"> <div class="field"><label>Update 2 : Unexpected Problems causing delay.</label></div></form>,
    },
];
const Resolved = [
    {
        q: <i class="info circle icon"></i>,
        a:<form class="ui form"> <div class="field"><label>Resolved : Road has been cleared.</label></div></form>
    },
];

class Updates extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    render() {
        return (
            <div class="update-item">
                <div
                    class="update-item-header"
                    onClick={() => {
                        this.setState({ open: !this.state.open });
                    }}
                >
                    {this.props.q}
                </div>
                <div class={`update-item-body ${this.state.open ? "" : "closed"}`}>
                    {this.props.a}
                </div>
            </div>
        );
    }
}
export default class ViewReports extends Component {
    render() {
        return (
            <DashboarWrapper>
                <div className="view-con">
                    <div className="view-map"></div>
                    <div className="view-body">
                        <h1 className="view-h1">Tree Collapse</h1>
                        <div className="view-sub"> <span class="address"> at 123 St. Street St. Toronto, ON. Canada</span></div>
                        <div className="view-progress">    
                            <ul>
                                <li> 
                                    <i className="check circle outline icon"></i> <p>Request</p>
                                    <div class="update">
                                        {Request.map(({ q, a }) => {
                                            return <Updates q={q} a={a} />;
                                        })}
                                    </div>
                                 </li>
                                <li>
                                    <i className="check circle outline icon"></i><p>Approved</p> 
                                    <div class="update">
                                        {Approved.map(({ q, a }) => {
                                            return <Updates q={q} a={a} />;
                                        })}
                                    </div>
                                </li>
                                <li> 
                                    <i class="fas fa-exclamation-circle"></i><p> Update 1</p> 
                                    <div class="update">
                                        {Update1.map(({ q, a }) => {
                                            return <Updates q={q} a={a} />;
                                        })}
                                    </div>
                                </li>
                                <li> 
                                    <i class="fas fa-exclamation-circle"></i> <p> Update 2</p> 
                                    <div class="update">
                                        {Update2.map(({ q, a }) => {
                                            return <Updates q={q} a={a} />;
                                        })}
                                    </div>
                                </li>
                                <li> 
                                <i className="check circle outline icon"></i><p>Resolved</p>
                                <div class="update">
                                        {Resolved.map(({ q, a }) => {
                                            return <Updates q={q} a={a} />;
                                        })}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <hr className="view-line"></hr>
                        <div className="view-submit">
                            <form className="ui form">
                                <div className="field">
                                    <label>Submitted By:</label>
                                    <i className="user icon"></i>
                                    <label className="name">Elliot</label>
                                </div>
                            </form>
                        </div>
                        <div className="view-descr">
                            <form className="ui form">
                                <div className="field">
                                    <label className="descr">Description:</label>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q
                                        uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                    <hr className="view-line"></hr>
                                    <div className="view-buttons">
                                        <button className="ui button" type="cancel">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </DashboarWrapper>
        );
    }
}