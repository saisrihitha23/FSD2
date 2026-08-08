const express = require('express');

const app = express();

const PORT = 3000;


// 1. ROUTE PARAMETERS
// Example URL: http://localhost:3000/user/25

app.get('/user/:id', (req, res) => {

    // Express stores the value after /user/ in req.params
    const userId = req.params.id;

    res.send(`
        <h1>User Profile</h1>
        <p>You are viewing the profile for User ID:
        <strong>${userId}</strong></p>
    `);
});


// 2. MULTIPLE ROUTE PARAMETERS

app.get('/flights/:from/:to', (req, res) => {

    // Get both parameters
    const { from, to } = req.params;

    res.send(`
        Searching for flights departing from
        <b>${from}</b> arriving at <b>${to}</b>.
    `);
});


// 3. QUERY PARAMETERS

app.get('/search', (req, res) => {

    // Access query parameters using req.query
    const category = req.query.category;
    const sort = req.query.sort;

    res.json({
        message: "Search Results",
        filteringBy: category || "None",
        sortingBy: sort || "Default"
    });
});


// START SERVER

app.listen(PORT, () => {
    console.log(`Dynamic server running at http://localhost:${PORT}`);
});