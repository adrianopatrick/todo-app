import React, {Component} from 'react';
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = "http://localhost:3003/api/todos";

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {descricao: '', list: []};

        this.add = this.add.bind(this);
        this.change = this.change.bind(this);
        this.remove = this.remove.bind(this);

        this.refresh();
    }

    refresh() {
        axios.get(URL)
            .then(resp => this.setState({...this.state, descricao: '', list: resp.data}));
    }

    add() {
        const description = this.state.descricao;
        axios.post(URL, {description})
            .then(resp => this.refresh());
    }

    remove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh());
    }

    change(e) {
        this.setState({...this.state, descricao: e.target.value});
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm add={this.add} change={this.change} descricao={this.state.descricao}/>
                <TodoList list={this.state.list} remove={this.remove}/>
            </div>
        );
    }
}

export default Todo;