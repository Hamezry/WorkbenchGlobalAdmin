import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Adminlist from './components/admin-table';
import NoAdminLevel from './components/no-admin';
import People from './components/people';
import StockPosition from './components/stock-position';

import axios from '../../../utils/axios';
import { useCountriesCtx } from '../../../contexts';

function Country() {
  const { id } = useParams();
  const { countries, cardData } = useCountriesCtx();

  const singleCountry = countries.filter((el) => el.pk === Number(id))[0];

  const [stock, setStock] = useState([]);
  const [list, setList] = useState([]);

  const totalFarmers = cardData.total_farmers;
  const totalTenants = cardData.total_tenants;
  const singleTenant = singleCountry.no_of_tenants;
  const singleFarmer = singleCountry.no_of_farmers;

  //Farmers calculation
  const farmerProgress = singleFarmer / totalFarmers;
  const farmerValue = farmerProgress * 100;

  //Tenants calculation
  const tenantProgress = singleTenant / totalTenants;
  const tenantValue = tenantProgress * 100;

  useEffect(() => {
    const countryStockPosition = async () => {
      const resp = await axios.get(`country/stock/position/${id}`);

      if (!resp.data || resp.data.responseCode !== '100') return;

      setStock(resp.data.data);
    };

    const countryAdminLevels = async () => {
      const resp = await axios.get(`admin/levels/${id}`);

      if (!resp.data || resp.data.responseCode !== '100') return;

      setList(resp.data.data);
    };

    countryStockPosition();
    countryAdminLevels();
  }, [id]);

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

        <div className=' rounded-lg items-center text-[12px] text-gray-500  bg-[#FBFBFB] h-[40px] w-[80px] p-3'>
          <Link to='/countries/list'>
            {' '}
            <button> Back</button>{' '}
          </Link>
        </div>
      </div>

      <div className='w-[100%]  h-[calc(100%-80px)] overflow-y-auto flex gap-9'>
        <div className='mt-[30px] h-[800px] rounded-3xl bg-[#F9F9F9] p-8 w-[65%] overflow-y-auto'>
          <People farmerValue={farmerValue} tenantValue={tenantValue} />

          <div className='rounded-3xl w-full mt-8'>
            {list.length < 1 ? <NoAdminLevel /> : <Adminlist list={list} />}
          </div>
        </div>

        <StockPosition stock={stock} />
      </div>
    </div>
  );
}

export default Country;
