import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
  renderWithRouter(<App />, { route: '/' });
  const navHomePage = screen.getByRole('heading', { name: /encountered pokémon/i });
  expect(navHomePage).toBeInTheDocument();
});

test('este se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', async () => {
  renderWithRouter(<App />, { route: '/' });
  const navButtonNextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
  expect(navButtonNextPokemon).toBeInTheDocument();
});

test('Teste se é mostrado apenas um Pokémon por vez', async () => {
  renderWithRouter(<App />, { route: '/' });
  const navPokemon = screen.getAllByTestId('pokemon-name');
  expect(navPokemon.length).toBe(1);
});

test('Teste se a Pokédex tem os botões de filtro', async () => {
  renderWithRouter(<App />, { route: '/' });
  const navButtonAll = screen.getByRole('button', { name: /all/i });
  const navButtonElectric = screen.getByRole('button', { name: /electric/i });
  const navButtonFire = screen.getByRole('button', { name: /fire/i });
  const navButtonBug = screen.getByRole('button', { name: /bug/i });
  const navButtonPoison = screen.getByRole('button', { name: /poison/i });
  const navButtonPsychic = screen.getByRole('button', { name: /psychic/i });
  const navButtonNormal = screen.getByRole('button', { name: /normal/i });
  expect(navButtonAll).toBeInTheDocument();
  expect(navButtonElectric).toBeInTheDocument();
  expect(navButtonFire).toBeInTheDocument();
  expect(navButtonBug).toBeInTheDocument();
  expect(navButtonPoison).toBeInTheDocument();
  expect(navButtonPsychic).toBeInTheDocument();
  expect(navButtonNormal).toBeInTheDocument();
});

test('Teste se a Pokédex contém um botão para resetar o filtro', async () => {
  renderWithRouter(<App />, { route: '/' });
  const navButtonAll = screen.getByRole('button', { name: /all/i });
  expect(navButtonAll).toBeInTheDocument();
});
