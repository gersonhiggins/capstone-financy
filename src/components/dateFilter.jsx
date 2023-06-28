import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFruits } from '../redux/fruitSlice';
import arrow from '../assets/arrow.svg';
import dollar from '../assets/dolar.svg';

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

  const filteredFruits = selectedYear
    ? fruitList.filter((fruit) => fruit.calendarYear.includes(selectedYear))
    : fruitList;

  return (
    <div className="dates">
      <div className="input">
        <input placeholder="Filter by date" type="text" value={selectedYear} onChange={handleYearChange} />
      </div>
      <h2>Company Financial Staments By Year</h2>
      <ul className="date-list">
        {filteredFruits.map((fruit) => (
          <li key={fruit.calendarYear} className="date">
            <img src={dollar} alt="dollar" className="dollar" />
            <Link className="link" to={`/date/${fruit.calendarYear}`}>
              <img src={arrow} className="arrow" alt="arrow" />
              <div className="content">
                <p>{fruit.calendarYear}</p>
                <p>{fruit.reportedCurrency}</p>
                <p>
                  $
                  {fruit.grossProfit}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DateFilter;
