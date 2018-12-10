const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const page = require('./views/page');
const home = require('./views/home');
const about = require('./views/about');

// ====================================================
// Serving
// ====================================================
app.listen(9000, () => {
    console.log('working');
});

// ====================================================
// Home
// ====================================================
app.get('/', (req, res) => {
    const thePage = page(home());
    res.send(thePage);
});

// ====================================================
// About Me
// ====================================================
app.get('/about', (req, res) => {
    const thePage = page(about());
    res.send(thePage);
});