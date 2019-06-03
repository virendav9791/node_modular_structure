const userModel = require('../../models/users');
const mongoose = require('mongoose');
const userService = {};
userService.createUser = ((data) => {
    return userModel.create(data);
})

userService.getUserByEmail = ((email) => {
    return userModel.find({ email: email })
})
userService.getUsers = (() => {
    return userModel.find();
})

userService.deleteUsers = ((data) => {
    return userModel.deleteOne({ _id: mongoose.Types.ObjectId(data) });
})
module.exports = userService;