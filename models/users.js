const {
    _,
} = global;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: Schema.Types.String,
    },
    password: {
        type: Schema.Types.String,
    },
    email: {
        type: Schema.Types.String,
    },
    languages: []
}, {
        getters: true,
        versionKey: false,
        timestamps: true
    });

module.exports = mongoose.model('users', userSchema);