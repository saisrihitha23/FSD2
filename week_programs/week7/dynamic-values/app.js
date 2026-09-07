const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {

    const astronaut = {
        name: "Srihitha",
        mission: "Mars Exploration",
        experience: 5
    };

    res.render("index", { astronaut: astronaut });
});

app.listen(3001, () => {
    console.log("Astronaut Server running at http://localhost:3001");
});