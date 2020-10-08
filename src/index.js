import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
