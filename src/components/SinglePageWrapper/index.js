import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Image from '../../images/header.png';
import {
    changeLangtoEng,
    changeLangtoFr,
} from "../../store/actions/langActions";

class SingePageWrapper extends Component {
    render() {
        return (
            <div className="auth-con">
                <div className="auth-bg"></div>
                <Link to="/" className={`auth-header active`}>
                    <div className="auth-header__title">
                        <div className="auth-header__titleT">
                            <img src={Image} alt="Toronto Logo" />
                            <div>Cypress</div>
                        </div>
                    </div>
                </Link>
                <br></br>
                <br></br>

                <div className={`auth-con__body active`}>{this.props.children}</div>
                <div className="auth-con__footer">
                    <div
                        className={this.props.lang === "en" && "active"}
                        onClick={this.props.changeLangtoEng}
                    >
                        English (En)
                    </div>
                    <div
                        className={this.props.lang === "fr" && "active"}
                        onClick={this.props.changeLangtoFr}
                    >
                        Français (Fr)
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    lang: state.lang.lang,
});

const mapDispatchToProps = (dispatch) => {
    return {
        changeLangtoEng: () => dispatch(changeLangtoEng()),
        changeLangtoFr: () => dispatch(changeLangtoFr()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingePageWrapper);

