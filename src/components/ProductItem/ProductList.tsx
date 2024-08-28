import React from 'react';
import { Product } from '../../models/product';
import ProductItem from './ProductItem';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
