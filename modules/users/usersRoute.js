const express = require('express');
const usersRoute = express.Router();
const userCtrl = require('./usersController');
const userMiddleware = require('./usersMiddleware');

const registerMiddleware = [
    userMiddleware.emailExists,
    userCtrl.createUser,
];
usersRoute.post('/create-user', registerMiddleware);
usersRoute.get('/get-users', userCtrl.getUsers);
usersRoute.post('/delete-users', userCtrl.deleteUser);
module.exports = usersRoute;