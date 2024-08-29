import React from 'react';
import { Product } from '../../models/product';
import ProductItem from '../ProductItem/ProductItem';
import { Empty } from 'antd';
import './ProductList.scss';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
      {products.length > 0 && (
        <div className="ww-products-list-wrapper">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}

      {products.length === 0 &&
        <div className="ww-products-list-empty">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No products found for filter / search criteria." />
        </div>
      }
    </>

  );
};

export default ProductList;
