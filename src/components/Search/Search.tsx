import React, { FC } from 'react';
import { SearchWrapper } from './Search.styled';

interface SearchProps {}

const Search: FC<SearchProps> = () => (
 <SearchWrapper data-testid="Search">
    Search Component
 </SearchWrapper>
);

export default Search;
