import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
const FAQInfo = [
    {
        q: "What types of problems should I report to CyPress?",
        a:
            '"Cypress is committed to providing their users with an effective resource to share their concerns to improve their quality of life and protect the health of our planet. Cypress is designed to primarily receive reports with concerns and issues to environmental damage, biohazards, property damage and by-law violations that are designated in each users area code. However, we are open to hearing other concerns and innovations our user’s may suggest."',
    },
    {
        q: "How long does reported problems usually take to be resolved?",
        a:
            '"Cypress processes its reports immediately and redirects the reports to a specific queue depending on what type of problem was reported. Higher volume of reports of similar cases can often be recognized and enforce the report to take priority. Cypress has an average response time within 24hrs of the report. Prolonged response time may be a result of investigation to claims made from a report to determine whether some of these reports are legitimate."',
    },
    {
        q: "How can I directly contact city officials about my problem?",
        a:
            '"Cypress extends all of Toronto and each area code has its designated official. Please visit https://www.toronto.ca/city-government/council/members-of-council/ and find your councillor representing your region. The toronto website provides the necessary contact information for each official to address your report to."',
    },
];

const FAQInfoFr = [
    {
        q: "Quels types de problèmes dois-je signaler à CyPress?",
        a:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
    {
        q:
            "Combien de temps faut-il généralement pour résoudre les problèmes signalés?",
        a:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
    {
        q:
            "Comment puis-je contacter directement les autorités municipales à propos de mon problème?",
        a:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
];

class FAQSingle extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    render() {
        return (
            <div className="faq-item">
                <div
                    className="faq-item-header"
                    onClick={() => {
                        this.setState({ open: !this.state.open });
                    }}
                >
                    {this.props.q}
                </div>
                <div
                    className={`faq-item-body ${
                        this.state.open ? "" : "closed"
                    }`}
                >
                    {this.props.a}
                </div>
            </div>
        );
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }
    renderSlogan() {
        const L = this.props.lang;
        if (this.state.redirect) {
            return this.state.redirect;
        }
        return (
            <div className="slogan-con">
                <h1 className="main-slogan">
                    {L === "en"
                        ? "Keeping Toronto Safe"
                        : "Assurer la sécurité de Toronto"}
                </h1>
                <i className="descr-slogan">
                    {L === "en"
                        ? "The CyPress system is designed to allow you to report problems that concern you about the city. Our mission is to improve the city's public safety through the contibutions of our citizens."
                        : "Le système CyPress est conçu pour vous permettre de signaler les problèmes qui vous concernent À propos de la ville. Notre mission est d'améliorer la sécurité publique de la ville grâce au contributions de nos citoyens."}
                </i>
                <div className="slogan-btn__con">
                    <button
                        type="button"
                        className="btn-login"
                        onClick={() =>
                            this.setState({
                                redirect: <Redirect to="/login"></Redirect>,
                            })
                        }
                    >
                        {L === "en" ? "Log In" : "Connexion"}
                    </button>
                    <button
                        type="button"
                        className="btn-signup"
                        onClick={() =>
                            this.setState({
                                redirect: <Redirect to="/register"></Redirect>,
                            })
                        }
                    >
                        {L === "en" ? "Sign Up" : "S'inscrire"}
                    </button>
                </div>
            </div>
        );
    }

    renderSurvey() {
        const L = this.props.lang;
        return (
            <div>
                <p className="survey-text">
                    {L === "en"
                        ? "We take feedback from our users seriously. This survey will allow us tocontinously improve our system according to our users needs. This will take approximately 5 minutes to complete."
                        : "Nous prenons au sérieux les commentaires de nos utilisateurs. Cette enquête nous permettra d'améliorer continuellement notre système en fonction des besoins de nos utilisateurs. Cela prendra environ 5 minutes."}

                    <Link to="/survey">
                        {L === "en"
                            ? " Take Survey "
                            : " Participer à l'enquête "}
                    </Link>
                </p>
            </div>
        );
    }

    renderFAQ() {
        const L = this.props.lang;
        return (
            <div>
                <h1 className="faq-title">
                    {L === "en"
                        ? "Frequently Asked Questions (FAQ)"
                        : "Questions Fréquemment Posées (QFP)"}
                </h1>
                <div className="faq">
                    {L === "en"
                        ? FAQInfo.map(({ q, a }) => {
                              return <FAQSingle key={q} q={q} a={a} />;
                          })
                        : FAQInfoFr.map(({ q, a }) => {
                              return <FAQSingle key={q} q={q} a={a} />;
                          })}
                </div>
            </div>
        );
    }

    renderFooter() {
        return (
            <footer className="footer-con">
                <div className="footer-bottom">
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

const mapStateToProps = (state) => ({
    lang: state.lang.lang,
    redirect: state.redirect,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
