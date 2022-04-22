const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    googleId:{
        type: String,
        require: true
    },
    email: String,
    avatar: String,
    city: String,
    state: {
        type: String,
        match: /[A-Z]{2}/
    },
    zipCode: {
        type: Number,
        match: /d{5}/
    }
    }, {
        timestamps: true
});

module.exports = mongoose.model('user', userSchema);