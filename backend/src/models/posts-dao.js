const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    id: { type: String },
    description: { type: String, required: true },
    date: { type: String, required: true },
    user:  { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true }
},
{   versionKey: false });

const posts = mongoose.model('posts', postsSchema);

module.exports = posts;

