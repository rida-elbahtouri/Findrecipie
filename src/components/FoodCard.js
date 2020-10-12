import React from 'react';
import PropTypes from 'prop-types';

const FoodCard = props => {
  const {
    id, meal, img, gtdetails,
  } = props;
  return (
    <div>
      {/* eslint-disable-next-line */ }
      <div data-testid="div" className="foodcard" onClick={() => gtdetails(id)}>
        <img data-testid="img" alt={meal} src={img} />
        <h3 data-testid="meal">
          {' '}
          {meal}
          {' '}
        </h3>
      </div>
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
