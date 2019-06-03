
const express = require('express');



const bodyParser = require('body-parser');
const cors = require('cors');

// Set up the express app
const app = express();
app.use(bodyParser.urlencoded({ limit: '2gb', extended: true }));
app.use(bodyParser.json({ limit: '2gb', extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

global.models = require('../models');

// Require our routes into the application.
app.use(require('../routes'));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.all('/*', (req, res) => {
    return res.status(404).json({
        message: "invalid",
    });
});

module.exports = app;