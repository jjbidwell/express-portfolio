const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

const root = path.join(__dirname, "public")

app.use(express.static(root));

app.get("/", (req, res) => {
    res.sendFile("about.html", {root : root});
})

app.get("/skills", (req, res) => {
    res.sendFile("skills.html", {root : root});
})

app.get("/portfolio", (req, res) => {
    res.sendFile("portfolio.html", {root : root});
})

app.get("/contact", (req, res) => {
    res.sendFile("contact.html", {root : root});
})

app.listen(port, () => console.log(`Listening on port ${port}.`))