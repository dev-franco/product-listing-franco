import React from 'react';
import { Product } from '../models/product';
import './ProductItem.css';

interface ProductItemProps {
  product: Product;
}


const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="ww-product-item">
      <div className="ww-product-item-name"><span>{product.name}</span></div>
      <div className="ww-product-item-category">Category: {product.category}</div>
      <div className="ww-product-item-price">Price: {product?.price?.toFixed(2)}€</div>
    </div>
  );
};

export default ProductItem;
