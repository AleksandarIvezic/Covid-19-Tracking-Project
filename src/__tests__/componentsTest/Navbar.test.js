import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import Navbar from '../../components/Navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Route path="/country">
            <Navbar />
          </Route>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
