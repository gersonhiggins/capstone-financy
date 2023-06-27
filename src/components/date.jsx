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
    <div>
      <h2>
        Información detallada para el año:
        <br />
        {date}
      </h2>
      {/* Mostrar detalles específicos */}
      {details && (
        <div>
          <p>
            Income:
            <br />
            {details.grossProfit}
          </p>
          <p>
            Gastos:
            <br />
            {details.expenses}
          </p>
          {/* Mostrar otros detalles */}
        </div>
      )}
    </div>
  );
};

export default Date;
