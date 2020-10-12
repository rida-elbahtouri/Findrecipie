import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router';
import Axios from 'axios';
import { connect } from 'react-redux';
import { getDetails } from '../actions';

const MealDetails = props => {
  console.log(props);
  const { id } = useParams();
  console.log(id);
  const gtdetails = id => {
    const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
    Axios.get(`${baseUrl}/lookup.php?i=${id}`).then(res => {
      const ingredient = [];
      for (let i = 1; i < 20; i += 1) {
        if (
          res.data.meals[0][`strIngredient${i}`] !== ''
          && res.data.meals[0][`strIngredient${i}`] !== null
        ) {
          ingredient.push(res.data.meals[0][`strIngredient${i}`]);
        }
      }
      props.getDetails({ ingredient, details: res.data.meals[0] });
    });
  };
  const prepage = useHistory();
  const back = () => {
    prepage.goBack();
  };
  const renderhelper = (ingredient, details) => {
    if (ingredient) {
      return (
        <div className="mealdetails">
          {/*  */}
          <button onClick={back} type="button">
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
    }
  };
  return (
    <div>
      {gtdetails(id)}
      {renderhelper(props.details.ingredient, props.details.details)}
    </div>
  );
};

const mapStateToProps = state => ({
  details: state.details,
});

const mapDispatchToProps = dispatch => ({
  getDetails: data => {
    dispatch(getDetails(data));
  },
});

MealDetails.propTypes = {
  // eslint-disable-next-line
  details: PropTypes.object.isRequired,
  // eslint-disable-next-line
  ingredient: PropTypes.array.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(MealDetails);
