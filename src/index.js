import React from 'react';
import ReactDOM from 'react-dom';
import {Router,browserHistory} from 'react-router';
import Routes from './routes';
import storeFactory from './store';
import sampleData from './initialState';
import { Provider } from 'react-redux';

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData

const saveState = () =>
    localStorage["redux-store"] = JSON.stringify(store.getState())

const store = storeFactory(initialState);
store.subscribe(saveState);

window.React = React
window.store = store

ReactDOM.render(
  <Provider store = {store}>
    <Router
    history = {browserHistory}
    routes = {Routes}
    />
  </Provider>, document.getElementById('root'));
