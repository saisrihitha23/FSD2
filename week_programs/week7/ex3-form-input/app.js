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
    const name = req.body.name;
    const course = req.body.course;

    res.send(`
        <h1>Form Submitted Successfully</h1>
        <p>Name: ${name}</p>
        <p>Course: ${course}</p>
    `);
});

app.listen(3002, () => {
    console.log("Experiment 3 running at http://localhost:3002");
});