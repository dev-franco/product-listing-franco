import { useEffect, useState, useMemo } from 'react';
import { ApiClient } from './api/ApiClient';
import './App.scss';
import ProductList from './components/ProductList/ProductList';
import { Product } from './models/product';
import { Metadata } from './models/metadata';
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';
import logo from './assets/img/whatever-works-logo.png';
import { Spin } from 'antd';

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
    if (filterSearch) {
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
      <main>
        <section className="ww-sidebar">
          <div className="ww-sidebar-logo">
            <img src={logo} alt="logo" />
          </div>
          { /*<div className="ww-sidebar-content"></div>*/ }
        </section>
        <section className="ww-main-content">
          <div className="ww-products-filter">
            <div className="ww-products-filter-search">
              <Search onSearch={setFilterSearch} />
            </div>
            <div className="ww-products-filter-category">
              <Filter categories={metadata.productCategories ?? []} onCategoryChange={setFilterCategory} />
            </div>
          </div>
          <div className="ww-products">
            {isLoading && <Spin />}
            {!isLoading && <ProductList products={getFilteredProducts()} />}
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;