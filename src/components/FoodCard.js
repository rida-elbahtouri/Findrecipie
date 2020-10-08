import React from 'react';

const FoodCard = (props) => {
  console.log(props);
  console.log('hh');
  return (
    <div>
      <img src={props.img} />
      <h1> {props.meal} </h1>
    </div>
  );
};
export default FoodCard;
