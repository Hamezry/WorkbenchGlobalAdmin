import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../utils/axios';

const GlobalTenantsCtx = createContext();

const GlobalTenantsProvider = ({ children }) => {
  const [cardData, setCardData] = useState({
    active_tenants: {
      total_active: 4500,
      inactive_tenants: 4000,
    },
    available_tenants: {
      total: 3500,
      last_month: 3200,
    },
    csd_access: {
      total: 3500,
      last_month: 3000,
    },
    highest_tenant_num: {
      name: 'Nigeria',
      country_flag: 'https://countryflagsapi.com/svg/nga',
      no_of_tenants: 54,
    },
  });

  const fetchGlobalTenantsCardData = async () => {
    const response = await axios.get('tenant/global/list');

    if (response.data.responseCode !== '100') return;

    const { summary } = response.data;

    setCardData((prev) => ({ ...prev, ...summary }));
  };

  useEffect(() => {
    fetchGlobalTenantsCardData();
  }, []);

  return (
    <GlobalTenantsCtx.Provider value={{ cardData }}>
      {children}
    </GlobalTenantsCtx.Provider>
  );
};

export const useGlobalTenantsCardCtx = () => useContext(GlobalTenantsCtx);

export default GlobalTenantsProvider;
