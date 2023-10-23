import Pokedex from './PokedexFunc';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Testing the Pokedex component', () => {
  test('Should render pikachu when button is clicked', async () => {
    render(<Pokedex />);

    let addPokemonButton = screen.getByText('Add Pikachu');
    fireEvent.click(addPokemonButton);

    expect(screen.getByText(/pikachu/)).toBeVisible();
  });
})