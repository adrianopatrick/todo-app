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
        this.concluir = this.concluir.bind(this);
        this.desfazer = this.desfazer.bind(this);
        this.search = this.search.bind(this);
        this.clear = this.clear.bind(this);

        this.refresh();
    }

    refresh(descricao = '') {
        const search = descricao ? `&description__regex=${descricao}` : '';
        axios.get(`${URL}?sort=-createAt${search}`)
            .then(resp => this.setState({...this.state, descricao, list: resp.data}));
    }

    search() {
        this.refresh(this.state.descricao);
    }

    clear() {
        this.refresh();
    }

    concluir(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => this.refresh(this.state.descricao));
    }

    desfazer(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => this.refresh(this.state.descricao));
    }

    add() {
        const description = this.state.descricao;
        axios.post(URL, {description})
            .then(resp => this.refresh());
    }

    remove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.descricao));
    }

    change(e) {
        this.setState({...this.state, descricao: e.target.value});
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm add={this.add}
                    search={this.search} clear={this.clear} />
                <TodoList remove={this.remove}
                    concluir={this.concluir} desfazer={this.desfazer} />
            </div>
        );
    }
}

export default Todo;