const recipeReducer = (state = 'all', action) => {
  switch (action.type) {
    case 'GETRECIPE':
      return action.payload;

    default:
      return state;
  }
};
export default recipeReducer;
