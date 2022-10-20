import React from 'react';
import RadialBar from './chart';

const Clients = ({ clients, overallCount }) => {
  return (
    <div className='bg-[#FFFF] p-3 rounded-3xl w-full'>
      <div className='mb-3 border-b text-[20px] border-gray-200 p-5'>
        <h1 className='text-lg'>Clients</h1>
      </div>
      <RadialBar data={clients} />
    </div>
  );
};

export default Clients;
