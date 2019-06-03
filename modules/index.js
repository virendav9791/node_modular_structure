const express = require('express');
const moduleRoute = express.Router();

moduleRoute.use('/users', require('./users/usersRoute'));
moduleRoute.use('/language', require('./languages/languageRoute'));
console.log("here");


module.exports = moduleRoute;