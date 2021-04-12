import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import { connect } from "react-redux";
import {
    resetPassword,
    deleteAccount,
    updateAccount,
} from "../../store/actions/authActions";
class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            address: "",
        };
    }
    render() {
        return (
            <DashboarWrapper currentPage={2}>
                <div className="pro-con">
                    <div className="pro-nav">
                        <h1>Account Setting</h1>
                    </div>
                    <div className="pro-body">
                        <div>
                            <h2>Edit Account</h2>
                            <div className="pro-sub">
                                <div>Change your profile information.</div>
                                <button
                                    class="ui green button"
                                    onClick={() => {
                                        this.props.updateInfo({
                                            email: this.state.email,
                                            name: this.state.name,
                                            address: this.state.address,
                                        });
                                        this.setState({
                                            email: "",
                                            name: "",
                                            address: "",
                                        });
                                    }}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                        <div class="ui divider"></div>
                        <div className="profile-form ui small form">
                            <div class="two fields">
                                <div class="field">
                                    <label>Name</label>
                                    <input
                                        value={this.state.name}
                                        onChange={(e) => {
                                            this.setState({
                                                name: e.target.value,
                                            });
                                        }}
                                        type="text"
                                        id="name"
                                        name="name"
                                    ></input>
                                </div>

                                <div class="field">
                                    <label>Email</label>
                                    <input
                                        value={this.state.email}
                                        onChange={(e) => {
                                            this.setState({
                                                email: e.target.value,
                                            });
                                        }}
                                        type="text"
                                        id="email"
                                        name="email"
                                    ></input>
                                </div>
                            </div>
                            <div class="field">
                                <label>Address</label>
                                <input
                                    value={this.state.address}
                                    onChange={(e) => {
                                        this.setState({
                                            address: e.target.value,
                                        });
                                    }}
                                    type="text"
                                    id="phone"
                                    name="phone"
                                ></input>
                            </div>
                        </div>
                        <div class="ui divider"></div>
                        <div>
                            <h2>Reset Password</h2>
                            <div className="pro-sub">
                                <div>
                                    The link to reset your password will be sent
                                    to your email
                                </div>
                                <button
                                    class="ui red button"
                                    onClick={this.props.resetPassword}
                                >
                                    Reset Password
                                </button>
                            </div>
                        </div>
                        <div>
                            <h2>Delete Account</h2>
                            <div className="pro-sub">
                                <div>This action cannot be undone.</div>
                                <button
                                    class="ui red button"
                                    onClick={this.props.deleteAccount}
                                >
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboarWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    lang: state.lang.lang,
});

const mapDispatchToProps = (dispatch) => ({
    deleteAccount: () => dispatch(deleteAccount()),
    resetPassword: () => dispatch(resetPassword()),
    updateInfo: (info) => dispatch(updateAccount(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
