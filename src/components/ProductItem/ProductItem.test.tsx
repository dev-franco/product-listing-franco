import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductItem from './ProductItem';

describe('<ProductItem />', () => {
  test('it should mount', () => {
    render(<ProductItem />);

    const ProductItem = screen.getByTestId('ProductItem');

    expect(ProductItem).toBeInTheDocument();
  });
});