const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vini:123@node-cluster.xyldt.mongodb.net/app-message');

module.exports = mongoose.connection;