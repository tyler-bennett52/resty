import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// jest.mock('axios')

describe('App Integration Test', () => {
  it('result element is rendered even when empty', async () => {
    render(<App />)
    let resultsElement = screen.getByTestId('results');
    expect(resultsElement.innerText).toBe(undefined)
    expect(resultsElement).toBeInTheDocument();
  })

  it('Can conditionally render a loading message', async () => {
    render(<App />)
    let resultsElement = screen.getByTestId('results');
    expect(resultsElement.innerText).toBe(undefined)
    const submitButton = screen.getByText('GO!');
    fireEvent.click(submitButton);
    // await new Promise(resolve => setTimeout(resolve, 1000))
    const loadingElement = screen.getByText(/Loading/)
    expect(loadingElement).toBeInTheDocument()
  })

  it('Can get data from swapi.dev', async () => {
    render(<App />)
    let resultsElement = screen.getByTestId('results');
    expect(resultsElement.innerText).toBe(undefined)
    const submitButton = screen.getByText('GO!');
    fireEvent.click(submitButton);

    // The next two lines wait for our axios call to finish, and then check that our json-pretty element is rendered inside our Results component. Neither one of these lines is ideal, but they do work as intended and I believe they assert what they need to.
    await new Promise(resolve => setTimeout(resolve, 2000))
    expect(resultsElement.innerHTML[19]).toBe("j")
  })
})
