import React from 'react';
import farmerIcon from '../../../.././../Assets/farmer_icon.svg';
import globalKey from '../../../../../Assets/key_icon.svg';
import eyeIcon from '../../../../../Assets/Eye_icon.svg';
import rightIcon from '../../../../../Assets/right_arrow.svg';
import { commaFormatter } from '../../../../../utils/formatter';

const People = ({ totalFarmers, totalTenants, singleFarmer, singleTenant }) => {
  return (
    <div className='pb-3 rounded-3xl w-full flex justify-between space-x-6'>
      {/* Farmers Cards */}
      <div className=' flex flex-col py-6 bg-[#FFFFFF] rounded-3xl flex-1 space-y-6 items-center relative'>
        <div className='flex items-center px-6 w-full justify-between'>
          <span className='w-1 h-20 absolute left-0 top-6 bg-[#559BB1] rounded-r-3xl'></span>
          <div className='flex flex-col space-y-8'>
            <p className=' text-[#47494E] text-[16px] pt-3'>Farmers</p>
            <span className='text-[25px] font-bold '>
              {commaFormatter(singleFarmer)}
            </span>
          </div>
          <img src={farmerIcon} alt='farmer' />
        </div>

        <div className='flex items-center w-full'>
          <p className='flex items-center justify-between px-6 space-x-3'>
            <span className=' bg-[#e7eff1] p-1 rounded-full'>
              <img src={eyeIcon} alt='eye' />
            </span>
            <p className='text-sm flex items-center space-x-4'>
              <span>Global Farmers :</span>{' '}
              <span>{commaFormatter(totalFarmers)}</span>
            </p>
          </p>
        </div>
      </div>

      {/*Tenants Cards */}
      <div className=' flex flex-col py-6 bg-[#FFFFFF] rounded-3xl flex-1 space-y-6 items-center relative'>
        <div className='flex items-center px-6 w-full justify-between'>
          <span className='w-1 h-20 absolute left-0 top-6 bg-[#559BB1] rounded-r-3xl'></span>
          <div className='flex flex-col space-y-8'>
            <p className=' text-[#47494E] text-[16px] pt-3'>Tenants</p>
            <span className='text-[25px] font-bold '>
              {commaFormatter(singleTenant)}
            </span>
          </div>
          <img src={globalKey} alt='farmer' />
        </div>

        <div className='flex items-center w-full'>
          <p className='flex items-center justify-between px-6 space-x-3'>
            <span className=' bg-[#e7eff1] p-1 rounded-full'>
              <img src={rightIcon} alt='arrow' />
            </span>
            <p className='text-sm flex items-center space-x-4'>
              <span>Global Tenants :</span>{' '}
              <span>{commaFormatter(totalTenants)}</span>
            </p>
          </p>
        </div>
      </div>

      {/* <div className='mb-3 border-b border-gray-200 p-5'>
        <h1 className='text-lg'>People</h1>
      </div>

      <div className='flex  flex-col gap-3 py-3 px-6'>
        <p>Farmers</p>
        <Tooltip label={singleFarmer} withArrow offset={5} radius='md'>
          <Progress
            styles={{
              bar: { backgroundColor: '#76AD94' },
            }}
            value={farmerValue}
            size='xl'
            radius='xl'
          />
        </Tooltip>
      </div>

      <div className='flex flex-col gap-3 py-3 px-6  '>
        <p>Tenants</p>

        <Tooltip label={singleTenant} withArrow offset={5} radius='md'>
          <Progress
            value={tenantValue}
            size='xl'
            radius='xl'
            styles={{
              bar: { backgroundColor: '#1D925D' },
            }}
          />
        </Tooltip>
      </div>

      <div className='flex justify-around py-3 px-6 w-full mt-4 '>
        <p>0</p>
        <p>200</p>
        <p>400</p>
        <p>600</p>
        <p>8000</p>
        <p>1000</p>
        <p>1200</p>
        <p>1400</p>
        <p>1600</p>
        <p>1800</p>
        <p>2000</p>
      </div> */}
    </div>
  );
};

export default People;
