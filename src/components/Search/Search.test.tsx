import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './Search';

describe('<Search />', () => {
  test('it should mount', () => {
    render(<Search />);

    const Search = screen.getByTestId('Search');

    expect(Search).toBeInTheDocument();
  });
});