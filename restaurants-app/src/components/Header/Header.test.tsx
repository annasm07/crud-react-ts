import React from 'react';
import { render, screen } from '../../utils/test-utils';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';


describe('When the Header component is rendered', () => {
  test('Then Home should be in the document', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    expect(screen.getByText(/restaurant/i)).toBeInTheDocument();
  });
});
