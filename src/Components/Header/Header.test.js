import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './';

describe('Header', () => {
  test('Text in header is rendered to page', () => {
    render(<Header />);
    const headerText = screen.getByText(/RESTy/);
    expect(headerText).toBeInTheDocument();
  });
});
