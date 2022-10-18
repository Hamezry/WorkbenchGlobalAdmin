import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../utils/axios';
import manager from '../utils/encryption';

const TenantsListCtx = createContext();

const TenantsListProvider = ({ children }) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [tenants, setTenants] = useState([]);
  const [cardData, setCardData] = useState({
    active_tenants: {
      total_active: 0,
      inactive_tenants: 0,
    },
    available_tenants: {
      total: 0,
      last_month: 0,
    },
    csd_access: {
      total: 0,
      last_month: 0,
    },
    highest_tenant_num: {
      name: 'Nigeria',
      country_flag: 'https://countryflagsapi.com/svg/nga',
      no_of_tenants: 0,
    },
  });

  const refreshContext = () => setRefresh((s) => !s);

  useEffect(() => {
    const fetchGlobalTenantsCardData = async () => {
      const response = await axios.get('tenant/global/list');

      if (response.data.responseCode !== '100') return;

      const { summary } = response.data;

      setCardData((prev) => ({ ...prev, ...summary }));
    };

    const fetchTenants = async () => {
      setDataLoaded(false);
      const resp = await axios.get('tenant/list');

      if (!resp.data || resp.data.responseCode !== '100') return;

      const decrypted = manager.decrypt(resp.data.data);

      if (!decrypted) return;

      setTenants(decrypted);

      setDataLoaded(true);
    };

    fetchGlobalTenantsCardData();
    fetchTenants();
  }, [refresh]);
  return (
    <TenantsListCtx.Provider
      value={{ tenants, dataLoaded, cardData, refreshContext }}>
      {children}
    </TenantsListCtx.Provider>
  );
};

export const useTenantsCtx = () => useContext(TenantsListCtx);
export default TenantsListProvider;
