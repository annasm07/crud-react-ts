import React from 'react';
import { render, screen } from './utils/test-utils';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/footer/i);
  expect(linkElement).toBeInTheDocument();
});
