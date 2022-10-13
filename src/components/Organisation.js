import React, { useEffect, useState } from 'react';
import axios from 'axios';
import chatIcon from '../Assets/circBar.svg';
import profIcon from '../Assets/profile.svg';
import dot from '../Assets/Ellipse.svg';
import filterIcon from '../Assets/filter.svg';
import { FaGreaterThan } from 'react-icons/fa';
import { FaLessThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DateModule from './Datemodule';
import {
  AccountingModal,
  CSDModal,
  EWRModal,
  LogisticsModal,
  OverageModal,
  PlantModal,
  RegistrationModal,
  VerificationModal,
} from '../modal/service-list';

function Organisation({ list, setList }) {
  const token = localStorage.getItem('workbench-app-token');
  const options = {
    headers: { Authorization: `WB3 ${token}` },
  };

  const [isDate, setIsDate] = useState(false);

  const [userCount, setUserCount] = useState(true);
  const [storageCount, setStorageCount] = useState(false);

  const [client, setClient] = useState([]);
  const [service, setService] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [summary, setSummary] = useState([]);
  const [overallCount, setOverallCount] = useState(0);
  const { id } = useParams();

  const org = list?.data.filter((el) => el.id === id)[0];

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
    const response = await axios.post(
      `https://wb-temp.afexnigeria.com/WB3/api/v1/tenant/update/setting/${id}`,
      {
        setting: setting,
        value: value,
      },
      options
    );

    if (!response.data || response.data.responseCode !== '100') return;

    await fetchServiceListInfo();
    closeModal();
  };

  // API Requests
  const fetchClientGraph = async () => {
    const res = await axios.get(
      `https://wb-temp.afexnigeria.com/WB3/api/v1/client/graph/${id}`,
      options
    );

    if (!res.data || res.data.responseCode !== '100') return;

    setClient(res.data);

    const handleSum = (array) => {
      return array.reduce((acc, obj) => acc + obj.count, 0);
    };

    const count = handleSum(res.data.data);
    setOverallCount(count);
  };

  const fetchClientTransactions = async () => {
    const res = await axios.get(
      `https://wb-temp.afexnigeria.com/WB3/api/v1/transaction/summary/${id}`,
      options
    );

    if (!res.data || res.data.responseCode !== '100') return;

    setTransaction(res.data.data);
  };

  const fetchServiceListInfo = async () => {
    const res = await axios.get(
      `https://wb-temp.afexnigeria.com/WB3/api/v1/tenant/info/${id}`,
      options
    );

    if (!res.data || res.data.responseCode !== '100') return;

    setService(res.data.data);

    const switchList = res.data.data.service_list;

    setSwitchList((prev) => ({ ...prev, ...switchList }));
  };

  const fetchStockPositon = async () => {
    const res = await axios.get(
      `https://wb-temp.afexnigeria.com/WB3/api/v1/stock/position/${id}`,
      options
    );

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
            alt=''
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
          <div className='bg-[#FFFF] p-3 rounded-3xl w-full'>
            <div className='mb-3 border-b border-gray-200 p-5'>
              <h1>Clients</h1>
            </div>

            <div className='flex p-5 w-full items-center justify-around'>
              <div className='p-5 gap-4 flex flex-col items-center'>
                <span>Total Number </span>
                <p>{overallCount}</p>
                <img src={chatIcon} alt='' />
              </div>

              <div className='flex flex-col text-[12px] gap-3'>
                <p>Impressions</p>

                {client?.data?.map((item, index) => {
                  return (
                    <div
                      className='flex justify-between items-center gap-6 px-5 bg-[#FAFBFC] rounded-3xl w-[300px] h-[36px]'
                      key={index}>
                      <div className='flex gap-5'>
                        <img src={dot} alt='' />
                        <span>{item.category}</span>
                      </div>
                      <span>{item.count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className='bg-[#FFFF]  p-4 mt-8 rounded-3xl w-full'>
            <div className='flex items-center border-b border-gray-200 justify-between p-3'>
              <div className='flex gap-2'>
                <p>Transaction Summary .</p>
                <span className='text-[#C9C8C6]'>14 Jun, 2022</span>
              </div>

              <div className='flex gap-6'>
                <div class=' flex gap-12 p-3 cursor-pointer rounded-2xl text-sm text-[#C9C8C6] bg-[#F9F9F9] h-[54px w-[186px]'>
                  <p>Filter by date</p>
                  <p
                    onClick={() => {
                      setIsDate(!isDate);
                    }}>
                    &#62;
                  </p>
                </div>

                <div className='border-2 border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89]  bg-[#FBFBFB] h-[40px] w-[86px] p-4'>
                  <img src={filterIcon} alt='' />
                  <button>Filter</button>
                </div>
              </div>
              {isDate && <DateModule />}
            </div>

            {/*TABLE */}
            <div className='p-3 mt-4'>
              <table class='border-collapse w-full'>
                <thead>
                  <tr>
                    <th class='p-2 font-bold bg-[#F2F2F2] text-gray-600 border border-gray-300 table-cell'>
                      Transaction
                    </th>
                    <th class='p-2 font-bold bg-[#F2F2F2] text-gray-600 border border-gray-300 table-cell'>
                      Gross Weight (KG)
                    </th>
                    <th class='p-2 font-bold bg-[#F2F2F2] text-gray-600 border border-gray-300 table-cell'>
                      Net Weight (KG)
                    </th>
                    <th class='p-2 font-bold bg-[#F2F2F2] text-gray-600 border border-gray-300 table-cell'>
                      Units
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr class='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td class='w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static'>
                      Uploaded Balance
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      {transaction.uploaded_balance
                        ? transaction.uploaded_balance.total_gross_weight
                        : '0'}
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      {transaction.uploaded_balance
                        ? transaction.uploaded_balance.total_net_weight
                        : '0'}
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      {transaction.uploaded_balance
                        ? transaction.uploaded_balance.total_units
                        : '0'}
                    </td>
                  </tr>

                  <tr class='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td class='w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static'>
                      Goods Received
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      {transaction.goods_recieveed
                        ? transaction.goods_recieveed.total_gross_weight
                        : '0'}
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      {transaction.goods_recieveed
                        ? transaction.goods_recieveed.total_net_weight
                        : '0'}
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      {transaction.goods_recieveed
                        ? transaction.goods_recieveed.total_units
                        : '0'}
                    </td>
                  </tr>

                  <tr class='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td class='w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static'>
                      Received Transfer
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      21.780
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      21
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      21
                    </td>
                  </tr>

                  {/*TOTAL IN */}
                  <tr class='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td class='w-full bg-white lg:w-auto p-3 text-gray-800 text-center'>
                      Total IN
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      {transaction.total_in
                        ? transaction.total_in.total_gross_weight
                        : '0'}
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      {transaction.total_in
                        ? transaction.total_in.total_net_weight
                        : '0'}
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      {transaction.total_in
                        ? transaction.total_in.total_units
                        : '0'}
                    </td>
                  </tr>

                  <tr class='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td class='w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static'>
                      Dispatches
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      {transaction.dispatches
                        ? transaction.dispatches.total_gross_weight
                        : '0'}
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      {transaction.dispatches
                        ? transaction.dispatches.total_net_weight
                        : '0'}
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      {transaction.dispatches
                        ? transaction.dispatches.total_units
                        : '0'}
                    </td>
                  </tr>

                  <tr class='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td class='w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static'>
                      IWH Transfers
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      12.32
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      12
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      12
                    </td>
                  </tr>

                  <tr class='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td class='bg-white w-auto p-3 text-gray-800 text-center'>
                      Total OUT
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      {transaction.total_out
                        ? transaction.total_out.total_gross_weight
                        : '0'}
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      {transaction.total_out
                        ? transaction.total_out.total_net_weight
                        : '0'}
                    </td>
                    <td class='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                      {transaction.total_out
                        ? transaction.total_out.total_units
                        : '0'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='flex gap-4 mt-3 p-6 '>
            <div className='w-[50%] h-[350px] flex flex-col gap-3 overflow-y-auto rounded-3xl p-6 bg-[#FFFF]'>
              <div className='flex justify-between p-3 border-b '>
                <p>Service List</p>
                <p className='text-green-400 text-bold text-xs'>See all</p>
              </div>

              <div className='flex justify-between mt-6 items-center'>
                <p>Accounting Module</p>
                <label class='inline-flex relative items-center mr-5 cursor-pointer'>
                  <input
                    type='checkbox'
                    className='sr-only peer'
                    checked={switch_list.accounting_setting}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      showModal('account');
                    }}
                    className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "></div>

                  {modalsService.account && (
                    <AccountingModal
                      show={modalsService.account}
                      close={closeModal}
                      activate={() =>
                        change_status('accounting_setting', 'True')
                      }
                      active={switch_list.accounting_setting}
                      deactivate={() =>
                        change_status('accounting_setting', 'False')
                      }
                    />
                  )}
                </label>
              </div>

              <div className='flex justify-between mt-6 items-center'>
                <p>CSD Module</p>
                <label class='inline-flex relative items-center mr-5 cursor-pointer'>
                  <input
                    type='checkbox'
                    className='sr-only peer'
                    checked={switch_list.csd_setting}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      showModal('csd');
                    }}
                    className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "></div>
                  {modalsService.csd && (
                    <CSDModal
                      show={modalsService.csd}
                      close={closeModal}
                      activate={() => change_status('csd_setting', 'True')}
                      active={switch_list.csd_setting}
                      deactivate={() => change_status('csd_setting', 'False')}
                    />
                  )}
                </label>
              </div>

              <div className='flex justify-between mt-6 items-center'>
                <p>EWR Module</p>
                <label class='inline-flex relative items-center mr-5 cursor-pointer'>
                  <input
                    type='checkbox'
                    className='sr-only peer'
                    checked={switch_list.ewr_setting}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      showModal('ewr');
                    }}
                    className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "></div>
                </label>
                {modalsService.ewr && (
                  <EWRModal
                    show={modalsService.ewr}
                    close={closeModal}
                    activate={() => change_status('ewr_setting', 'True')}
                    active={switch_list.ewr_setting}
                    deactivate={() => change_status('ewr_setting', 'False')}
                  />
                )}
              </div>

              <div className='flex justify-between mt-6 items-center'>
                <p>Logistics Module</p>
                <label class='inline-flex relative items-center mr-5 cursor-pointer'>
                  <input
                    type='checkbox'
                    className='sr-only peer'
                    checked={switch_list.logistics_setting}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      showModal('logistic');
                    }}
                    className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "></div>
                </label>
                {modalsService.logistic && (
                  <LogisticsModal
                    show={modalsService.logistic}
                    close={closeModal}
                    activate={() => change_status('logistics_setting', 'True')}
                    active={switch_list.logistics_setting}
                    deactivate={() =>
                      change_status('logistics_setting', 'False')
                    }
                  />
                )}
              </div>

              <div className='flex justify-between mt-6 items-center'>
                <p>Overage Module</p>
                <label class='inline-flex relative items-center mr-5 cursor-pointer'>
                  <input
                    type='checkbox'
                    className='sr-only peer'
                    checked={switch_list.overage_setting}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      showModal('overage');
                    }}
                    className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "></div>
                </label>
                {modalsService.overage && (
                  <OverageModal
                    show={modalsService.overage}
                    close={closeModal}
                    activate={() => change_status('overage_setting', 'True')}
                    active={switch_list.overage_setting}
                    deactivate={() => change_status('overage_setting', 'False')}
                  />
                )}
              </div>

              <div className='flex justify-between mt-6 items-center'>
                <p>Plant Module</p>
                <label class='inline-flex relative items-center mr-5 cursor-pointer'>
                  <input
                    type='checkbox'
                    className='sr-only peer'
                    checked={switch_list.plant_setting}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      showModal('plant');
                    }}
                    className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "></div>
                </label>
                {modalsService.plant && (
                  <PlantModal
                    show={modalsService.plant}
                    close={closeModal}
                    activate={() => change_status('plant_setting', 'True')}
                    active={switch_list.plant_setting}
                    deactivate={() => change_status('plant_setting', 'False')}
                  />
                )}
              </div>

              <div className='flex justify-between mt-6 items-center'>
                <p>Registration Module</p>
                <label class='inline-flex relative items-center mr-5 cursor-pointer'>
                  <input
                    type='checkbox'
                    className='sr-only peer'
                    checked={switch_list.registration_setting}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      showModal('reg');
                    }}
                    className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "></div>
                </label>
                {modalsService.reg && (
                  <RegistrationModal
                    show={modalsService.reg}
                    close={closeModal}
                    activate={() =>
                      change_status('registration_setting', 'True')
                    }
                    active={switch_list.registration_setting}
                    deactivate={() =>
                      change_status('registration_setting', 'False')
                    }
                  />
                )}
              </div>

              <div className='flex justify-between mt-6 items-center'>
                <p>Verification Module</p>
                <label class='inline-flex relative items-center mr-5 cursor-pointer'>
                  <input
                    type='checkbox'
                    className='sr-only peer'
                    checked={switch_list.verification_setting}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      showModal('verification');
                    }}
                    className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "></div>
                </label>
                {modalsService.verification && (
                  <VerificationModal
                    show={modalsService.verification}
                    close={closeModal}
                    activate={() =>
                      change_status('verification_setting', 'True')
                    }
                    active={switch_list.registration_setting}
                    deactivate={() =>
                      change_status('verification_setting', 'False')
                    }
                  />
                )}
              </div>
            </div>

            <div className='flex flex-col w-[50%] h-[350px] items-center gap-10'>
              {userCount && (
                <div className='relative bg-[#FFFF] w-full h-[50%] rounded-xl  flex gap-10 px-8 items-center'>
                  <img src={profIcon} alt='' />

                  <div className='font-semibold text-[25px]'>
                    <p className='text-[14px] text-[#B4B4B0] mb-5'>
                      User Account
                    </p>
                    <p>
                      {' '}
                      <span className='text-[#9FA19C]'>
                        {service.users ? service.users.active : '0'}{' '}
                      </span>
                      /{service.users ? service.users.total : '0'}
                    </p>
                  </div>

                  <div className=' absolute right-8 top-8 flex gap-5 '>
                    <button>
                      <FaLessThan className='h-[18px] text-[#B4B4B0] font-light ' />
                    </button>
                    <button
                      onClick={() => {
                        setUserCount(false);
                        setStorageCount(true);
                      }}>
                      <FaGreaterThan className='h-[18px]' />
                    </button>
                  </div>
                </div>
              )}

              {storageCount && (
                <div className='relative bg-[#FFFF] w-full h-[50%] rounded-xl  flex gap-10 px-8 items-center'>
                  <img src={profIcon} alt='' />

                  <div className='font-semibold text-[25px]'>
                    <p className='text-[14px] text-[#B4B4B0] mb-5'>
                      Storage Capacity (MT)
                    </p>
                    <p>
                      {' '}
                      <span className='text-[#9FA19C]'>
                        {service.storage_capacity
                          ? service.storage_capacity.total_capacity
                          : '0'}{' '}
                      </span>
                      /
                      {service.storage_capacity
                        ? service.storage_capacity.total_utilization
                        : '0'}
                    </p>
                  </div>

                  <div className=' absolute right-8 top-8 flex gap-5 '>
                    <button
                      onClick={() => {
                        setUserCount(true);
                        setStorageCount(false);
                      }}>
                      <FaLessThan className='h-[18px] font-light ' />
                    </button>
                    <button>
                      <FaGreaterThan className='h-[18px] text-[#B4B4B0]' />
                    </button>
                  </div>
                </div>
              )}

              <div className=' bg-[#FFFF] w-full h-[50%] rounded-xl p-8 items-center flex gap-14'>
                <p className='text-[25px]'>
                  {' '}
                  <span className='text-[14px]'>
                    Warehouse Count
                  </span> <br />{' '}
                  {service.warehouse_count ? service.warehouse_count : '0'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex mt-[30px] h-[800px] rounded-3xl bg-[#F9F9F9] p-8 w-[35%] overflow-y-auto'>
          <div className='bg-[#FFFF] w-full overflow-x-auto rounded-3xl'>
            <div className='mb-2 border-b border-gray-200 p-4'>
              <h1>Overall Stock Position</h1>
            </div>

            <div className='w-full overflow-x-auto p-5'>
              <table className='w-full over p-6'>
                <thead>
                  <tr className='bg-[#F9F9F9] text-left text-[#54565B] text-[14px]'>
                    <th className='py-2 px-2 '>Commodity</th>
                    <th className='py-2 px-2 '>Grade</th>
                    <th className='py-2 px-2 '>Volume(MT)</th>
                    <th className='py-2 px-2 '>Lien(MT)</th>
                  </tr>
                </thead>

                <tbody className='text-[#54565B] text-[12px] font-light'>
                  {summary?.data?.map((item) => {
                    return (
                      <tr className='text-left border-b border-gray-200 hover:bg-[#e3f7ee]'>
                        <td className='py-4 px-2'>
                          <span className='font-medium'>{item.item_code}</span>
                        </td>

                        <td className='py-4 px-2 '>
                          <span className='font-medium'>Grade{item.grade}</span>
                        </td>

                        <td className='py-4 px-2'>
                          <span className='font-medium '>
                            {item.location_breakdown[0].volume}
                          </span>
                        </td>

                        <td className='py-4 px-2'>
                          <span className='font-medium '>
                            {item.total_lien_weight}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organisation;
