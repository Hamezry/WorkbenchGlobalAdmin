import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from '../../../utils/axios';

import { useTenantsCtx } from '../../../contexts';

import TransactionSummary from './components/transaction-summary';
import ServiceList from './components/service-list';
import StockPosition from './components/stock-position';
import Clients from './components/clients';

function SingleTenant() {
  // Remember to fetch Organization list from context
  const { id } = useParams();
  const { tenants } = useTenantsCtx();

  const [client, setClient] = useState([]);
  const [service, setService] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [summary, setSummary] = useState([]);

  const [userCount, setUserCount] = useState(true);
  const [storageCount, setStorageCount] = useState(false);

  const [overallCount, setOverallCount] = useState(0);

  const org = tenants.filter((el) => el.id === id)[0];

  //SERVICE TOGGLE BUTTON FUNCTIONS
  const [switch_list, setSwitchList] = useState({
    accounting_setting: false,
    csd_setting: false,
    ewr_setting: false,
    logistics_setting: false,
    overage_setting: false,
    plant_setting: false,
    registration_setting: false,
    verification_setting: false,
  });

  // Modal Toggle State. Sets all the modals to false to hide all modals
  const intial_modal_state = {
    account: false,
    csd: false,
    ewr: false,
    logistic: false,
    overage: false,
    plant: false,
    reg: false,
    verification: false,
  };

  const [modalsService, setModals] = useState(intial_modal_state);
  const showModal = (key) => {
    setModals((prev) => ({ ...prev, [key]: true }));
  };

  const closeModal = () => {
    setModals(intial_modal_state);
  };
  /**
   *
   * @param {'accounting_setting' | 'csd_setting' | 'ewr_setting' | 'logistics_setting' | 'overage_setting' | 'plant_setting' | 'registration_setting' | 'verification_setting'} setting
   * @param {'True' | 'False'} value
   */
  const change_status = async (setting, value) => {
    console.log(switch_list);
    const response = await axios.post(`tenant/update/setting/${id}`, {
      setting: setting,
      value: value,
    });

    if (!response.data || response.data.responseCode !== '100') return;

    await fetchServiceListInfo();
    closeModal();
  };

  // API Requests
  const fetchClientGraph = async () => {
    const res = await axios.get(`client/graph/${id}`);

    if (!res.data || res.data.responseCode !== '100') return;

    setClient(res.data);

    const handleSum = (array) => {
      return array.reduce((acc, obj) => acc + obj.count, 0);
    };

    const count = handleSum(res.data.data);
    setOverallCount(count);
  };

  const fetchClientTransactions = async () => {
    const res = await axios.get(`transaction/summary/${id}`);

    if (!res.data || res.data.responseCode !== '100') return;

    setTransaction(res.data.data);
  };

  const fetchServiceListInfo = async () => {
    const res = await axios.get(`tenant/info/${id}`);

    if (!res.data || res.data.responseCode !== '100') return;

    setService(res.data.data);

    const switchList = res.data.data.service_list;

    setSwitchList((prev) => ({ ...prev, ...switchList }));
  };

  const fetchStockPositon = async () => {
    const res = await axios.get(`stock/position/${id}`);

    if (!res.data || res.data.responseCode !== '100') return;

    setSummary(res.data);
  };

  useEffect(() => {
    //CLIENT API CALL
    fetchClientGraph();

    //TRANSACTION SUMMARY API CALL
    fetchClientTransactions();

    //TENANT SERVICE INFO API CALL
    fetchServiceListInfo();

    //STOCK POSITION API CALL
    fetchStockPositon();

    // eslint-disable-next-line
  }, []);

  return (
    <div className='w-[84%] font-muli text-[#54565B] h-[calc(100vh-90px)] p-1'>
      <div className='w-[100%] h-[80px] bg-white p-4 flex justify-between'>
        <div className='flex w-[400px] items-center gap-2'>
          <img
            src={org.country.country_flag}
            alt={org.company_name}
            className='w-[22px] rounded'
          />
          <p>{org.company_name} </p>
        </div>

        <div className='flex gap-3 rounded-lg items-center text-[12px] text-[#38CB89]'>
          <div className=' bg-[#38CB89] flex gap-1 rounded-lg items-center text-[12px] text-white h-[40px] w-[80px] p-3 '>
            <p>Activate</p>
          </div>

          <div className='flex gap-1 rounded-lg items-center text-[12px] text-gray-500  bg-[#FBFBFB] h-[40px] w-[80px] p-3'>
            <Link to='/'>Back</Link>
          </div>
        </div>
      </div>

      <div className='w-[100%]  h-[calc(100%-80px)] overflow-y-auto flex gap-9'>
        <div className='mt-[30px] h-[800px] rounded-3xl bg-[#F9F9F9] p-8 w-[65%] overflow-y-auto'>
          <Clients clients={client?.data} overallCount={overallCount} />

          <TransactionSummary transaction={transaction} />

          <ServiceList
            switch_list={switch_list}
            modalsService={modalsService}
            change_status={change_status}
            closeModal={closeModal}
            service={service}
            userCount={userCount}
            setUserCount={setUserCount}
            storageCount={storageCount}
            setStorageCount={setStorageCount}
            showModal={showModal}
          />
        </div>

        <StockPosition stock={summary?.data} />
      </div>
    </div>
  );
}

export default SingleTenant;