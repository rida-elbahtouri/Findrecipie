import GetRecipe, { getDetails } from '../actions';

describe('actions', () => {
  it('should get recipe data', () => {
    const data = [{ meal: 'meals' }];
    const expectedAction = {
      type: 'GETRECIPE',
      payload: data,
    };
    expect(GetRecipe(data)).toEqual(expectedAction);
  });
});
it('should get meal details', () => {
  const data = [{ name: 'meal' }];
  const expectedAction = {
    type: 'GETDETAILS',
    payload: data,
  };
  expect(getDetails(data)).toEqual(expectedAction);
});
