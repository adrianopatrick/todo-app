/**
 * Created by patrickcunha on 09/03/17.
 */
import axios from 'axios';

const URL = "http://localhost:3003/api/todos";

export const changeDescription = event => {
    return [{type: 'DESCRIPTION_CHANGE', payload: event.target.value}, search()];
};

export const search = () => {

    return (dispatch, getState) => {
        const descricao = getState().todo.descricao;
        const search = descricao ? `&description__regex=/${descricao}/i` : '';
        axios.get(`${URL}?sort=-createAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, {description})
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()));
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => dispatch(search()));
    }
}

export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => dispatch(search()));
    }
}

export const remove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()));
    }
}

export const clear = () => {
    return [{type: 'TODO_CLEAR'}, search()];
}