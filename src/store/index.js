import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import history from '@/history';
let routerWare = routerMiddleware(history);
