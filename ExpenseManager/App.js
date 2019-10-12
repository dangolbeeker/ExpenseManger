import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import Reducer from './Reducer'
import Navigator from './navigation/Navigator'
 
const reducer = combineReducers({ Reducer })
const store = createStore(reducer, applyMiddleware(logger))
 
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}