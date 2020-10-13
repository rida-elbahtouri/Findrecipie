import { combineReducers } from 'redux';

const FilterReducer = (state = 'all', action) => {
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
  filter: FilterReducer,
  details: detailsReducer,
});

export default rootReducer;
