import React,{Component} from 'react';
import ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';

import store from './store'














ReactDom.render(
    <Provider store={store}>
                <div>123</div>
    </Provider>
    
,document.querySelector('#app'))