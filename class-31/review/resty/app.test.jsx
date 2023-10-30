import { describe, expect, test } from 'vitest';
import App from './App';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

describe('Testing the app component', () => {
    test('Should display data when url and method are selected', async () => {
        render(<App />);

        let inputElement = screen.getByTestId('url-input');
        fireEvent.change(inputElement, { target: { value: 'test-url' }});

        let goButton = screen.getByTestId('go-button');
        fireEvent.click(goButton)

        let data = await waitFor(() => screen.getByTestId('results'));

        expect((data).toBeVisible);
    })
})