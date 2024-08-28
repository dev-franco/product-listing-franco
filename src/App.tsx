import { useEffect, useState, useMemo } from 'react';
import { ApiClient } from './api/ApiClient';
import './App.css';
import ProductList from './components/ProductList';
import { Product } from './models/product';

function App() {

  const apiClient = useMemo(() => new ApiClient(), []); // TODO: memoizing to avoid re-renders taking over this ref
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const fetchedProducts = await apiClient.getAll<Product>();
      setProducts(fetchedProducts);
      setIsLoading(false);
    };
    fetchProducts();
  }, [apiClient]); // react-hooks/exhaustive-deps requires to declare all dependencies

  return (
    <div className="App">
      <h1>WHATEVER.WORKS</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}

export default App;