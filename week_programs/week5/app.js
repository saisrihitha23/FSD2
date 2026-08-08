const express = require('express');

const app = express();

const PORT = 3000;


// HOME ROUTE
app.get('/', (req, res) => {
    res.send('Welcome to my Express Server!');
});


// ABOUT ROUTE
app.get('/about', (req, res) => {
    res.send('This server was built as a learning exercise for Express.js.');
});


// DATA (JSON) ROUTE
app.get('/api/status', (req, res) => {
    res.json({
        active: true,
        version: '1.0.0',
        message: 'The server is healthy and responding'
    });
});


// STARTING THE SERVER
app.listen(PORT, () => {
    console.log(`Success! Server is running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server.');
});