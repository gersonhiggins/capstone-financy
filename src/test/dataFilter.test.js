import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DateFilter from '../components/dateFilter';

const mockStore = configureStore([thunk]);

describe('DateFilter', () => {
  it('updates selectedYear state on input change', async () => {
    const store = mockStore({ fruit: { fruits: [] } });
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <DateFilter />
      </Provider>,
    );

    const inputElement = getByPlaceholderText('Filter by date');
    fireEvent.change(inputElement, { target: { value: '2022' } });

    await waitFor(() => {
      const actions = [{ payload: '2022', type: 'UPDATE_SELECTED_YEAR' }];
      expect(actions).toEqual([{ type: 'UPDATE_SELECTED_YEAR', payload: '2022' }]);
    });
  });
});
