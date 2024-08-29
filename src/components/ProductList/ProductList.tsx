import React from 'react';
import { Product } from '../../models/product';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.scss';
interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="ww-products-list-wrapper">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
