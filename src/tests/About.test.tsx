import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

test('Teste se a página contém as informações sobre a Pokédex', () => {
  renderWithRouter(<About />, { route: '/about' });
  const navAboutPage = screen.getByRole('heading', { name: /about pokédex/i });
  expect(navAboutPage).toBeInTheDocument();
});

test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
  renderWithRouter(<About />, { route: '/about' });
  const navAboutPage = screen.getByRole('heading', { name: /about pokédex/i });
  expect(navAboutPage).toBeInTheDocument();
});

test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
  renderWithRouter(<About />, { route: '/about' });
  const navAboutPage = screen.queryAllByText(/This application simulates a Pokédex|One can filter Pokémon by type/i);
  expect(navAboutPage.length).toBe(2);
});

test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
  renderWithRouter(<About />, { route: '/about' });
  const navAboutPage = screen.getByRole('img');
  expect(navAboutPage).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
