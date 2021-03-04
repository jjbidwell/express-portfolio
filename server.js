const express = require("express");
const path = require("path");
require("dotenv").config();
const nodeMailer = require("nodemailer");


const app = express();
const port = process.env.PORT || 3001;

const transporter = nodeMailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465,
    service: 'yahoo',
    secure: false,
    auth: {
        user: process.env.YAHOO_EMAIL,
        pass: process.env.YAHOO_PASSWORD
    },
    debug: false,
    logger: true
})

const mailOptions = {
    from: process.env.YAHOO_EMAIL,
    to: process.env.GMAIL_EMAIL,
    subject: "TEST",
    text: "Bottom test"
}

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log(err)
    } else {
        console.log(info)
    }
})

const root = path.join(__dirname, "public")

app.use(express.static(root));

app.get("/", (req, res) => {
    res.sendFile("about.html", { root: root });
})

app.get("/skills", (req, res) => {
    res.sendFile("skills.html", { root: root });
})

app.get("/portfolio", (req, res) => {
    res.sendFile("portfolio.html", { root: root });
})

app.get("/contact", (req, res) => {
    res.sendFile("contact.html", { root: root });
})

app.listen(port, () => console.log(`Listening on port ${port}.`))