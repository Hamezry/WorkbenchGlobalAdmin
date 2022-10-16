import React from 'react';

import dot from '../../../../../Assets/Ellipse.svg';
import chartIcon from '../../../../../Assets/circBar.svg';

const Clients = ({ clients, overallCount }) => {
  return (
    <div className='bg-[#FFFF] p-3 rounded-3xl w-full'>
      <div className='mb-3 border-b border-gray-200 p-5'>
        <h1>Clients</h1>
      </div>

      <div className='flex p-5 w-full items-center justify-around'>
        <div className='p-5 gap-4 flex flex-col items-center'>
          <span>Total Number </span>
          <p>{overallCount}</p>
          <img src={chartIcon} alt='circular bar chart' />
        </div>

        <div className='flex flex-col text-[12px] gap-3'>
          <p>Impressions</p>

          {clients?.map((item, index) => {
            return (
              <div
                className='flex justify-between items-center gap-6 px-5 bg-[#FAFBFC] rounded-3xl w-[300px] h-[36px]'
                key={index}>
                <div className='flex gap-5'>
                  <img src={dot} alt='notification dot' />
                  <span>{item.category}</span>
                </div>
                <span>{item.count}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;
