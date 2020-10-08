import React from 'react';

const FilterMeals = (props) => {
  return (
    <div>
      <select onChange={props.handlechanges}>
        <option value="all" key="all">
          {' '}
          ---{' '}
        </option>
        {props.category.map((cat) => (
          <option key={cat.strCategory}>{cat.strCategory}</option>
        ))}
      </select>
    </div>
  );
};
export default FilterMeals;
