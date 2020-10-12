import React from 'react';

const FoodCard = (props) => {
  return (
    <div>
    <div  data-testid="div" className="foodcard" onClick={() => props.gtdetails(props.id)}>
      <img data-testid="img"  alt={props.meal} src={props.img} />
      <h3 data-testid="meal"> {props.meal} </h3>
    </div></div>
  );
};
export default FoodCard;
