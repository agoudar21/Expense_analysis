import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter= (props) =>{
  const dropDownChangHandler = (event)=> {
    console.log(event.target.value)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={dropDownChangHandler}>
          <option value='2022'>2024</option>
          <option value='2022'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;