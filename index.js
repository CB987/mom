const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const page = require('./views/page');
const home = require('./views/home');
const about = require('./views/about');
const contact = require('./views/contact');
const workshops = require('./views/workshops');
const cityscapes = require('./views/cityscapes');
const abstracts = require('./views/abstracts');
const landscapes = require('./views/landscapes');
const acrylics = require('./views/acrylics');
const watercolors = require('./views/watercolors');

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

// ====================================================
// Contact
// ====================================================
app.get('/contact', (req, res) => {
    const thePage = page(contact());
    res.send(thePage);
});

// ====================================================
// Workshops
// ====================================================
app.get('/workshops', (req, res) => {
    const thePage = page(workshops());
    res.send(thePage);
});

// ====================================================
// Cityscapes
// ====================================================
app.get('/cityscapes', (req, res) => {
    const thePage = page(cityscapes());
    res.send(thePage);
});

// ====================================================
// Abstracts
// ====================================================
app.get('/abstracts', (req, res) => {
    const thePage = page(abstracts());
    res.send(thePage);
});

// ====================================================
// Landscapes
// ====================================================
app.get('/landscapes', (req, res) => {
    const thePage = page(landscapes());
    res.send(thePage);
});

// ====================================================
// Acrylics
// ====================================================
app.get('/acrylics', (req, res) => {
    const thePage = page(acrylics());
    res.send(thePage);
});

// ====================================================
// Watercolors
// ====================================================
app.get('/watercolors', (req, res) => {
    const thePage = page(watercolors());
    res.send(thePage);
});