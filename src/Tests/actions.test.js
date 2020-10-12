import {GetRecipe} from '../actions'

describe('actions', () => {
  it('should get recipe data', () => {
    const data = [{meal:"meals"}]
    const expectedAction = {
      type: 'GETRECIPE',
      data
    }
    expect(actions.GetRecipe(data)).toEqual(expectedAction)
  })
})