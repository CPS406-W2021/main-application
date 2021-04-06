import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../images/header.png';

export default class SingePageWrapper extends Component {
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
                    <div className="active">English (En)</div>
                    <div>Français (Fr)</div>
                </div>
            </div>
        );
    }
}
