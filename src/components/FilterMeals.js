import React from 'react';

const FilterMeals = (props) => {
  return (
    <div className="filter-form">
      <h3>Chose a Category</h3>
      <select className="filter" onChange={props.handlechanges}>
        <option value="all" key="all">
          {' '}
          ---{' '}
        </option>
        {props.category.map((cat) => (
          <option data-testid={cat.strCategory} key={cat.strCategory}>{cat.strCategory}</option>
        ))}
      </select>
    </div>
  );
};
export default FilterMeals;
