import React from 'react';
import { ArrowUp, ArrowDown } from 'iconsax-react';

import { useCountryCardCtx } from '../../contexts/countries';

const Increase = () => {
  return (
    <ArrowUp
      size={38}
      className='bg-[#E5F6EF] text-[#38CB89] p-2 rounded-full font-bold '
    />
  );
};

const Decrease = () => {
  return (
    <ArrowDown
      size={38}
      className='bg-red-100 text-red-500 p-2 rounded-full font-bold '
    />
  );
};

const getPercentageDifference = (current, previous) => {
  return (((current - previous) / previous) * 100).toFixed(2);
};

const CountryTile = () => {
  const { cardData } = useCountryCardCtx();

  const grn_diff = getPercentageDifference(
    cardData.total_grn,
    cardData.last_month_grn
  );

  return (
    <div className='w-full flex text-[16px] flex-col bg-[#F9FAFB] rounded-3xl gap-3 p-3 mt-10'>
      <p className='px-8 py-2'>Overview</p>
      <div className='flex p-6 justify-between gap-6 '>
        <div className=' flex flex-col space-y-4 justify-between flex-1'>
          <div className='bg-white rounded-3xl flex-1 p-6'>
            Total Farmers:{' '}
            <span className='text-[25px] font-semibold'>
              {cardData.total_farmers}{' '}
            </span>
          </div>
          <div className='bg-white rounded-3xl flex-1 p-6'>
            Total Tenants:{' '}
            <span className='text-[25px] font-semibold'>
              {cardData.total_tenants}{' '}
            </span>
          </div>
        </div>

        <div className=' flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-3xl flex-1 justify-between'>
          <p className=' text-[#47494E] text-[16px] mb-4'>Total GRN Raised</p>

          <div className='text-[14px] flex justify-between items-end'>
            <p className='flex flex-col space-y-3'>
              <span className='text-[25px] font-bold '>
                {Intl.NumberFormat('en-US').format(cardData.total_grn)} MT
              </span>
              <span className='text-gray-400'>
                Last Month:{' '}
                {Intl.NumberFormat('en-US').format(cardData.last_month_grn)} MT
              </span>
            </p>
            <div className='flex flex-col space-y-1 items-center pb-2'>
              {grn_diff > 0 ? (
                <>
                  <Increase />
                  <span className='text-[#38CB89]'>+{grn_diff}% </span>
                </>
              ) : (
                <>
                  <Decrease />
                  <span className='text-red-500'>{grn_diff}% </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className=' flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-3xl flex-1 justify-between'>
          <p className=' text-[#47494E] text-[16px] mb-4'>Total Countries</p>

          <div className='text-[14px] flex justify-between items-end'>
            <p className='flex flex-col space-y-3'>
              <span className='text-[25px] font-bold '>
                {Intl.NumberFormat('en-US').format(cardData.total_countries)}
              </span>
              <span className='text-gray-400'>
                Active:{' '}
                {Intl.NumberFormat('en-US').format(cardData.total_countries)}
              </span>
            </p>
          </div>
        </div>
        <div className=' flex flex-col justify-between p-6 gap-4 bg-[#FFFFFF] rounded-3xl flex-1'>
          <p className=' text-[#47494E] text-[16px] mb-4'>Total Warehouses</p>

          <p className='text-[25px] font-semibold'>
            {cardData.total_warehouses}{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryTile;
