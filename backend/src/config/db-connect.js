const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION);

module.exports = mongoose.connection;