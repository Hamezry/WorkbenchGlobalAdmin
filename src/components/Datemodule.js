import React from 'react';

import { Calendar } from '@mantine/dates';

const DateModule = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  filterFunc,
  close,
}) => {
  return (
    <div
      className='absolute top-[24%] right-[20%] z-50 drop-shadow-lg '
      onClick={(e) => e.stopPropagation()}>
      <div className='flex justify-between bg-[#F7F8F9] p-4 rounded-2xl z-20'>
        <ul className='space-y-2 text-gray-500 mr-10 child:text-[14px] child:whitespace-nowrap'>
          <li
            onClick={() => {
              setStartDate(new Date());
              setEndDate(new Date());
            }}
            className='p-2 hover:bg-afexgreen-light hover:text-afexgreen rounded-2xl transition hover:font-semibold cursor-pointer'>
            Today
          </li>
          <li
            onClick={() => {
              setStartDate(new Date(Date.now() - 24 * 60 * 60 * 1000));
              setEndDate(new Date());
            }}
            className='p-2 hover:bg-afexgreen-light hover:text-afexgreen rounded-2xl transition hover:font-semibold cursor-pointer'>
            Yesterday
          </li>
          <li
            onClick={() => {
              setStartDate(new Date(Date.now() - 24 * 7 * 60 * 60 * 1000));
              setEndDate(new Date());
            }}
            className='p-2 hover:bg-afexgreen-light hover:text-afexgreen rounded-2xl transition hover:font-semibold cursor-pointer'>
            Last 7 Days
          </li>
          <li
            onClick={() => {
              const today = new Date(Date.now());
              const last_month = new Date(
                today.getFullYear(),
                today.getMonth() - 1,
                1
              );

              setStartDate(last_month);
              setEndDate(new Date());
            }}
            className='p-2 hover:bg-afexgreen-light hover:text-afexgreen rounded-2xl transition hover:font-semibold cursor-pointer'>
            Last Month
          </li>
          <li className='p-2'>Custom Range</li>
        </ul>
        <div className='flex gap-5'>
          <div>
            <p className='text-center mb-4 text-gray-400'>Start</p>
            <div className='bg-white rounded-2xl p-4 py-6 '>
              <Calendar value={startDate} onChange={setStartDate} />
              <div className='flex justify-between mt-3'>
                <button
                  type='button'
                  className='px-8 py-3 text-gray-900'
                  onClick={close}>
                  Cancel
                </button>
                <button
                  type='button'
                  className='px-8 py-3 bg-[#38CB89] text-white rounded'
                  onClick={() => {
                    close();
                    filterFunc();
                  }}>
                  Done
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className='text-center mb-4 text-gray-400'>End</p>
            <div className='bg-white rounded-2xl p-4 py-6 '>
              <Calendar value={endDate} onChange={setEndDate} />
              <div className='flex justify-between mt-3'>
                <button
                  type='button'
                  className='px-8 py-3 text-gray-900'
                  onClick={close}>
                  Cancel
                </button>
                <button
                  type='button'
                  className='px-8 bg-[#38CB89] text-white py-3 rounded'
                  onClick={() => {
                    close();
                    filterFunc();
                  }}>
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateModule;
