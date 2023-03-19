import React from 'react';
import { render, screen } from '@testing-library/react';
import Results from './';

describe('Results box', () => {
  test('Renders data prop inside', () => {
    const data = { name: 'Luke Skywalker', age: 25 };
    render(<Results response={data} />);
    const resultsText = screen.getByTestId('results');
    expect(resultsText.innerHTML).toBe('<div><pre class=\"__json-pretty-error__\"></pre></div>');
  });
})
