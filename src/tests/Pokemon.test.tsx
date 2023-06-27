import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { Pokemon } from '../components';
import pokemonList from '../data';
import App from '../App';

test('Teste se é renderizado um card com as informações de determinado Pokémon', () => {
  renderWithRouter(<Pokemon isFavorite showDetailsLink pokemon={ pokemonList[0] } />);
  const navPokemonName = screen.getByText(/pikachu/i);
  const navPokemonType = screen.getByText(/electric/i);
  const navPokemonWeight = screen.getByText(/average weight: 6\.0 kg/i);
  const navPokemonImage = screen.getByRole('img', { name: /pikachu sprite/i });
  const navMoreDetails = screen.getByRole('link', { name: /more details/i });
  expect(navPokemonName).toBeInTheDocument();
  expect(navPokemonType).toBeInTheDocument();
  expect(navPokemonWeight).toBeInTheDocument();
  expect(navPokemonImage).toBeInTheDocument();
  expect(navPokemonImage).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
  expect(navPokemonImage).toHaveAttribute('alt', `${pokemonList[0].name} sprite`);
  expect(navMoreDetails).toHaveAttribute('href', '/pokemon/25');
});

test('Teste se existe um ícone de estrela nos Pokémons favoritados', async () => {
  renderWithRouter(<App />, { route: '/' });
  const navMoreDetails = screen.getByRole('link', { name: /more details/i });
  await userEvent.click(navMoreDetails);
  const navFavoritePokemon = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
  expect(navFavoritePokemon).toBeInTheDocument();
  await userEvent.click(navFavoritePokemon);
  const navStar = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
  expect(navStar).toBeInTheDocument();
  expect(navStar).toHaveAttribute('src', '/star-icon.svg');
  expect(navStar).toHaveAttribute('alt', 'Pikachu is marked as favorite');
});
