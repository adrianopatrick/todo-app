/**
 * Created by patrickcunha on 09/03/17.
 */
const INITIAL_STATE = {
    descricao: 'Ler livro',
    list: [{
        _id: 1,
        description: 'Estudar Redux',
        done: false
    }, {
        _id: 2,
        description: 'Estudar React',
        done: true
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGE':
            return {...state, descricao: action.payload};
        default:
            return state;
    }
}