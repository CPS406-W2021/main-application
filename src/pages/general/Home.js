import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";

function Slogan() {
    return (
        <section>
            <h1>Keeping Toronto Safe</h1>
            <i>"Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod <br></br>
            adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.”</i>
        </section>
    );
}

function Survey() {
    return (
        <section>
            <p>
                Something about taking feedback into consideration,
                blahblahblahblah.<br>
                </br>Take our survey so we can blahblahblah :D.
                <a href="/survey">Take Survey</a>
            </p>
        </section>
    );
}

function FAQ() {
    return (
        <section>
            <h1>Frequently Asked Questions (FAQ)</h1>
            <h3>Question 1</h3>
            <p>Answer 1</p>
            <h3>Question 2</h3>
            <p>Answer 2</p>
            <h3>Question 3</h3>
            <p>Answer 3</p>
        </section>
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
