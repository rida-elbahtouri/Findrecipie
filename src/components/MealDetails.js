import React from 'react';
import PropTypes from 'prop-types';

const MealDetails = props => {
  const { details, colsedetails, ingredient } = props;
  return (
    <div className="mealdetails">
      <button onClick={colsedetails} type="button">
        X
      </button>
      <h3 data-testid="mealname">
        {' '}
        {details.strMeal}
        {' '}
      </h3>
      <p>
        <span>Food area :</span>
        <span data-testid="fooderea">
          {' '}
          {details.strArea}
          {' '}
        </span>
        {' '}
      </p>
      <h4>Ingredients</h4>
      <ul className="ingredientList">
        {ingredient.map(ing => (
          <li data-testid={ing} key={ing}>{ing}</li>
        ))}
      </ul>
      <h4>How to make it:</h4>
      <p data-testid="mealinstr">{details.strInstructions}</p>
    </div>
  );
};

MealDetails.propTypes = {
  colsedetails: PropTypes.func.isRequired,
  // eslint-disable-next-line
  details: PropTypes.object.isRequired,
  // eslint-disable-next-line
  ingredient: PropTypes.array.isRequired,
};
export default MealDetails;
