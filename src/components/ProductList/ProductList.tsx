import React, { FC } from 'react';
import { ProductListWrapper } from './ProductList.styled';

interface ProductListProps {}

const ProductList: FC<ProductListProps> = () => (
 <ProductListWrapper data-testid="ProductList">
    ProductList Component
 </ProductListWrapper>
);

export default ProductList;
