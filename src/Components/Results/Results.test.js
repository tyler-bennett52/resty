import React from 'react';
import { render, screen } from '@testing-library/react';
import Results from './';

describe('Results box', () => {
  test('Renders data prop inside', () => {
    const data = { name: 'Luke Skywalker', age: 25 };
    render(<Results data={data} />);
    const resultsText = screen.getByText(/Luke Skywalker/);
    expect(resultsText).toBeInTheDocument();
  });
})
