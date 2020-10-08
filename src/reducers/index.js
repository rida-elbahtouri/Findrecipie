const recipeReducer = (state = 'Seafood', action) => {
  switch (action.type) {
    case 'GETRECIPE':
      return action.payload;

    default:
      return state;
  }
};
export default recipeReducer;
