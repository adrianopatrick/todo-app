import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './main/app';

ReactDOM.render(<App />, document.getElementById('app'))