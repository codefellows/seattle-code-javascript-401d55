import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

describe('Testing the App component', () => {
  test('Should render pikachu when button is clicked', async () => {
    render(<App />); // App pulls in everything

    let goButton = screen.getByText('GO!');
    fireEvent.click(goButton);

    let displayJson = await waitFor(() => screen.getByTestId('results'));

     expect(displayJson).toBeVisible();
     expect(screen.getByText(/bulbasaur/)).toBeVisible();
  });
})