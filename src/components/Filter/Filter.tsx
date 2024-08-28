import React, { FC } from 'react';
import { FilterWrapper } from './Filter.styled';

interface FilterProps {}

const Filter: FC<FilterProps> = () => (
 <FilterWrapper data-testid="Filter">
    Filter Component
 </FilterWrapper>
);

export default Filter;
