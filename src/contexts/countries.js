import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../utils/axios';

const CountriesContext = createContext();

const CountryProvider = ({ children }) => {
  const [cardData, setCardData] = useState({
    grn_change: 0,
    last_month_grn: 0,
    total_countries: 0,
    total_grn: 0,
    total_tenants: 0,
    total_farmers: 0,
    total_warehouses: 0,
  });

  const fetchCountryCardData = async () => {
    const response = await axios.get('countries');

    if (response.data.responseCode !== '100') return;

    const { summary } = response.data;

    setCardData((prev) => ({ ...prev, ...summary }));
  };

  useEffect(() => {
    fetchCountryCardData();
  }, []);

  return (
    <CountriesContext.Provider value={{ cardData }}>
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountryCardCtx = () => useContext(CountriesContext);

export default CountryProvider;
