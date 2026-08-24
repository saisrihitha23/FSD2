const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

// Tell Express where the views folder is
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});