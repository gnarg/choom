import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders compatible with cy_borg logo', () => {
  render(<App />);
  const image = screen.getByAltText("Compatible with CY_BORG");
  expect(image).toBeInTheDocument();
});

test('renders character class name', () => {
  const result = render(<App />);
  const element = result.container.querySelector('.klass');
  expect(element).toBeInTheDocument();
});
