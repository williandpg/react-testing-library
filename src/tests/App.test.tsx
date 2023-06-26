import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />, { route: '/' });
  const pageHome = screen.getByRole('link', { name: 'Home' });
  const pageAbout = screen.getByRole('link', { name: 'About' });
  const pageFavoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });
  expect(pageHome).toBeInTheDocument();
  expect(pageAbout).toBeInTheDocument();
  expect(pageFavoritePokemons).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página inicial, na URL /, ao clicar no link Home da barra de navegação', async () => {
  renderWithRouter(<App />, { route: '/' });
  const pageHome = screen.getByRole('link', { name: 'Home' });
  await userEvent.click(pageHome);
  const homePageNav = screen.getByRole('heading', { name: /encountered pokémons/i });
  expect(homePageNav).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página About, na URL /about, ao clicar no link About da barra de navegação', async () => {
  renderWithRouter(<App />, { route: '/' });
  const pageAbout = screen.getByRole('link', { name: 'About' });
  await userEvent.click(pageAbout);
  const aboutPageNav = screen.getByRole('heading', { name: /about pokédex/i });
  expect(aboutPageNav).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página de Pokémons Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação', async () => {
  renderWithRouter(<App />, { route: '/' });
  const pageFavoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });
  await userEvent.click(pageFavoritePokemons);
  const favoritePokemonsPageNav = screen.getByRole('heading', { name: /favorite pokémons/i });
  expect(favoritePokemonsPageNav).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida', async () => {
  renderWithRouter(<App />, { route: '/not-found' });
  const pageNotFound = screen.getByRole('heading', { name: /page requested not found/i });
  expect(pageNotFound).toBeInTheDocument();
});
