import React from 'react';
import { CgEditBlackPoint } from 'react-icons/cg';
import { Skeleton } from '@mantine/core';
import { HiChartBar, HiOutlineArrowUpRight } from 'react-icons/hi2';
import { useProductsCtx } from '../../../../contexts';

import { commaFormatter } from '../../../../utils/formatter';

const GlobalProductTile = () => {
  const { cardData, dataLoaded } = useProductsCtx();

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className='w-full flex text-[16px] flex-col bg-[#F9FAFB] rounded-3xl gap-3 p-8 mt-10 space-y-4 '>
      <p>Overview</p>
      <div className=' flex justify-between space-x-6'>
        {/* Total Products */}
        {!dataLoaded ? (
          <Skeleton className=' flex flex-col justify-between p-6 gap-4 rounded-3xl flex-1 h-40' />
        ) : (
          <div className='flex flex-col py-6 bg-[#FFFFFF] rounded-3xl flex-1 space-y-6 items-center relative'>
            <div className='flex px-6 w-full justify-between items-center'>
              <span className='w-1 h-20 absolute left-0 top-6 bg-[#FA5A7D] rounded-r-3xl'></span>
              <div className='flex flex-col space-y-8'>
                <p className=' text-[#47494E] text-[16px] pt-3'>Products</p>
                <span className='text-[25px] font-bold '>
                  {commaFormatter(cardData.total_products.value)}
                </span>
              </div>
              <span className='bg-[#FA5A7D] rounded-full p-4 flex items-center justify-center'>
                <span className='bg-white rounded-sm p-1'>
                  <HiChartBar className='text-[#FA5A7D] text-lg' />
                </span>
              </span>
            </div>

            <div className='flex items-center w-full'>
              <p className='flex items-center justify-between px-6 space-x-3'>
                <span className=' bg-[#fae3e7] p-1 rounded-full'>
                  <CgEditBlackPoint className=' text-[#FA5A7D] text-base font-bold ' />
                </span>
                <p className='text-sm space-x-4 flex items-center'>
                  <span>Certified Products: </span>
                  <span>
                    {commaFormatter(cardData.total_products.certified_products)}
                  </span>
                </p>
              </p>
            </div>
          </div>
        )}

        {/* Total Commodities */}
        {!dataLoaded ? (
          <Skeleton className=' flex flex-col justify-between p-6 gap-4 rounded-3xl flex-1 h-40' />
        ) : (
          <div className='flex flex-col py-6 bg-[#FFFFFF] rounded-3xl flex-1 space-y-6 items-center relative'>
            <div className='flex px-6 w-full justify-between items-center'>
              <span className='w-1 h-20 absolute left-0 top-6 bg-[#ff5630] rounded-r-3xl'></span>
              <div className='flex flex-col space-y-8'>
                <p className=' text-[#47494E] text-[16px] pt-3'>Commodity</p>
                <span className='text-[25px] font-bold '>
                  {commaFormatter(cardData.commodities.value)}
                </span>
              </div>
              <span className='bg-[#ff5630] rounded-full p-4 flex items-center justify-center'>
                <span className='bg-white rounded-sm p-1'>
                  <HiChartBar className='text-[#ff5630] text-lg' />
                </span>
              </span>
            </div>

            <div className='flex items-center w-full'>
              <p className='flex items-center justify-between px-6 space-x-3'>
                <span className=' bg-[#fef1ed] p-1 rounded-full'>
                  <HiOutlineArrowUpRight className=' text-[#ff5630] text-base font-bold ' />
                </span>
                <p className='text-sm space-x-4 flex items-center'>
                  <span>Last Added:</span>
                  <span>{formatDate(cardData.commodities.last_added)}</span>
                </p>
              </p>
            </div>
          </div>
        )}

        {/* Total Inputs */}
        {!dataLoaded ? (
          <Skeleton className=' flex flex-col justify-between p-6 gap-4 rounded-3xl flex-1 h-40' />
        ) : (
          <div className='flex flex-col py-6 bg-[#FFFFFF] rounded-3xl flex-1 space-y-6 items-center relative'>
            <div className='flex px-6 w-full justify-between items-center'>
              <span className='w-1 h-20 absolute left-0 top-6 bg-[#559BB1] rounded-r-3xl'></span>
              <div className='flex flex-col space-y-8'>
                <p className=' text-[#47494E] text-[16px] pt-3'>Input</p>
                <span className='text-[25px] font-bold '>
                  {commaFormatter(cardData.inputs.value)}
                </span>
              </div>
              <span className='bg-[#559BB1] rounded-full p-4 flex items-center justify-center'>
                <span className='bg-white rounded-sm p-1'>
                  <HiChartBar className='text-[#559BB1] text-lg' />
                </span>
              </span>
            </div>

            <div className='flex items-center w-full'>
              <p className='flex items-center justify-between px-6 space-x-3'>
                <span className=' bg-[#e7eff1] p-1 rounded-full'>
                  <HiOutlineArrowUpRight className=' text-[#559BB1] text-base font-bold ' />
                </span>
                <p className='text-sm space-x-4 flex items-center'>
                  <span>Last Added:</span>
                  <span>{formatDate(cardData.inputs.last_added)}</span>
                </p>
              </p>
            </div>
          </div>
        )}

        {/* Total Commodities */}
        {!dataLoaded ? (
          <Skeleton className=' flex flex-col justify-between p-6 gap-4 rounded-3xl flex-1 h-40' />
        ) : (
          <div className='flex flex-col py-6 bg-[#FFFFFF] rounded-3xl flex-1 space-y-6 items-center relative'>
            <div className='flex px-6 w-full justify-between items-center'>
              <span className='w-1 h-20 absolute left-0 top-6 bg-[#3F6A83] rounded-r-3xl'></span>
              <div className='flex flex-col space-y-8'>
                <p className=' text-[#47494E] text-[16px] pt-3'>Fees</p>
                <span className='text-[25px] font-bold '>
                  {commaFormatter(cardData.fees.value)}
                </span>
              </div>
              <span className='bg-[#3F6A83] rounded-full p-4 flex items-center justify-center'>
                <span className='bg-white rounded-sm p-1'>
                  <HiChartBar className='text-[#3F6A83] text-lg' />
                </span>
              </span>
            </div>

            <div className='flex items-center w-full'>
              <p className='flex items-center justify-between px-6 space-x-3'>
                <span className=' bg-[#ecf5fb] p-1 rounded-full'>
                  <HiOutlineArrowUpRight className=' text-[#3F6A83] text-base font-bold ' />
                </span>
                <p className='text-sm space-x-4 flex items-center'>
                  <span>Last Added:</span>
                  <span>{formatDate(cardData.fees.last_added)}</span>
                </p>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalProductTile;
