const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", {
        error: null,
        username: "",
        age: ""
    });
});

app.post("/submit", (req, res) => {

    const username = req.body.username;
    const age = req.body.age;

    // Basic validation
    if (!username || username.length < 3) {
        return res.render("index", {
            error: "Username must be at least 3 characters",
            username: username,
            age: age
        });
    }

    if (!age || age < 18) {
        return res.render("index", {
            error: "Age must be 18 or above",
            username: username,
            age: age
        });
    }

    res.send(`
        <h1>Registration Successful</h1>
        <p>Username: ${username}</p>
        <p>Age: ${age}</p>
    `);
});

app.listen(3003, () => {
    console.log("Experiment 4 running at http://localhost:3003");
});