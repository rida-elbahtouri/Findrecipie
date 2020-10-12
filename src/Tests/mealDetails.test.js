import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MealDetails from '../components/MealDetails';

afterEach(cleanup);

it('render the compenet with props details', () => {
  const { getByTestId } = render(<MealDetails ingredient={['ingredient1', 'ingredient2']} details={[{ strMeal: 'the meal name' }]} />);
  expect(getByTestId('mealname')).toHaveTextContent('the meal name');
});

it('have  ingredients stored in props', () => {
  const { getByTestId } = render(<MealDetails ingredient={['ingredient1']} details={[{ strMeal: 'the meal name' }]} />);
  expect(getByTestId('ingredient1')).toHaveTextContent('ingredient1');
});

it('have an instructions to make the meal in details', () => {
  const { getByTestId } = render(<MealDetails ingredient={['ingredient1']} details={[{ strInstructions: 'Instructions' }]} />);
  expect(getByTestId('mealinstr')).toHaveTextContent('Instructions');
});

it('have an instructions to make the meal in details', () => {
  const { getByTestId } = render(<MealDetails ingredient={['ingredient1']} details={[{ strArea: 'Morocco' }]} />);
  expect(getByTestId('fooderea')).toHaveTextContent('Morocco');
});
