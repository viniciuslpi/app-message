const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, required: false },
    updatedAt: { type: Date, required: false }
},
{   versionKey: false });

const users = mongoose.model('users', userSchema);

module.exports = users;

