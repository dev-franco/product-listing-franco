import React, { FC } from 'react';
import { ProductItemWrapper } from './ProductItem.styled';

interface ProductItemProps {}

const ProductItem: FC<ProductItemProps> = () => (
 <ProductItemWrapper data-testid="ProductItem">
    ProductItem Component
 </ProductItemWrapper>
);

export default ProductItem;
