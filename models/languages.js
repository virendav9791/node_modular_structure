const {
    _,
} = global;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const languageSchema = new Schema({
    name: {
        type: Schema.Types.String,
    },
}, {
        getters: true,
        versionKey: false,
        timestamps: true
    });

module.exports = mongoose.model('languages', languageSchema);