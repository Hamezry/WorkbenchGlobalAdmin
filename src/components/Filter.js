// Filter Modal
import React, { useState } from 'react';
import { Drawer } from '@mantine/core';
import { GrClose } from 'react-icons/gr';
import { FaTimes } from 'react-icons/fa';
import { ArrowDown2 } from 'iconsax-react';

import filterIcon from '../Assets/filter2.svg';

/**
 *
 * data = [
 *  {
 *  name: ['val1', 'val2'],
 *   }
 * ]
 *
 * filterObj = {
 *  name: []
 * }
 */

function FilterModal({ filterObj, setFilterObj, show, close, data }) {
  /**
   *
   * @param {string} key
   * @param {string} value
   * @param {boolean} checked
   * @returns
   */
  const populateFilter = (key, value, checked) => {
    if (!checked) {
      return setFilterObj((prev) => ({
        ...prev,
        [key]: prev[key].filter((el) => el !== value),
      }));
    }
    return setFilterObj((prev) => ({
      ...prev,
      [key]: [...prev[key], value],
    }));
  };

  return (
    <Drawer
      position='right'
      opened={show}
      onClose={close}
      padding='xl'
      size='lg'
      className='rounded-tl-[84px] p-0'
      withCloseButton={false}>
      <div className='flex justify-between items-center border-b-[1px] border-color p-10 w-full'>
        <div className='flex gap-4 text-[20px]'>
          <img src={filterIcon} alt='funnel' />
          <p>Filter</p>
        </div>
        <button onClick={close}>
          <GrClose className='text-2xl text-gray-200 ' />
        </button>
      </div>

      {/* Popups */}
      <div className='px-10 pt-3 grid grid-cols-2 md:grid-cols-3 gap-3'>
        {Object.entries(filterObj).map((el) => {
          return el[1].map((a, index) => (
            <span
              className='bg-gray-50 rounded-xl flex items-center justify-between p-2 text-gray-500 lowercase '
              key={index}>
              <small className='max-w-[70%] overflow-hidden text-ellipsis'>
                {a}
              </small>
              <FaTimes
                className='cursor-pointer font-light p-1 text-xl'
                onClick={() => populateFilter(el[0], a, false)}
              />
            </span>
          ));
        })}
      </div>
      <div className='my-6 cursor-default'>
        <div className='flex flex-col space-y-8'></div>
      </div>
    </Drawer>
  );
}
