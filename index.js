const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const page = require('./views/page');

// ====================================================
// Serving
// ====================================================
app.listen(9000, () => {
    console.log('working');
});

// ====================================================
// Home Page
// ====================================================
app.get('/', (req, res) => {
    const thePage = page();
    res.send(thePage);
});