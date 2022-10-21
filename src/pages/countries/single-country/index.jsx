import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Tabs } from '@mantine/core';

import axios from '../../../utils/axios';
import { useCountriesCtx } from '../../../contexts';

import Adminlist from './components/admin-table';
import NoAdminLevel from './components/no-admin';
import People from './components/people';
import Table from './components/position-table/table';

import empty from '../../../Assets/empty.gif';

function Country() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { countries, cardData } = useCountriesCtx();
  const [singleCountry, setSingleCountry] = useState({});

  const [stock, setStock] = useState([]);
  const [input, setInput] = useState([]);
  const [list, setList] = useState([]);
  const [title, setTitle] = useState('Stock');

  const [currentlyDisplayed, setCurrentlyDisplayed] = useState(null);
  const totalFarmers = cardData.total_farmers;
  const totalTenants = cardData.total_tenants;
  const singleTenant = singleCountry.no_of_tenants;
  const singleFarmer = singleCountry.no_of_farmers;

  useEffect(() => {
    const countryStockPosition = async () => {
      const respS = await axios.get(`country/stock/position/${id}`);

      if (!respS.data || respS.data.responseCode !== '100') return;

      setStock(respS.data.data);
    };
    const countryInputPosition = async () => {
      const respI = await axios.get(`country/input/position/${id}`);

      if (!respI.data || respI.data.responseCode !== '100') return;
      setInput(respI.data.data);
    };

    const countryAdminLevels = async () => {
      const resp = await axios.get(`admin/levels/${id}`);

      if (!resp.data || resp.data.responseCode !== '100') return;

      setList(resp.data.data);
    };

    countryStockPosition();
    countryInputPosition();
    countryAdminLevels();
    // eslint-disable-next-line
  }, [id]);

  // Redirect to countries on reload;
  useEffect(() => {
    const singleCountry = countries.filter((el) => el.pk === Number(id))[0];
    if (!singleCountry || countries.length === 0) {
      return navigate('/countries');
    }
    setSingleCountry(singleCountry);

    //eslint-disable-next-line
  }, [countries, id]);

  return (
    <div className='w-[84%] font-muli text-[#54565B] h-[calc(100vh-90px)] p-1'>
      <div className='w-[100%] h-[80px] bg-white p-4 flex justify-between'>
        <div className='flex w-[400px] items-center gap-2'>
          <img
            src={singleCountry.country_flag}
            alt={singleCountry.name}
            className='w-[25px] rounded'
          />
          <p>{singleCountry.name}</p>
        </div>

        <Link
          to='/countries/list'
          className=' rounded-lg items-center text-[12px] text-gray-500  bg-[#FBFBFB] h-[40px] w-[80px] p-3 text-center hover:ring-1 hover:ring-gray-400'>
          Back
        </Link>
      </div>

      <div className='w-[100%] h-[calc[100vh-80px)] overflow-y-auto flex gap-9'>
        <div className='mt-[30px] h-[800px] rounded-3xl bg-[#F9F9F9] p-8 w-[65%] overflow-y-auto'>
          <People
            totalFarmers={totalFarmers}
            totalTenants={totalTenants}
            singleFarmer={singleFarmer}
            singleTenant={singleTenant}
          />

          <div className='rounded-3xl w-full mt-6'>
            {list.length < 1 ? (
              <NoAdminLevel />
            ) : (
              <Adminlist list={list} id={id} />
            )}
          </div>
        </div>
        <div className='w-[35%] flex mt-[30px] h-[800px] rounded-3xl bg-[#F9F9F9] p-8 overflow-y-auto relative'>
          <div className='bg-[#FFFF] w-full overflow-x-auto rounded-3xl relative h-full'>
            <div className='mb-2  p-4'>
              <h2 className='text-xl'>Overall {title} Position</h2>
            </div>

            {stock.length > 0 ? (
              <div className='w-full'>
                <Tabs
                  defaultValue='commodities'
                  color='green'
                  onTabChange={(value) => setCurrentlyDisplayed(null)}>
                  <Tabs.List>
                    <Tabs.Tab
                      value='commodities'
                      onClick={() => setTitle('Stock')}>
                      Stock
                    </Tabs.Tab>
                    <Tabs.Tab value='inputs' onClick={() => setTitle('Inputs')}>
                      Inputs
                    </Tabs.Tab>
                  </Tabs.List>

                  <Tabs.Panel value='commodities' pt='xs'>
                    <Table
                      data={stock}
                      headers={['Commodity', 'Grade', 'Volume(MT)', 'Lien(MT)']}
                      title='commodities'
                      currentlyDisplayed={currentlyDisplayed}
                      setCurrentlyDisplayed={setCurrentlyDisplayed}
                    />
                  </Tabs.Panel>

                  <Tabs.Panel value='inputs' pt='xs'>
                    <Table
                      data={input}
                      headers={['Input', 'Lien units', 'Units']}
                      title='inputs'
                      currentlyDisplayed={currentlyDisplayed}
                      setCurrentlyDisplayed={setCurrentlyDisplayed}
                    />
                  </Tabs.Panel>
                </Tabs>{' '}
              </div>
            ) : (
              <div className='flex items-center  h-[70%]'>
                <div className='gap-5 mb-6 mt-14 py-2 px-2 text-center '>
                  <img
                    src={empty}
                    alt='no products gif'
                    className='h-[150px] m-auto'
                  />
                  <p className='py-2'>No Records Created Yet.</p>
                  <span className='text-[#9FA19C] text-[14px]'>
                    There are no records logged in the database at this time.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
