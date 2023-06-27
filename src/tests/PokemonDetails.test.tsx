import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela', async () => {
  renderWithRouter(<App />, { route: '/' });
  const navLinkDetails = screen.getByRole('link', { name: /more details/i });
  await userEvent.click(navLinkDetails);
  const navPokemonDetails = screen.getByRole('heading', { name: /pikachu details/i });
  const navPokemonSummary = screen.getByRole('heading', { name: /summary/i });
  const navResume = screen.getByText(/this intelligent pokémon roasts hard berries/i);
  expect(navPokemonDetails).toBeInTheDocument();
  expect(navLinkDetails).not.toBeInTheDocument();
  expect(navPokemonSummary).toBeInTheDocument();
  expect(navResume).toBeInTheDocument();
});

test('Teste se existe na página uma seção com os mapas contendo as localizações do pokémon', async () => {
  renderWithRouter(<App />, { route: '/' });
  const navLinkDetails = screen.getByRole('link', { name: /more details/i });
  await userEvent.click(navLinkDetails);
  const navPokemonLocation = screen.getByRole('heading', { name: /game locations of pikachu/i });
  const navPokemonLocationImage = screen.getAllByRole('img', { name: /pikachu location/i });
  expect(navLinkDetails).not.toBeInTheDocument();
  expect(navPokemonLocation).toBeInTheDocument();
  expect(navPokemonLocationImage[0]).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
  expect(navPokemonLocationImage[1]).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
});

test('Teste se o usuário pode favoritar um pokémon através da página de detalhes', async () => {
  renderWithRouter(<App />, { route: '/' });
  const navLinkDetails = screen.getByRole('link', { name: /more details/i });
  await userEvent.click(navLinkDetails);
  const navFavoritePokemon = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
  expect(navFavoritePokemon).toBeInTheDocument();
  await userEvent.click(navFavoritePokemon);
  const navStar = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
  expect(navStar).toBeInTheDocument();
  expect(navStar).toHaveAttribute('src', '/star-icon.svg');
  expect(navStar).toHaveAttribute('alt', 'Pikachu is marked as favorite');
});
