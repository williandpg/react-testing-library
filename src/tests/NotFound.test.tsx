import React from 'react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

test('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
  const { getByRole } = renderWithRouter(<NotFound />);
  const navNotFoundPage = getByRole('heading', { name: /page requested not found/i });
  expect(navNotFoundPage).toBeInTheDocument();
});

test('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
  const { getByRole } = renderWithRouter(<NotFound />);
  const imgNotFoundPage = getByRole('img');
  expect(imgNotFoundPage).toHaveProperty('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
