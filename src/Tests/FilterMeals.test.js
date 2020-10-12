import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterMeals from '../components/FilterMeals';

afterEach(cleanup);

it('render categorys', () => {
  const { getByTestId } = render(
    <FilterMeals category={[{ strCategory: 'cat1' }, { strCategory: 'cat2' }]} />,
  );
  expect(getByTestId('cat1')).toHaveTextContent('cat1');
});
