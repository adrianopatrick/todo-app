/**
 * Created by ichigo on 28/02/17.
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost/todo');