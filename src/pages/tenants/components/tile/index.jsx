import React from 'react';
import { CgEditBlackPoint } from 'react-icons/cg';
import { Skeleton } from '@mantine/core';
import { HiChartBar, HiOutlineArrowUpRight } from 'react-icons/hi2';

import { useTenantsCtx } from '../../../../contexts';
import { commaFormatter } from '../../../../utils/formatter';

const getPercentageDifference = (current, previous) => {
  return (((current - previous) / (previous || 1)) * 100).toFixed(2);
};

const TenantsTile = () => {
  const { cardData, dataLoaded } = useTenantsCtx();

  const csdtenants_diff = getPercentageDifference(
    cardData.csd_access.total,
    cardData.csd_access.last_month
  );

  return (
    <div className='w-full flex text-[16px] flex-col bg-[#F9FAFB] rounded-3xl gap-3 p-8 mt-10 space-y-4 '>
      <p>Overview</p>
      <div className=' flex justify-between space-x-6 child:px-2'>
        {/* Total Tenants */}
        {!dataLoaded ? (
          <Skeleton className=' flex flex-col justify-between p-6 gap-4 rounded-3xl flex-1 h-40' />
        ) : (
          <div className='flex flex-col py-6 bg-[#FFFFFF] rounded-3xl flex-1 space-y-6 items-center relative '>
            <div className='flex px-6 w-full justify-between items-center'>
              <span className='w-1 h-20 absolute left-0 top-6 bg-[#FF5630] rounded-r-3xl'></span>
              <div className='flex flex-col space-y-8'>
                <p className=' text-[#47494E] text-[16px] pt-3'>
                  Total Tenants
                </p>
                <span className='text-[25px] font-bold '>
                  {commaFormatter(cardData.available_tenants.total)}
                </span>
              </div>
              <span className='bg-[#FF5630] rounded-full p-4 flex items-center justify-center'>
                <span className='bg-white rounded-sm p-1'>
                  <HiChartBar className='text-[#FF5630] text-lg' />
                </span>
              </span>
            </div>

            <div className='flex items-center w-full'>
              <p className='flex items-center justify-between px-6 space-x-3'>
                <span className=' bg-[#fae3e7] p-1 rounded-full'>
                  <HiOutlineArrowUpRight className=' text-[#FA5A7D] text-base font-bold ' />
                </span>
                <span className='text-sm'>
                  Last month:{' '}
                  {commaFormatter(cardData.available_tenants.last_month)}
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Active Tenants */}
        {!dataLoaded ? (
          <Skeleton className=' flex flex-col justify-between p-6 gap-4 rounded-3xl flex-1 h-40' />
        ) : (
          <div className='flex flex-col py-6 bg-[#FFFFFF] rounded-3xl flex-1 space-y-6 items-center relative'>
            <div className='flex px-6 w-full justify-between items-center'>
              <span className='w-1 h-20 absolute left-0 top-6 bg-[#FA5A7D] rounded-r-3xl'></span>
              <div className='flex flex-col space-y-8'>
                <p className=' text-[#47494E] text-[16px] pt-3'>
                  Active Tenants
                </p>
                <span className='text-[25px] font-bold '>
                  {commaFormatter(cardData.active_tenants.total_active)}
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
                <span className='text-sm'>
                  Inactive Tenants:{' '}
                  {commaFormatter(cardData.active_tenants.inactive_tenants)}
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Total CSD */}
        {!dataLoaded ? (
          <Skeleton className=' flex flex-col justify-between p-6 gap-4 rounded-3xl flex-1 h-40' />
        ) : (
          <div className='flex flex-col py-6 bg-[#FFFFFF] rounded-3xl flex-1 space-y-6 items-center relative'>
            <div className='flex px-6 w-full justify-between items-center'>
              <span className='w-1 h-20 absolute left-0 top-6 bg-[#FA5A7D] rounded-r-3xl'></span>
              <div className='flex flex-col space-y-8'>
                <p className=' text-[#47494E] text-[16px] pt-3'>CSD Access</p>
                <span className='text-[25px] font-bold '>
                  {commaFormatter(cardData.csd_access.total)}
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
                  <HiOutlineArrowUpRight className=' text-[#FA5A7D] text-base font-bold ' />
                </span>
                <span className='text-sm'>
                  {csdtenants_diff}%{' '}
                  {csdtenants_diff > 0 ? 'increase' : 'decrease'} from last
                  month{' '}
                </span>
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
                  Highest Number of Tenants
                </p>
                <p className='flex items-center space-x-8'>
                  <span className='text-[25px] font-bold '>
                    {cardData.highest_tenant_num.name}
                  </span>
                  <img
                    src={cardData.highest_tenant_num.country_flag}
                    alt={cardData.highest_tenant_num.name}
                    className='w-10 mt-1'
                  />
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TenantsTile;
