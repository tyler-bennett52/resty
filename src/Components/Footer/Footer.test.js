import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './';

describe('Footer', () => {
  test('Text in footer is rendered to page', () => {
    render(<Footer />);
    const footerText = screen.getByText(/Tyler Bennett/);
    expect(footerText).toBeInTheDocument();
  });
});
