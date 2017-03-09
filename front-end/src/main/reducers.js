/**
 * Created by ichigo on 09/03/17.
 */
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  todo: () => ({
      descricao: 'Ler livro',
      list: [{
          _id: 1,
          description: 'Estudar Redux',
          done: true
      }, {
          _id: 2,
          description: 'Estudar React',
          done: false
      }]
  })
})

export default rootReducer;