const userMiddleware = {};
const userService = require('./usersService');
userMiddleware.emailExists = async (req, res, next) => {
    if (req.body.email) {
        const {
            email,
        } = req.body;
        const user = await userService.getUserByEmail(email);
        console.log(user)
        if (user.length > 0) {
            return res.status(400)
                .json({ message: "already exsits" });
        }
        next();
    } else {
        next();
    }
};
module.exports = userMiddleware;