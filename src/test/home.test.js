import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import Home from '../components/home';

test('renders Home component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );

  const homeElement = getByText(/Home/i);

  expect(homeElement).toBeInTheDocument();
});
