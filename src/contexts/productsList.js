import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../utils/axios';
import manager from '../utils/encryption';

const ProductsListCtx = createContext();

const ProductsListProvider = ({ children }) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [products, setProducts] = useState([]);
  const [cardData, setCardData] = useState({
    commodities: {
      value: 0,
      last_added: new Date(),
    },
    fees: {
      value: 0,
      last_added: new Date(),
    },
    inputs: {
      value: 0,
      last_added: new Date(),
    },
    total_products: {
      value: 0,
      certified_products: 0,
    },
  });

  const refreshContext = () => setRefresh((s) => !s);

  useEffect(() => {
    const fetchGlobalProductsCardData = async () => {
      const response = await axios.get('global-products');

      if (response.data.responseCode !== '100') return;

      const { summary } = response.data;

      setCardData((prev) => ({ ...prev, ...summary }));
    };

    const fetProducts = async () => {
      setDataLoaded(false);
      const resp = await axios.get('encrypted-products');

      if (!resp.data || resp.data.responseCode !== '100') return;

      const decrypted = manager.decrypt(resp.data.data);

      if (!decrypted) return;

      setProducts(decrypted);

      setDataLoaded(true);
    };

    fetchGlobalProductsCardData();
    fetProducts();
  }, [refresh]);
  return (
    <ProductsListCtx.Provider
      value={{ products, dataLoaded, cardData, refreshContext }}>
      {children}
    </ProductsListCtx.Provider>
  );
};

export const useProductsCtx = () => useContext(ProductsListCtx);
export default ProductsListProvider;
