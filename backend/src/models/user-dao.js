const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    nickName: { type: String, required: true },
    userImg: { type: String, required: false },
    posts:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'posts', required: true }]
},
{   versionKey: false });

const users = mongoose.model('users', userSchema);

module.exports = users;

