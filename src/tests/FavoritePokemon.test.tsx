import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Testa se é exibida na tela a mensagem No favorite pokemon found caso a pessoa não tenha Pokémon favorito', () => {
  renderWithRouter(<App />, { route: '/favorites' });
  const navFavoritePage = screen.getByText(/no favorite pokémon found/i);
  expect(navFavoritePage).toBeInTheDocument();
});

test('Testa se são exibidos os Pokémon favoritados', async () => {
  renderWithRouter(<App />, { route: '/' });
  const navFavoritePage = screen.getByRole('link', { name: /more details/i });
  expect(navFavoritePage).toBeInTheDocument();
  await userEvent.click(navFavoritePage);
  const linkFavoritePage = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
  expect(linkFavoritePage).toBeInTheDocument();
  await userEvent.click(linkFavoritePage);
  expect(linkFavoritePage).toBeChecked();
  const navLinkFavoritePage = screen.getByRole('link', { name: 'Favorite Pokémon' });
  await userEvent.click(navLinkFavoritePage);
  const favoritePokemon = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
  expect(favoritePokemon).toBeInTheDocument();
});
