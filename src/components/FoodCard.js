import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import MealDetails from './MealDetails';

const FoodCard = props => {
  const {
    meal, img, id,
  } = props;

  return (
    <div>
      <Link to={`/meal/${id}/${meal}`}>
        {/* eslint-disable-next-line */ }
      <div data-testid="div" className="foodcard" >
        <img data-testid="img" alt={meal} src={img} />
        <h3 data-testid="meal">
          {' '}
          {meal}
          {' '}
        </h3>
      </div>
      </Link>
    </div>
  );
};

FoodCard.propTypes = {
  gtdetails: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  meal: PropTypes.string.isRequired,
};
export default FoodCard;
