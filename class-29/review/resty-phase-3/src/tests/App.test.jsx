import App from '../App';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  http.get('/*', () => {
    return HttpResponse.json({ count: 0, results: [] });
  }),
  http.post('/*', () => {
    return HttpResponse.json({ count: 0, results: [] });
  })
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Testing the App component', () => {

  test('Should display data when url and method are selected, and GO button is clicked', async () => {

    render(<App />);

    let inputElement = screen.getByTestId('form-input');
    fireEvent.change(inputElement, { target: { value: 'test-url'}});

    let goButton = screen.getByTestId('form-button');
    fireEvent.click(goButton);

    let data = await waitFor(() => screen.getByTestId('results'));

    expect(data).toBeVisible();
  });
});
