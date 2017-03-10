/**
 * Created by patrickcunha on 09/03/17.
 */
const INITIAL_STATE = {
    descricao: '',
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGE':
            return {...state, descricao: action.payload};
        case 'TODO_SEARCHED':
            return {...state, list: action.payload.data};
        case 'TODO_ADDED':
            return {...state, descricao: ''};
        default:
            return state;
    }
}