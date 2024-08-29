import React from 'react';
import { Product } from '../../models/product';
import './ProductItem.scss';
import { Card } from 'antd';

interface ProductItemProps {
  product: Product;
}


const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="ww-product-item">
      <Card
        hoverable
        cover={<img alt={product.name} src={`https://random-image-pepebigotes.vercel.app/api/random-image?${product.id}`} />}
      >

        <div className="ww-product-description">
          <div className="ww-product-item-name"><span>{product.name}</span></div>
          <div className="ww-product-item-category">{product.category}</div>
        </div>
        <div className="ww-product-item-price">{product?.price?.toFixed(2)}€</div>
      </Card>
    </div>


  );
};

export default ProductItem;
