import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import Image from "../../images/skyline.png";

function Slogan() {
    return (
        <section class="slogan-container">
            <img src={Image} alt="Toronto Skyline"></img>
            <h1 class="main-slogan">Keeping Toronto Safe</h1>
            <i class="descr-slogan">"Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod <br></br> tempor incididunt ut labore et dolore magna aliqua.”</i>
            <div>
                <a href="/login"><button type="button" class="btn-login">Log In</button></a>
                <a href="/register"><button type="button" class="btn-signup">Sign Up</button></a>
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
            <h1>Frequently Asked Questions (FAQ)</h1>
            <h3>Question 1</h3>
            <p>Answer 1</p>
            <h3>Question 2</h3>
            <p>Answer 2</p>
            <h3>Question 3</h3>
            <p>Answer 3</p>
        </div>
    );
}

function Footer() {
    return (
        <footer>
            <p>Insta, Twitter, Facebook</p>
            <p>CyPress ©️ | CPS406 W2021</p>
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
