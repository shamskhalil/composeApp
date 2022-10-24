const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    fName: { type: String, required: true },
    userType: { type: String, enum: ['admin', 'guest'], default: 'guest' }
});

module.exports = model('User', UserSchema);