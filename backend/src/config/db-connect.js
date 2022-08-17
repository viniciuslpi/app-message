const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION ?? "mongodb+srv://vini:123@node-cluster.xyldt.mongodb.net/app-message");

module.exports = mongoose.connection;