const express = require('express');
const languagesRoute = express.Router();
const languageCtrl = require('./languageController');

languagesRoute.get('/get-languages', languageCtrl.getLanguages);
module.exports = languagesRoute;