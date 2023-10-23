import Pokemon from './Pokemon';
import { render, screen } from '@testing-library/react';

describe('Testing the Pokemon component', () => {
  test('Should render a name and a type', async () => {
    render(<Pokemon name="testName" type="testType"/>);

    expect(screen.getByText(/testName/)).toBeVisible();
    expect(screen.getByText(/testType/)).toBeVisible();
  });
});
