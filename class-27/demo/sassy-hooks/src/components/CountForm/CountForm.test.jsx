import CountForm from './index';
import {render, screen, fireEvent} from '@testing-library/react';

describe('Testing the CountForm', () => {
  test('If a user updated the input and clicks the submit button, a value should change', async () => {

    let testNumber = null;

    function handleSubmit(value) {
      testNumber = value;
    }

    render(<CountForm onSubmit={handleSubmit}/>);

    let inputElement = screen.getByTestId('form-input');
    fireEvent.change(inputElement, {target: {value: 13}}); // simulates changing an input element.
    let buttonElement = screen.getByTestId('form-button');
    fireEvent.click(buttonElement); // simulates clicking the submit button

    expect(testNumber).toEqual(13);
  });
});

