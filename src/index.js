import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {Route,Switch,HashRouter as Router} from 'react-router-dom';
import Home from './containers/Home'
import Mine from './containers/Mine'
import Profile from './containers/Profile'
import Layout from './containers/Layout'
import store from './store'
import {Provider} from 'react-redux';
import './common/global.less';










ReactDom.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/mine" component={Mine} />
                    <Route exact path="/profile" component={Profile} />
                </Layout>
            </Switch>
        </Router>
    </Provider>
,document.querySelector('#app'))