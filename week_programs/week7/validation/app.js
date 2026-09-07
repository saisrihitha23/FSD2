const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", {
        error: null,
        astronaut: "",
        years: ""
    });
});

app.post("/submit", (req, res) => {

    const astronaut = req.body.astronaut;
    const years = req.body.years;

    // Basic validation
    if (!astronaut || astronaut.length < 4) {
        return res.render("index", {
            error: "Astronaut name must be at least 4 characters",
            astronaut: astronaut,
            years: years
        });
    }

    if (!years || years < 2) {
        return res.render("index", {
            error: "At least 2 years of experience is required",
            astronaut: astronaut,
            years: years
        });
    }

    res.send(`
        <h1>Astronaut Registration Successful</h1>
        <p>Astronaut: ${astronaut}</p>
        <p>Experience: ${years} years</p>
    `);
});

app.listen(3003, () => {
    console.log("Astronaut Validation running at http://localhost:3003");
});