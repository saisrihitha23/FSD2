const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// To read form data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/submit", (req, res) => {
    const astronaut = req.body.astronaut;
    const mission = req.body.mission;

    res.send(`
        <h1>Mission Registration Successful</h1>
        <p>Astronaut: ${astronaut}</p>
        <p>Mission: ${mission}</p>
    `);
});

app.listen(3002, () => {
    console.log("Space Form running at http://localhost:3002");
});