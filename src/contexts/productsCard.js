import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../utils/axios';

const ProductsCardContext = createContext();

const ProductsCardProvider = ({ children }) => {
  const [dataLoaded, setDataLoaded] = useState(false);
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
      value: 50,
      certified_products: 10,
    },
  });

  const fetchGlobalProductsCardData = async () => {
    setDataLoaded(false);
    const response = await axios.get('global-products');

    if (response.data.responseCode !== '100') return;

    const { summary } = response.data;

    setCardData((prev) => ({ ...prev, ...summary }));
    setDataLoaded(true);
  };

  useEffect(() => {
    fetchGlobalProductsCardData();
  }, []);

  return (
    <ProductsCardContext.Provider value={{ cardData, dataLoaded }}>
      {children}
    </ProductsCardContext.Provider>
  );
};

export const useGlobalProductsCardCtx = () => useContext(ProductsCardContext);

export default ProductsCardProvider;
