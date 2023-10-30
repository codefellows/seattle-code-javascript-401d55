import useForm from './useForm';
import {render, screen, fireEvent} from '@testing-library/react';

describe('Testing the useForm hook', () => {
  test('Should track values using a simple form component', () => {
    const Form = () => {

      const testFunction = (value) => {
        console.log('FORM HAS BEEN SUBMITTED WITH THESE values :', value);
      }

      const { values, handleChange, handleSubmit } = useForm(testFunction);

      return (
        <form onSubmit={handleSubmit}>
          <input data-testid="input1" name="test1" type="text" onChange={handleChange} />
          <input data-testid="input2" name="test2" type="text" onChange={handleChange} />
          <button type="submit">Submit Me</button>
          {Object.values(values).map(value => <p>{value}</p>)}
        </form>
      )
    }

    render(<Form />); // this render method, takes any component and returns the text (html) that would be present in the browser.

    let input1 = screen.getByTestId('input1');
    fireEvent.change(input1, { target: { value: 'test1' }});
    let input2 = screen.getByTestId('input2');
    fireEvent.change(input2, { target: { value: 'test2' } });

    let button = screen.getByText(/submit me/i);
    fireEvent.click(button);

    expect(screen.getByText('test1')).toBeVisible();
    expect(screen.getByText('test2')).toBeVisible();
  });
})