import Form from './index';
import {render, screen, fireEvent} from '@testing-library/react';
import { describe, expect, test, it } from 'vitest';

describe('Simple working test', () => {
  it('should find visible text', () => {
    render(<Form />)
    expect(screen.getByText(/URL/i)).toBeInTheDocument()
  })
});


describe('Testing the CountForm', () => {
  test('If a user updated the input and clicks the submit button, a value should change', async () => {

    let testNumber = null;

    function handleApiCall(value) {
      testNumber = value;
    }

    render(<Form onSubmit={handleApiCall}/>);

    let inputElement = screen.getByTestId('form-input');
    fireEvent.change(inputElement, {target: {value: 13}}); // simulates changing an input element.
    let buttonElement = screen.getByTestId('form-button');
    fireEvent.click(buttonElement); // simulates clicking the submit button

    expect(testNumber).toEqual(13);
  });
})
