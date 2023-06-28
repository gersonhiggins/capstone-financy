import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchFruits } from '../redux/fruitSlice';

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
      <h2>
        Detailed information:
        <br />
        {date}
      </h2>
      {/* Mostrar detalles específicos */}
      {details && (
        <div className="details">
          <p>
            Detailed date:
            <br />
            {details.date}
          </p>
          <p>
            Period
            <br />
            {details.period}
          </p>
          <p>
            Income:
            <br />
            $
            {details.grossProfit}
          </p>
          <p>
            Expenses:
            <br />
            $
            {details.operatingExpenses}
          </p>
          <p>
            Income interest:
            <br />
            $
            {details.interestIncome}
          </p>
          <p>
            Expenses interest:
            <br />
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
