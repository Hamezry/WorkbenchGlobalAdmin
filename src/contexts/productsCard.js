import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../utils/axios';

const ProductsCardContext = createContext();

const ProductsCardProvider = ({ children }) => {
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
    const response = await axios.get('global-products');

    if (response.data.responseCode !== '100') return;

    const { summary } = response.data;

    setCardData(summary);
  };

  useEffect(() => {
    fetchGlobalProductsCardData();
  }, []);

  return (
    <ProductsCardContext.Provider value={{ cardData }}>
      {children}
    </ProductsCardContext.Provider>
  );
};

export const useGlobalProductsCardCtx = () => useContext(ProductsCardContext);

export default ProductsCardProvider;
