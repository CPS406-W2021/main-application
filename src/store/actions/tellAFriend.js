const sgMail = require("@sendgrid/mail");
export const sendFriendMail = (email, text) => {
    sgMail.setApiKey(
        "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"
    );
    const msg = {
        to: "farhan.mohammed@ryerson.ca", // Change to your recipient
        from: "cypress@cypress.com", // Change to your verified sender
        subject: "Sending with SendGrid is Fun",
        text: "and easy to do anywhere, even with Node.js",
        html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    sgMail
        .send(msg)
        .then(() => {
            alert("W");
        })
        .catch((error) => {
            alert("TESTING L");
            console.log(error);
        });
};
