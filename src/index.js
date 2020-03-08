import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from '../src/app/store/configureStore';
import { Provider } from 'react-redux';

document.title = 'Split-Up';
const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});
console.log(store.getState());
const ele = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(ele, document.getElementById('root'));
