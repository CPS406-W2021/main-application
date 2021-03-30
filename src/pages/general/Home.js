import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import Image from "../../images/slogan.png";

function Slogan() {
    return (
        <section>
            <div class="slogan-container">
                <img src={Image} alt="Toronto Skyline"></img>
                <h1 class="main-slogan">Keeping Toronto Safe</h1>
                <i class="descr-slogan">"Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod <br></br> tempor incididunt ut labore et dolore magna aliqua.”</i>
                <div>
                    <a href="/login"><button type="button" class="btn-login">Log In</button></a>
                    <a href="/register"><button type="button" class="btn-signup">Sign Up</button></a>
                </div>
            </div>
        </section>
    );
}

function Survey() {
    return (
        <div>
            <p class="survey-text">
                Something about taking feedback into consideration,
                blahblahblahblah.<br>
                </br>Take our survey so we can blahblahblah :D.
                <a href="/survey">Take Survey</a>
            </p>
        </div>
    );
}

function FAQ() {
    return (
        <div>
            <h1 class="faq-title">Frequently Asked Questions (FAQ)</h1>
            <div class="faq">
                <div class="faq-item">
                    <div class="faq-item-header">
                        This is question 1.
                    </div>
                    <div class="faq-item-body">
                        <div class="faq-item-body-content">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </div>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-header">
                        This is question 2.
                    </div>
                    <div class="faq-item-body">
                        <div class="faq-item-body-content">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </div>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-header">
                        This is question 3.
                    </div>
                    <div class="faq-item-body">
                        <div class="faq-item-body-content">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer>
            <div class="footer-content">
                <ul class="socials">
                    <li><a href="#"><p>Facebook</p></a></li>
                    <li><a href="#"><p>Twitter</p></a></li>
                    <li><a href="#"><p>Instagram</p></a></li>
                </ul>
            </div>
            <div class="footer-bottom">
                <h3>CyPress ©️ | CPS406 W2021</h3>
            </div>
        </footer>
    );
}

export default class Home extends Component {
    render() {
        return (
            <DashboarWrapper clearbg={true}>
                <Slogan />
                <Survey />
                <FAQ />
                <Footer />
            </DashboarWrapper>
        );
    }
}
