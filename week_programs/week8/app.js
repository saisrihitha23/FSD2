const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();


// i) Configure Template Engine
app.set('view engine', 'ejs');


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// ii) Maintain Sessions
app.use(session({
    secret: 'space-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));


// iv) Protect private routes
const authMiddleware = (req, res, next) => {

    if (req.session.isLoggedIn) {
        next(); // User is authenticated
    } else {
        res.redirect('/login'); // Redirect to login
    }

};


// Public Route: Login Page
app.get('/login', (req, res) => {

    res.render('login', {
        error: null
    });

});


// iii) Implement Login
app.post('/login', (req, res) => {

    const { username, password } = req.body;


    // Basic hardcoded check
    // Username: astronaut
    // Password: space123

    if (username === 'astronaut' && password === 'space123') {

        // Maintain login state
        req.session.isLoggedIn = true;
        req.session.username = username;


        // Create a custom cookie
        res.cookie(
            'lastLogin',
            new Date().toLocaleTimeString()
        );


        res.redirect('/dashboard');

    } else {

        res.render('login', {
            error: 'Invalid username or password!'
        });

    }

});


// iv) Private Route: Dashboard
app.get('/dashboard', authMiddleware, (req, res) => {

    // Read cookie
    const lastLogin = req.cookies.lastLogin || 'First Login';

    // Access session data
    const username = req.session.username;


    res.render('dashboard', {
        user: username,
        lastLogin: lastLogin
    });

});


// iii) Implement Logout
app.get('/logout', (req, res) => {

    req.session.destroy(() => {

        // Clear session cookie
        res.clearCookie('connect.sid');

        // Clear custom cookie
        res.clearCookie('lastLogin');

        res.redirect('/login');

    });

});


// Start Server
app.listen(3000, () => {
    console.log('Space Server running at http://localhost:3000/login');
});