import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { resolve } from 'path';

// test('renders learn react link', () => {
// });

const setup = new Promise(() => {
  setTimeout(() => {
    render(<App />);
    resolve();
  }, 500) // while the .json is served from a local file, a 500ms emulates a network request on the ApiClient
});

describe('layout', () => {

  it('should display the search input with placeholder "Search for product name"', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Search for product name/i);
    expect(input).toBeInTheDocument();
  });

  it('should display the category filter after successfully fetching the metadata', async () => {
    setup.then(() => {
      const dropdown = screen.getByText(/Select a category/i);
      expect(dropdown).toBeInTheDocument();
    })
  });

  it('should display 7 product cards', async () => {    
    setup.then(() => {
      const cards = screen.getAllByText(/Product [0-9]+/i);
      expect(cards.length).toEqual(7);
    })
  })
});

describe('iteractions', () => {
  it('should reflect a change in total products when a search is made', () => {    
    setup.then(() => {
      let cards = screen.getAllByText(/Product [0-9]+/i);
      expect(cards.length).toEqual(7);

      const input = screen.getByPlaceholderText(/Search for product name/i) as HTMLInputElement;
      expect(input).toBeInTheDocument();

      const mockProductName = 'Product 1';
      input.value = mockProductName;
      input.dispatchEvent(new Event('input'));
      input.dispatchEvent(new Event('blur'));

      cards = screen.getAllByText(mockProductName);
      expect(cards.length).toEqual(1);
    })
  })
})
