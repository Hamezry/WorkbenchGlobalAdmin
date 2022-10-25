import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Tabs } from "@mantine/core";
import axios from "../../../utils/axios";
import { useTenantsCtx } from "../../../contexts";
import notification from "../../../utils/notification";

import ActivateModal from "../modal/activate";
import DeactivateModal from "../modal/deactivate";
import TransactionSummary from "./components/transaction-summary";
import ServiceList from "./components/service-list";
import Table from "./components/positions-table";
import Clients from "./components/clients";

import empty from "../../../Assets/empty.gif";

function SingleTenant() {
  const { id } = useParams();
  localStorage.setItem("fetchId", id);
  const { tenants } = useTenantsCtx();

  const [client, setClient] = useState([]);
  const [service, setService] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [summary, setSummary] = useState([]);
  const [warehouseList, setWarehouseList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [title, setTitle] = useState("Stock");
  const [input, setInput] = useState([]);

  const [currentlyDisplayed, setCurrentlyDisplayed] = useState(null);

  const [userCount, setUserCount] = useState(true);
  const [storageCount, setStorageCount] = useState(false);

  const [overallCount, setOverallCount] = useState(0);

  const org = tenants.filter((el) => el.id === id)[0];

  const [viewActivate, setViewActivate] = useState(false);
  const [viewDeactivate, setViewDeactivate] = useState(false);
  // const modalData = org.id;
  const tenantInputPosition = async () => {
    const respI = await axios.get(`input/position/${id}`);

    if (!respI.data || respI.data.responseCode !== "100") return;
    setInput(respI.data.data);
  };
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
    const response = await axios.post(`tenant/update/setting/${id}`, {
      setting: setting,
      value: value,
    });

    if (!response.data || response.data.responseCode !== "100") {
      return notification({
        id: "error",
        heading: "Oops! Something went wrong",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      });
    }

    await fetchServiceListInfo();
    notification({
      id: "success",
      heading: "Service List updated successfully",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    });
    closeModal();
  };

  // API Requests
  const fetchClientGraph = async () => {
    const res = await axios.get(`client/graph/${id}`);

    if (!res.data || res.data.responseCode !== "100") return;

    setClient(res.data);

    const handleSum = (array) => {
      return array.reduce((acc, obj) => acc + obj.count, 0);
    };

    const count = handleSum(res.data.data);
    setOverallCount(count);
  };

  const fetchClientTransactions = async () => {
    const res = await axios.get(`transaction/summary/${id}`);

    if (!res.data || res.data.responseCode !== "100") return;
    setTransaction(res.data.data);
  };

  const fetchServiceListInfo = async () => {
    const res = await axios.get(`tenant/info/${id}`);

    if (!res.data || res.data.responseCode !== "100") return;

    setService(res.data.data);

    const switchList = res.data.data.service_list;

    setSwitchList((prev) => ({ ...prev, ...switchList }));
  };

  const fetchStockPositon = async () => {
    const res = await axios.get(`stock/position/${id}`);

    if (!res.data || res.data.responseCode !== "100") return;

    setSummary(res.data.data);
  };

  const fetchWarehouseList = async () => {
    const res = await axios.get(`tenant/warehouses/${id}`);

    if (!res.data || res.data.responseCode !== "100") return;

    setWarehouseList(res.data.data);
  };

  const fetchLocationList = async () => {
    const res = await axios.get(`tenant/location/list/${id}`);

    if (!res.data || res.data.responseCode !== "100") return;

    setLocationList(res.data.data);
  };

  const fetchItemList = async () => {
    const res = await axios.get(`tenant/items/${id}`);

    if (!res.data || res.data.responseCode !== "100") return;

    setItemList(res.data.data);
  };

  const handleWarehouseFilter = async (myId) => {
    const res = await axios.get(`transaction/summary/${id}?warehouse=${myId}`);

    if (!res.data || res.data.responseCode !== "100") return;

    setTransaction(res.data.data);
  };

  const handleLocationFilter = async (myId) => {
    const res = await axios.get(`transaction/summary/${id}?location=${myId}`);

    if (!res.data || res.data.responseCode !== "100") return;

    setTransaction(res.data.data);
  };

  const handleItemFilter = async (myId) => {
    const res = await axios.get(`transaction/summary/${id}?item=${myId}`);

    if (!res.data || res.data.responseCode !== "100") return;

    setTransaction(res.data.data);
  };

  useEffect(() => {
    //input postion call
    tenantInputPosition();

    //CLIENT API CALL
    fetchClientGraph();

    //TRANSACTION SUMMARY API CALL
    fetchClientTransactions();

    //TENANT SERVICE INFO API CALL
    fetchServiceListInfo();

    //STOCK POSITION API CALL
    fetchStockPositon();

    //LOCATION LIST API CALL
    fetchLocationList();

    //WAREHOUSE LIST API CALL
    fetchWarehouseList();

    //ITEM LIST API CALL
    fetchItemList();

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
          <div>
            {org.is_active === "True" ? (
              <button
                className='flex justify-center gap-2 cursor-pointer rounded items-center text-[15px] text-white bg-[#e55851] h-[40px] w-full p-4 hover:ring-1 hover:ring-[#e55851] hover:bg-white hover:text-[#e55851]'
                onClick={() => {
                  setViewDeactivate(true);
                }}>
                De-activate
              </button>
            ) : (
              <button
                className='flex justify-center cursor-pointer  gap-2 rounded items-center text-[15px] text-white bg-[#38CB89] h-[40px] w-full p-4 hover:ring-1 hover:ring-afexgreen hover:bg-white hover:text-afexgreen'
                onClick={() => {
                  setViewActivate(true);
                }}>
                Activate
              </button>
            )}
          </div>

          <Link
            to='/'
            className='flex justify-center gap-2 rounded items-center text-[15px] text-gray-400 bg-[#f4f3f3] h-[40px] w-[90px] p-4 hover:ring-1 hover:ring-gray-500'>
            Back
          </Link>
        </div>
      </div>

      <div className='w-[100%]  h-[calc(100%-80px)] overflow-y-auto flex gap-9'>
        <div className='mt-[30px] h-[800px] rounded-3xl bg-[#F9F9F9] p-8 w-[65%] overflow-y-auto'>
          <Clients clients={client.data} overallCount={overallCount} />

          <TransactionSummary
            transaction={transaction}
            locationList={locationList}
            warehouseList={warehouseList}
            itemList={itemList}
            handleWarehouseFilter={handleWarehouseFilter}
            handleLocationFilter={handleLocationFilter}
            handleItemFilter={handleItemFilter}
          />

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

        <div className='w-[35%] flex mt-[30px] h-[800px] rounded-3xl bg-[#F9F9F9] p-8 overflow-y-auto relative'>
          <div className='bg-[#FFFF] w-full overflow-x-auto rounded-3xl relative h-full'>
            {" "}
            <div className='mb-2  p-4'>
              <h2 className='text-xl'>Overall {title} Position</h2>
            </div>
            {summary.length > 0 ? (
              <Tabs
                defaultValue='commodities'
                color='green'
                onTabChange={(value) => setCurrentlyDisplayed(null)}
                styles={{
                  tab: {
                    color: "#C9C8C6",
                    '&[data-active="true"]': {
                      color: "#38CB89",
                    },
                  },
                  tabsList: {
                    borderBottom: "1px solid rgba(201, 200, 198, .5)",
                  },
                }}>
                <Tabs.List>
                  <Tabs.Tab
                    value='commodities'
                    onClick={() => setTitle("Stock")}>
                    Stock
                  </Tabs.Tab>
                  <Tabs.Tab value='inputs' onClick={() => setTitle("Inputs")}>
                    Inputs
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value='commodities' pt='xs'>
                  <Table
                    data={summary}
                    headers={["Commodity", "Grade", "Volume(MT)", "Lien(MT)"]}
                    title='commodities'
                    currentlyDisplayed={currentlyDisplayed}
                    setCurrentlyDisplayed={setCurrentlyDisplayed}
                  />
                </Tabs.Panel>

                <Tabs.Panel value='inputs' pt='xs'>
                  <Table
                    data={input}
                    headers={["Input", "Lien units", "Units"]}
                    title='inputs'
                    currentlyDisplayed={currentlyDisplayed}
                    setCurrentlyDisplayed={setCurrentlyDisplayed}
                  />
                </Tabs.Panel>
              </Tabs>
            ) : (
              <div className='flex items-center h-[70%]'>
                <div className='flex flex-col items-center py-2 px-6 text-center space-y-4 '>
                  <img
                    src={empty}
                    alt='no products gif'
                    className='h-[150px]'
                  />
                  <p>No Records Created Yet.</p>
                  <p className='text-[#9FA19C] text-[14px]'>
                    There are no records logged in the database at this time.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      {viewActivate && (
        <ActivateModal setViewActivate={setViewActivate} modalData={org} />
      )}
      {viewDeactivate && (
        <DeactivateModal
          setViewDeactivate={setViewDeactivate}
          modalData={org}
        />
      )}
    </div>
  );
}

export default SingleTenant;
