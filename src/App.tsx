import React from 'react';
import './App.css';
import ProductItem from './components/ProductItem';
import { Product } from './models/product';

function App() {
  const product = new Product();
  product.id = 1;
  product.name = "Sample Product";
  product.category = "Electronics";
  product.price = 99.99;
  
  const sampleProduct = {
    id: 1,
    name: "Sample Product",
    category: "Electronics",
    price: 99.99
  };

  return (
    <div className="App">
      <h1>My Product App</h1>
      <ProductItem product={product} />
    </div>
  );
}

export default App;