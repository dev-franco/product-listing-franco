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
        cover={<img alt={product.name} src={`https://random-image-pepebigotes.vercel.app/api/random-image?${product.id}`} />}
      >
        <div className="ww-product-meta">
          <div className="ww-product-description">
            <div className="ww-product-name"><span>{product.name}</span></div>
            <div className="ww-product-category">{product.category}</div>
          </div>
          <div className="ww-product-price"><span>{product?.price?.toFixed(2)}€</span></div>
        </div>
        
      </Card>
    </div>


  );
};

export default ProductItem;
