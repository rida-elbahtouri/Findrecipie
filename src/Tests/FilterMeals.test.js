import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterMeals from '../components/FilterMeals';

afterEach(cleanup);

it('render categorys', () => {
  const handlechanges = () => 1 + 2;
  const { getByTestId } = render(
    <FilterMeals handlechanges={handlechanges} category={[{ strCategory: 'cat1' }, { strCategory: 'cat2' }]} />,
  );
  expect(getByTestId('cat1')).toHaveTextContent('cat1');
});
