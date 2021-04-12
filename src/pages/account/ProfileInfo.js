import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import { connect } from "react-redux";
import { resetPassword, deleteAccount } from "../../store/actions/authActions";
class Settings extends Component {
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
                                <button class="ui green button">
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
                                        type="text"
                                        id="name"
                                        name="name"
                                    ></input>
                                </div>

                                <div class="field">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                    ></input>
                                </div>
                            </div>
                            <div class="field">
                                <label>Phone Number</label>
                                <input
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
