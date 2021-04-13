import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
const FAQInfo = [
    {
        q: "What types of problems should I report to CyPress?",
        a:
            "Cypress is committed to providing their users with an effective resource to share their concerns to improve their quality of life and protect the health of our planet. Cypress is designed to primarily receive reports with concerns and issues to environmental damage, biohazards, property damage and by-law violations that are designated in each users area code. However, we are open to hearing other concerns and innovations our user’s may suggest.",
    },
    {
        q: "How long does reported problems usually take to be resolved?",
        a:
            "Cypress processes its reports immediately and redirects the reports to a specific queue depending on what type of problem was reported. Higher volume of reports of similar cases can often be recognized and enforce the report to take priority. Cypress has an average response time within 24hrs of the report. Prolonged response time may be a result of investigation to claims made from a report to determine whether some of these reports are legitimate.",
    },
    {
        q: "How can I directly contact city officials about my problem?",
        a:
            "Cypress extends all of Toronto and each area code has its designated official. Please visit the contact page and find your councillor representing your region. The toronto website provides the necessary contact information for each official to address your report to.",
    },
];

const FAQInfoFr = [
    {
        q: "Quels types de problèmes dois-je signaler à CyPress?",
        a:
            "Cypress s'engage à fournir à ses utilisateurs une ressource efficace pour partager leurs préoccupations pour améliorer leur qualité de vie et protéger la santé de notre planète. Cypress est principalement conçu pour recevoir des rapports sur les préoccupations et les problèmes liés aux dommages environnementaux, aux risques biologiques, aux dommages matériels et aux violations des règlements qui sont indiqués dans chaque indicatif régional des utilisateurs. Cependant, nous sommes prêts à entendre d’autres préoccupations et innovations que nos utilisateurs pourraient suggérer.",
    },
    {
        q:
            "Combien de temps faut-il généralement pour résoudre les problèmes signalés?",
        a:
            "Cypress traite ses rapports immédiatement et les redirige vers une file d'attente spécifique en fonction du type de problème signalé. Un volume plus élevé de rapports de cas similaires peut souvent être reconnu et faire en sorte que le rapport soit prioritaire. Cypress a un temps de réponse moyen dans les 24 heures suivant le rapport. Un temps de réponse prolongé peut résulter d'une enquête sur les réclamations faites à partir d'un rapport pour déterminer si certains de ces rapports sont légitimes.",
    },
    {
        q:
            "Comment puis-je contacter directement les autorités municipales à propos de mon problème?",
        a:
            "Cypress étend tout Toronto et chaque indicatif régional a son représentant désigné. Veuillez visiter la page de contact et trouvez votre conseiller représentant votre région. Le site Web de Toronto fournit les coordonnées nécessaires pour que chaque fonctionnaire adresse votre rapport.",
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
