import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterByYear, fetchFruits } from '../redux/fruitSlice';

const DateFilter = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const dispatch = useDispatch();
  const fruitList = useSelector((state) => state.fruit.fruits);

  useEffect(() => {
    dispatch(fetchFruits());
  }, [dispatch]);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleFilter = () => {
    dispatch(filterByYear(selectedYear));
  };

  const filteredFruits = selectedYear
    ? fruitList.filter((fruit) => fruit.calendarYear.includes(selectedYear))
    : fruitList;

  return (
    <div>
      <h3>Filter by Year:</h3>
      <input type="text" value={selectedYear} onChange={handleYearChange} />
      <button type="button" onClick={handleFilter}>
        Filter
      </button>

      <ul>
        {filteredFruits.map((fruit) => (
          <li key={fruit.calendarYear}>
            <Link to={`/date/${fruit.calendarYear}`}>{fruit.calendarYear}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DateFilter;
