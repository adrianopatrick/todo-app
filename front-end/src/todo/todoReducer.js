/**
 * Created by patrickcunha on 09/03/17.
 */
const INITIAL_STATE = {
    descricao: '',
    list: [],
    requerimentoTO: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGE':
            return {...state, descricao: action.payload};
        case 'TODO_SEARCHED':
            return {...state, list: action.payload};
        case 'TODO_CLEAR':
            return {...state, descricao: ''};
        case 'TODO_UPLOAD':
            return {...state, requerimentoTO: {path: action.payload}};
        default:
            return state;
    }
}