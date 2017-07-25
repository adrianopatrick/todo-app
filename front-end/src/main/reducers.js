/**
 * Created by ichigo on 09/03/17.
 */
import {combineReducers} from 'redux';

import todoReducer from '../todo/todoReducer';
import about from '../about/reducer';

const rootReducer = combineReducers({
  todo: todoReducer,
    about
});

export default rootReducer;