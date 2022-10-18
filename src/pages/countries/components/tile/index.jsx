import React from 'react';
import { Skeleton } from '@mantine/core';
import {
  HiChartBar,
  HiOutlineArrowUpRight,
  HiOutlineFingerPrint,
} from 'react-icons/hi2';

import { useCountriesCtx } from '../../../../contexts';
import { formatter } from '../../../../utils/formatNumber';

const getPercentageDifference = (current, previous) => {
  return (((current - previous) / previous) * 100).toFixed(2);
};

const CountryTile = () => {
  const { cardData, dataLoaded } = useCountriesCtx();

  const grn_diff = getPercentageDifference(
    cardData.total_grn,
    cardData.last_month_grn
  );

  return (
    <div className='w-full flex text-[16px] flex-col bg-[#F9FAFB] rounded-3xl gap-3 p-8 mt-10 space-y-4 '>
      <p>Overview</p>
      <div className=' flex justify-between space-x-6 child:px-2'>
        {/* Total Farmers & Tenants */}
        <div className=' flex flex-col flex-1 space-y-4 justify-between child:px-4'>
          {/* Total Farmers */}
          {!dataLoaded ? (
            <Skeleton className=' rounded-3xl flex-1 p-6 h-14' />
          ) : (
            <div className='bg-white rounded-3xl flex-1 p-6 flex space-x-6 items-center'>
              <span className='bg-[#E1261C] rounded-full p-2 flex items-center justify-center'>
                <span className='bg-white rounded-sm p-[2px]'>
                  <HiChartBar className='text-[#E1261C] text-sm' />
                </span>
              </span>
              <span className='whitespace-nowrap'>Total Farmers: </span>
              <span className='text-[24px] font-semibold'>
                {Intl.NumberFormat('en-US').format(cardData.total_farmers)}{' '}
              </span>
            </div>
          )}
          {/* Total Tenants */}
          {!dataLoaded ? (
            <Skeleton className=' rounded-3xl flex-1 p-6 h-14' />
          ) : (
            <div className='bg-white rounded-3xl flex-1 p-6 flex space-x-6 items-center'>
              <span className='bg-[#FA5A7D] rounded-full p-2 flex items-center justify-center'>
                <span className='bg-white rounded-sm p-[2px]'>
                  <HiChartBar className='text-[#FA5A7D] text-sm' />
                </span>
              </span>
              <span className='whitespace-nowrap'>Total Tenants: </span>
              <span className='text-[24px] font-semibold'>
                {Intl.NumberFormat('en-US').format(cardData.total_tenants)}{' '}
              </span>
            </div>
          )}
        </div>

        {/* GRN Raised */}
        {!dataLoaded ? (
          <Skeleton className=' flex flex-col justify-between p-6 gap-4 rounded-3xl flex-1 h-40' />
        ) : (
          <div className='flex flex-col py-6 bg-[#FFFFFF] rounded-3xl flex-1 space-y-6 items-center relative'>
            <div className='flex px-6 w-full justify-between items-center'>
              <span className='w-1 h-20 absolute left-0 top-6 bg-[#FA5A7D] rounded-r-3xl'></span>
              <div className='flex flex-col space-y-8'>
                <p className=' text-[#47494E] text-[16px] pt-3'>
                  Total GRN Raised
                </p>
                <span className='text-[25px] font-bold '>
                  {formatter(cardData.total_grn)} MT
                </span>
              </div>
              <span className='bg-[#FA5A7D] rounded-full p-3 flex items-center justify-center'>
                <span className='bg-white rounded-sm p-1'>
                  <HiChartBar className='text-[#FA5A7D] text-lg' />
                </span>
              </span>
            </div>

            <div className='flex items-center w-full'>
              <p className='flex items-center justify-between px-6 space-x-3'>
                <span className=' bg-[#fae3e7] p-1 rounded-full'>
                  <HiOutlineArrowUpRight className=' text-[#FA5A7D] text-base font-bold ' />
                </span>
                <span className='text-sm'>
                  {grn_diff}% {grn_diff > 0 ? 'increase' : 'decrease'} from last
                  month{' '}
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Total Countries */}
        {!dataLoaded ? (
          <Skeleton className=' flex flex-col justify-between p-6 gap-4 rounded-3xl flex-1 h-40' />
        ) : (
          <div className=' flex flex-col py-6 bg-[#FFFFFF] rounded-3xl flex-1 space-y-6 items-center relative'>
            <div className='flex items-center px-6 w-full justify-between'>
              <span className='w-1 h-20 absolute left-0 top-6 bg-[#FF5630] rounded-r-3xl'></span>
              <div className='flex flex-col space-y-8'>
                <p className=' text-[#47494E] text-[16px] pt-3'>
                  Total Countries
                </p>
                <span className='text-[25px] font-bold '>
                  {cardData.total_countries}
                </span>
              </div>
              <span className='bg-[#FF5630] rounded-full p-3 flex items-center justify-center'>
                <span className='bg-white rounded-sm p-1'>
                  <HiChartBar className='text-[#FF5630] text-lg' />
                </span>
              </span>
            </div>

            <div className='flex items-center w-full'>
              <p className='flex items-center justify-between px-6 space-x-3'>
                <span className=' bg-[#fae3e7] p-1 rounded-full'>
                  <HiOutlineFingerPrint className=' text-[#FA5A7D] text-base font-bold ' />
                </span>
                <span className='text-sm'>10 countries active</span>
              </p>
            </div>
          </div>
        )}

        {/* Total Warehouses */}
        {!dataLoaded ? (
          <Skeleton className=' flex flex-col justify-between p-6 gap-4 rounded-3xl flex-1 h-40' />
        ) : (
          <div className='flex flex-col py-6 bg-[#FFFFFF] rounded-3xl flex-1 space-y-6 items-center relative'>
            <div className='flex items-center px-6 w-full justify-between'>
              <span className='w-1 h-20 absolute left-0 top-6 bg-[#559BB1] rounded-r-3xl'></span>
              <div className='flex flex-col space-y-8'>
                <p className=' text-[#47494E] text-[16px] pt-3'>
                  Total Warehouses
                </p>
                <span className='text-[25px] font-bold '>
                  {cardData.total_warehouses}
                </span>
              </div>
              <span className='bg-[#559BB1] rounded-full p-3 flex items-center justify-center'>
                <span className='bg-white rounded-sm p-1'>
                  <HiChartBar className='text-[#559BB1] text-lg' />
                </span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryTile;
