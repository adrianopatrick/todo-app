/**
 * Created by ichigo on 09/03/17.
 */
import {combineReducers} from 'redux';

import todoReducer from '../todo/todoReducer';

const rootReducer = combineReducers({
  todo: todoReducer
})

export default rootReducer;