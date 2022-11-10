import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../utils/axios';
import { default as fetchMap } from 'axios';

const CountriesCtx = createContext();

const CountriesContextProvider = ({ children }) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [countries, setCountries] = useState([]);
  const [mapData, setMapData] = useState(null);
  const [listItem, setListItem] = useState();
  const [singleCommodity, setSingleCommodity] = useState();
  const [cardData, setCardData] = useState({
    grn_change: 0,
    last_month_grn: 0,
    total_countries: 0,
    total_grn: 0,
    total_tenants: 0,
    total_farmers: 0,
    total_warehouses: 0,
  });

  const refreshContext = () => setRefresh((s) => !s);


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

      setCountries(
        resp.data.data.sort((a, b) => b.no_of_tenants - a.no_of_tenants)
      );

      setDataLoaded(true);
    };

    const fetchCountriesMap = async () => {
      const resp = await fetchMap.get('https://code.highcharts.com/mapdata/custom/africa.geo.json');
      if (!resp.data || resp.status !== 200) return;
      setMapData(
        resp.data
      );
    };

    const fetchItemList = async () => {
      const response = await axios.get('global-products?product_type=Commodity');

      if (response.data.responseCode !== '100') return;


      setListItem(response.data.data);
    };

    const fetchCommodityList = async () => {
      const response = await axios.get('countries?commodity=CCO');

      if (response.data.responseCode !== '100') return;


      setSingleCommodity(response.data.data);
    };




    fetchCountriesMap();
    fetchCountryCardData();
    fetchCountries();
    fetchItemList();
    fetchCommodityList();
  }, [refresh]);

  const handleCommodityFilter = async (code) => {
    const res = await axios.get(`countries?commodity=${code}`);

    if (!res.data || res.data.responseCode !== '100') return;

    setSingleCommodity(res.data.data);
  };

  return (
    <CountriesCtx.Provider
      value={{ countries, dataLoaded, cardData, refreshContext, mapData, listItem, singleCommodity, handleCommodityFilter }}>
      {children}
    </CountriesCtx.Provider>
  );
};

export const useCountriesCtx = () => useContext(CountriesCtx);
export default CountriesContextProvider;
