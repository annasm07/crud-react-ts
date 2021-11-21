import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('When the NotFound component is rendered', () => {
  test('Then NotFound of application should be in the document', () => {
    render(<BrowserRouter><NotFound /></BrowserRouter>);
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
