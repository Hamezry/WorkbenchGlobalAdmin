import React from 'react';
import { Progress } from '@mantine/core';

const People = ({ tenantValue, farmerValue }) => {
  return (
    <div className='bg-[#FFFF] p-3 rounded-3xl w-full'>
      <div className='mb-3 border-b border-gray-200 p-5'>
        <h1 className='text-lg'>People</h1>
      </div>

      <div className='flex  flex-col gap-3 py-3 px-6'>
        <p>Farmers</p>
        <Progress value={farmerValue} size='xl' radius='xl' />
      </div>

      <div className='flex flex-col gap-3 py-3 px-6  '>
        <p>Tenants</p>

        <Progress value={tenantValue} size='xl' radius='xl' />
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
      </div>
    </div>
  );
};

export default People;
