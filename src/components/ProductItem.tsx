import React from 'react';
import { Product } from '../models/product';



interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product?.price?.toFixed(2)}</p>
    </div>
  );
};

export default ProductItem;
