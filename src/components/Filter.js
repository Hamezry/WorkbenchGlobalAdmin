// Filter Modal
import React, { useState } from 'react';
import { Drawer } from '@mantine/core';
import { GrClose } from 'react-icons/gr';
import { FaTimes } from 'react-icons/fa';
import { ArrowDown2 } from 'iconsax-react';

import filterIcon from '../Assets/filter2.svg';

/**
 *
 * filterObj is a state of type object
 * setFilterObj is a React.Dispatch<React.SetStateAction>
 *
 * For example
 * const [filterObj, setFilterObj] = useState({
 *  category1: [],
 *  category2: [],
 *  category3: [],
 * })
 *
 * data is an array of object with a key and an array of string values
 * For example
 * data = [
 *   {
 *   name1: ['val1', 'val2'],
 *   },
 *   {
 *   name2: ['val1', 'val'],
 *   }
 * ]
 *
 * close: () => void To close the modal
 * show: boolean => true of false to show the modal
 */

export function SideFilter({ filterObj, setFilterObj, show, close, data }) {
  const intial_dropdown_state = {};

  const clone = [...data];

  clone.reduce((o, key) => {
    for (const el in key) {
      intial_dropdown_state[el] = false;
    }
    return o;
  }, {});

  const [dropdown, setDropdown] = useState(intial_dropdown_state);

  const toggle_links = (key) =>
    setDropdown((prev) => ({ ...intial_dropdown_state, [key]: !prev[key] }));

  const is_checked = (key, value) => {
    return filterObj[key].includes(value) ? true : false;
  };
  /**
   * Function to control the filter Object
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

      {/* Check rowa */}
      <div className='my-6 cursor-default'>
        <div className='flex flex-col space-y-8'>
          {data.map((category, index) => (
            <div
              className=' w-full border-b-[1px] border-color py-3 text-[#151615] text-[16px] px-12'
              key={index}>
              <div
                className='flex justify-between items-center'
                onClick={() =>
                  toggle_links(Object.keys(category)[0].toLowerCase())
                }>
                <span className='capitalize'>{Object.keys(category)[0]} </span>
                <ArrowDown2
                  size={16}
                  className={`transiton duration-300 ${
                    dropdown[Object.keys(category)[0]] && 'rotate-180'
                  }`}
                />
              </div>
              <ul
                className={`max-h-0 overflow-hidden transition[max-height] duration-300 space-y-5 ${
                  dropdown[Object.keys(category)[0]]
                    ? 'max-h-60  py-3'
                    : undefined
                }  `}>
                {Object.values(data[index])[0].map((row, rIndex) => (
                  <li className='flex items-center' key={rIndex}>
                    <input
                      type='checkbox'
                      className='checkbox'
                      name={row}
                      value={row}
                      checked={is_checked(Object.keys(category)[0], row)}
                      onChange={(e) =>
                        populateFilter(
                          Object.keys(category)[0],
                          row,
                          e.target.checked
                        )
                      }
                    />
                    <label htmlFor={row} className='ml-2'>
                      {row}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
}

/**
 *
 *
 *
 */
