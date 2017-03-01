/**
 * Created by ichigo on 28/02/17.
 */
const restful = require('node-restful');
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {type: String, required: true},
    done: {type: Boolean, required: true, default: false},
    createdAt: {type: Date, default: Date.now()}
});

module.exports = restful.model('Todo', todoSchema);