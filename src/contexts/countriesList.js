import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../utils/axios';

const CountriesCtx = createContext();

const CountriesContextProvider = ({ children }) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [countries, setCountries] = useState([]);
  const [cardData, setCardData] = useState({
    grn_change: 0,
    last_month_grn: 0,
    total_countries: 0,
    total_grn: 0,
    total_tenants: 0,
    total_farmers: 0,
    total_warehouses: 0,
  });

  useEffect(() => {
    const fetchCountryCardData = async () => {
      const response = await axios.get('countries');

      if (response.data.responseCode !== '100') return;

      const { summary } = response.data;

      setCardData((prev) => ({ ...prev, ...summary }));
    };

    const fetchCountries = async () => {
      setDataLoaded(false);
      const resp = await axios.get('countries');

      if (!resp.data || resp.data.responseCode !== '100') return;

      setCountries(resp.data.data);

      setDataLoaded(true);
    };

    fetchCountryCardData();
    fetchCountries();
  }, []);
  return (
    <CountriesCtx.Provider value={{ countries, dataLoaded, cardData }}>
      {children}
    </CountriesCtx.Provider>
  );
};

export const useCountriesCtx = () => useContext(CountriesCtx);
export default CountriesContextProvider;