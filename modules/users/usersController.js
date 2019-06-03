const userService = require("./usersService");
const userCtrl = {};
userCtrl.createUser = async (req, res) => {
    const userData = req.body;
    console.log(req.body);
    await userService.createUser(userData);
    res.status(200).json({
        message: "REGISTRATION_SUCCESS"
    })
}

userCtrl.getUsers = async (req, res) => {
    let languages = await userService.getUsers();
    res.status(200).json({
        message: "SUCCESS",
        data: languages
    })
}

userCtrl.deleteUser = async (req, res) => {
    const userData = req.body;
    await userService.deleteUsers(userData._id);
    res.status(200).json({
        message: "DELETE_SUCCESS"
    })
}

module.exports = userCtrl;