import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

jest.mock('axios')

describe('App Integration Test', () => {
  it('result element is rendered even when empty', () => {
    render(<App />)
    const resultsElement = screen.getByTestId('results');
    expect(resultsElement.innerText).toBe(undefined)
    const submitButton = screen.getByText('GO!');
    fireEvent.click(submitButton);
  })
})
