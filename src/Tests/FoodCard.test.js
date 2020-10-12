import React from 'react';
import { createStore } from 'redux';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FoodCard from '../components/FoodCard';
import rootReducer from '../reducers/index'
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import App from '../components/App'
afterEach(cleanup);

it('render the img in the dom', () => {
  const { getByTestId } = render(
    <Router >
          <FoodCard meal="meal name" img="img url" id={1} />
        </Router>
 );
  expect(getByTestId('img')).toBeInTheDocument();
});

it('render the img in the dom', () => {
  const store = createStore(rootReducer)
  const { getByTestId } = render(
    <Provider store={store}>
       <Router >
  <FoodCard meal="meal name" img="img url" id={1} /></Router>
  </Provider>);
  expect(getByTestId('meal')).toHaveTextContent('meal name');
});
