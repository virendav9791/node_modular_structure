const {
    check,
} = require('express-validator/check');
const validator = {};

validator.validateEmail = (field) => {
    return check(field).isEmail();
};

validator.validateEmpty = (field) => {
    return check(field).isString();
};

validator.verifyEnum = (field, options) => {
    return check(field).isIn(options);
}

module.exports = validator;