import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchFruits } from '../redux/fruitSlice';
import dollar from '../assets/dolar.svg';

const Date = () => {
  const dateList = useSelector((state) => state.fruit);
  const dispatch = useDispatch();
  const { date } = useParams();

  useEffect(() => {
    if (!dateList.fruits.length) {
      dispatch(fetchFruits());
    }
  }, [dateList.fruits.length, dispatch]);

  if (dateList.loading) {
    return <div>...LOADING</div>;
  }

  const details = dateList.fruits.find((fruit) => fruit.calendarYear === date);

  return (
    <div data-testid="detailed-information">
      <div className="intro">
        <img src={dollar} alt="dollar" className="dollar2" />
        <h1>
          Year
          {' '}
          {details.calendarYear}
        </h1>
      </div>
      <h2>
        Detailed information:
      </h2>
      {/* Mostrar detalles específicos */}
      {details && (
        <div className="details">
          <p>
            Detailed date:
            {details.date}
          </p>
          <p>
            Period:
            {details.period}
          </p>
          <p>
            Income:
            $
            {details.grossProfit}
          </p>
          <p>
            Expenses:
            $
            {details.operatingExpenses}
          </p>
          <p>
            Income interest:
            $
            {details.interestIncome}
          </p>
          <p>
            Expenses interest:
            $
            {details.interestExpense}
          </p>

          {/* Mostrar otros detalles */}
        </div>
      )}
    </div>
  );
};

export default Date;
