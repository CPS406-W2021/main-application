import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";

const FAQInfo = [
    {
        q: "What types of problems should I report to CyPress?",
        a: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
    {
        q: "How long does reported problems usually take to be resolved?",
        a: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
    {
        q: "How can I directly contact city officials about my problem?",
        a: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
];

class FAQSingle extends Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
    }
    render() {
        return (
            <div class="faq-item">
                <div class="faq-item-header"
                    onClick={() => {
                        this.setState({ open: !this.state.open });
                    }}
                >
                    {this.props.q}
                </div>
                <div class={`faq-item-body ${this.state.open ? "" : "closed"}`}>
                    {this.props.a}
                </div>
            </div>
        );
    }
}

export default class Home extends Component {
    renderSlogan() {
        return (
            <div class="slogan-con">
                <h1 class="main-slogan">Keeping Toronto Safe</h1>
                <i class="descr-slogan">
                    The CyPress system is designed to allow you to report problems
                    that concern <br></br>you about the city. Our mission is to improve
                    the city's public safety <br></br>through the contibutions of our citizens.
                </i>
                <div>
                    <a href="/login">
                        <button type="button" class="btn-login">
                            Log In
                        </button>
                    </a>
                    <a href="/register">
                        <button type="button" class="btn-signup">
                            Sign Up
                        </button>
                    </a>
                </div>
            </div>
        );
    }

    renderSurvey() {
        return (
            <div>
                <p class="survey-text">
                    We take feedback from our users seriously. This survey
                    will allow us
                    <br></br>
                    to continously improve our system according
                    to our users needs.
                    <br></br>
                    This will take approximately 5 minutes to complete.
                    <a href="/survey"> Take Survey </a>
                </p>
            </div>
        );
    }

    renderFAQ() {
        return (
            <div>
                <h1 class="faq-title">Frequently Asked Questions (FAQ)</h1>
                <div class="faq">
                    {FAQInfo.map(({ q, a }) => {
                        return <FAQSingle q={q} a={a} />;
                    })}
                </div>
            </div>
        );
    }

    renderFooter() {
        return (
            <footer className="footer-con">
                <div class="footer-bottom">
                    <h3>CyPress ©️ | CPS406 W2021</h3>
                </div>
            </footer>
        );
    }

    render() {
        return (
            <DashboarWrapper clearbg={true}>
                {this.renderSlogan()}
                {this.renderSurvey()}
                {this.renderFAQ()}
                {this.renderFooter()}
            </DashboarWrapper>
        );
    }
}
