import React from 'react';

const FoodCard = (props) => {
  return (
    <div className="foodcard" onClick={() => props.gtdetails(props.id)}>
      <img alt={props.meal} src={props.img} />
      <h3> {props.meal} </h3>
    </div>
  );
};
export default FoodCard;
