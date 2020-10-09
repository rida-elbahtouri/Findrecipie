import React from 'react';

const MealDetails = (props) => {
  const meal = props.details[0];
  return (
    <div className="mealdetails">
      <button onClick={props.colsedetails} type="button">
        X
      </button>
      <h3> {meal.strMeal} </h3>
      <p>
        <span>Food area :</span>
        <span> {meal.strArea} </span>{' '}
      </p>
      <h4>Ingredients</h4>
      <ul className="ingredientList">
        {props.ingredient.map((ing) => (
          <li key={ing}>{ing}</li>
        ))}
      </ul>
      <h4>How to make it:</h4>
      <p>{meal.strInstructions}</p>
    </div>
  );
};
export default MealDetails;
