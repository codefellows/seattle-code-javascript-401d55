import Form from './index';
import { render, screen, fireEvent } from '@testing-library/react';

test('Should call test function when form is submitted', async () => {

  let hasFunctionBeenCalled = false;

  const handleApiCall = () => {
    hasFunctionBeenCalled = true;
  };

  render(<Form handleApiCall={handleApiCall} />);

  let goButton = screen.getByText('GO!');
  fireEvent.click(goButton);

  expect(hasFunctionBeenCalled).toEqual(true);
});