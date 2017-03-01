/**
 * Created by ichigo on 28/02/17.
 */
const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptions({new: true, runValidators: true});

module.exports = Todo;
