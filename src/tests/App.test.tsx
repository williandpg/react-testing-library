import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />, { route: '/' });
  const navHomePage = screen.getByRole('link', { name: 'Home' });
  const navAboutPage = screen.getByRole('link', { name: 'About' });
  const navFavoritesPage = screen.getByRole('link', { name: 'Favorite Pokémon' });
  expect(navHomePage).toBeInTheDocument();
  expect(navAboutPage).toBeInTheDocument();
  expect(navFavoritesPage).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página inicial, na URL /, ao clicar no link Home da barra de navegação', async () => {
  renderWithRouter(<App />, { route: '/' });
  const navHomePage = screen.getByRole('link', { name: 'Home' });
  await userEvent.click(navHomePage);
  const linkHomePage = screen.getByRole('heading', { name: /encountered pokémon/i });
  expect(linkHomePage).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página About, na URL /about, ao clicar no link About da barra de navegação', async () => {
  renderWithRouter(<App />, { route: '/' });
  const navAboutPage = screen.getByRole('link', { name: 'About' });
  await userEvent.click(navAboutPage);
  const linkAboutPage = screen.getByRole('heading', { name: /about pokédex/i });
  expect(linkAboutPage).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página de Pokémons Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação', async () => {
  renderWithRouter(<App />, { route: '/' });
  const navFavoritesPage = screen.getByRole('link', { name: 'Favorite Pokémon' });
  await userEvent.click(navFavoritesPage);
  const linkFavoritesPage = screen.getByRole('heading', { name: /favorite pokémon/i });
  expect(linkFavoritesPage).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida', async () => {
  renderWithRouter(<App />, { route: '/not-found' });
  const linkNotFoundPage = screen.getByRole('heading', { name: /page requested not found/i });
  expect(linkNotFoundPage).toBeInTheDocument();
});
