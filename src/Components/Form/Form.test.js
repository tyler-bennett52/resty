import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from './';

describe('Form', () => {
  test('Important elements render and handleSubmit is called with mock data', () => {
    const mockHandleApiCall = jest.fn();
    render(<Form handleApiCall={mockHandleApiCall} />);
    const urlInput = screen.getByLabelText('URL');
    const submitButton = screen.getByText('GO!');
    fireEvent.change(urlInput, { target: { value: 'https://google.com' } });
    fireEvent.click(submitButton);
    // This test will need to be changed once mockAPI is hooked up to real data
    expect(mockHandleApiCall).toHaveBeenCalledWith({
      method: 'GET',
      url: "https://pokeapi.co/api/v2/pokemon",
    });
  });
});
