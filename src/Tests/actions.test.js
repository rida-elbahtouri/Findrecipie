import { GetRecipe } from '../actions';

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
