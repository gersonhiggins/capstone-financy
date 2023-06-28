import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/navbar';

test('Navbar matches snapshot', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
