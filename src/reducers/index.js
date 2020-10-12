import { combineReducers } from 'redux';

const recipeReducer = (state = 'all', action) => {
  switch (action.type) {
    case 'GETRECIPE':
      return action.payload;

    default:
      return state;
  }
};

const detailsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETDETAILS':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  recipe: recipeReducer,
  details: detailsReducer,
});

export default rootReducer;
