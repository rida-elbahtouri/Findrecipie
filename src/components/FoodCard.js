import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  meal: PropTypes.string.isRequired,
};
export default FoodCard;
