import { useEffect, useState, useMemo } from 'react';
import { ApiClient } from './api/ApiClient';
import './App.css';
import ProductList from './components/ProductItem/ProductList';
import { Product } from './models/product';
import { Metadata } from './models/metadata';
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';

function App() {

  const apiClient = useMemo(() => new ApiClient(), []); // TODO: memoizing to avoid re-renders taking over this ref
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [metadata, setMetadata] = useState<Metadata>({ productCategories: [] });
  const [filterCategory, setFilterCategory] = useState<string | undefined>(undefined);
  const [filterSearch, setFilterSearch] = useState<string | undefined>(undefined);

  const getFilteredProducts = (): Product[] => {
    let filteredProducts = products;
    if (filterCategory) {
      filteredProducts = filteredProducts.filter(p => p.category === filterCategory);
    }
    if(filterSearch) {
      filteredProducts = filteredProducts.filter(p => p.name?.toLowerCase().includes(filterSearch.toLowerCase()));
    }
    return filteredProducts;
  }

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const fetchedProducts = await apiClient.getAll<Product>();
      setProducts(fetchedProducts);
      setIsLoading(false);
    };

    const fetchMetadata = async () => {
      const fetchedMetadata = await apiClient.getMetadata();
      setMetadata(fetchedMetadata);
    };

    fetchProducts();
    fetchMetadata();
  }, [apiClient]); // "react-hooks/exhaustive-deps" requires to declare all dependencies

  

  return (    
    <div className="App">
      <header>
        <h1>WHATEVER.WORKS</h1>
      </header>
      <main>
        <div className="ww-main-content">
          <div className="ww-products-filter">
            <div className="ww-products-filter-category">
              <Filter categories={metadata.productCategories ?? []} onCategoryChange={setFilterCategory} />
            </div>
            <div className="ww-products-filter-search">
              <Search onSearch={setFilterSearch} />
            </div>
          </div>
          <div className="ww-products-list">
            {isLoading && <p>Loading...</p>}
            {!isLoading && <ProductList products={getFilteredProducts()} />}
          </div>
        </div>        
      </main>      
    </div>
  );
}

export default App;