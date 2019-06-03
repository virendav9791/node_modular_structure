const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/kalpesh')

mongoose.connect('mongodb://localhost:27017/kalpesh', {
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});

const db = {};
module.exports = db;