import React, { useState } from 'react';
import { Drawer } from '@mantine/core';
import { GrClose } from 'react-icons/gr';
import { FaTimes } from 'react-icons/fa';
import { ArrowDown2 } from 'iconsax-react';

import filterIcon from '../../../../Assets/filter2.svg';

function Filtermodal({ filterObj, setFilterObj, show, close, product_codes }) {
  const initalState = {
    certified: false,
    unit_type: false,
    code: false,
    type: false,
  };
  const [dropdown, setDropdown] = useState(initalState);

  const toggle_links = (key) =>
    setDropdown((prev) => ({ ...initalState, [key]: !prev[key] }));

  const is_checked = (key, value) => {
    return filterObj[key].includes(value) ? true : false;

    // return true;
  };
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

      {/* Voodooo */}
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
        <div className='flex flex-col space-y-8'>
          {/* Certified */}
          <div className="className='bg-[#38CB89] w-full border-b-[1px] border-color py-3 text-[#151615] text-[16px] px-12">
            <div
              className='flex justify-between items-center'
              onClick={() => toggle_links('certified')}>
              <span>Certified</span>
              <ArrowDown2
                size={16}
                className={`transiton duration-300 ${
                  dropdown.certified && 'rotate-180'
                }`}
              />
            </div>
            <ul
              className={`max-h-0 overflow-hidden transition[max-height] duration-300 space-y-5 ${
                dropdown.certified ? 'max-h-36  py-3' : undefined
              }  `}>
              {['Yes', 'No'].map((el, index) => (
                <li className='flex items-center' key={index}>
                  <input
                    type='checkbox'
                    className='checkbox'
                    name={el}
                    id={el}
                    value={el}
                    onChange={(e) =>
                      populateFilter(
                        'certified',
                        el === 'Yes' ? 'True' : 'False',
                        e.target.checked
                      )
                    }
                    checked={is_checked(
                      'certified',
                      el === 'Yes' ? 'True' : 'False'
                    )}
                  />
                  <label htmlFor={el} className='ml-2'>
                    {el}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Unit Type */}
          <div className="className='bg-[#38CB89] w-full border-b-[1px] border-color py-3 text-[#151615] text-[16px] px-12">
            <div
              className='flex justify-between items-center'
              onClick={() => toggle_links('unit_type')}>
              <span>Unit Type</span>
              <ArrowDown2
                size={16}
                className={`transiton duration-300 ${
                  dropdown.certified && 'rotate-180'
                }`}
              />
            </div>
            <ul
              className={`max-h-0 overflow-hidden transition[max-height] duration-300 space-y-5 ${
                dropdown.unit_type ? 'max-h-36  py-3' : undefined
              }  `}>
              {['Bags', 'Carton', 'Bottle'].map((el, index) => (
                <li className='flex items-center' key={index}>
                  <input
                    type='checkbox'
                    className='checkbox'
                    name={el}
                    id={el}
                    value={el}
                    checked={is_checked('unit_types', el)}
                    onChange={(e) =>
                      populateFilter('unit_types', el, e.target.checked)
                    }
                  />
                  <label htmlFor={el} className='ml-2 capitalize'>
                    {el}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Code */}
          <div className="className='bg-[#38CB89] w-full border-b-[1px] border-color py-3 text-[#151615] text-[16px] px-12">
            <div
              className='flex justify-between items-center'
              onClick={() => toggle_links('code')}>
              <span>Code</span>
              <ArrowDown2
                size={16}
                className={`transiton duration-300 ${
                  dropdown.code && 'rotate-180'
                }`}
              />
            </div>
            <ul
              className={`max-h-0 overflow-hidden transition[max-height] duration-300 space-y-5 ${
                dropdown.code ? 'max-h-56 overflow-y-auto py-3' : undefined
              }  `}>
              {product_codes.map((el, index) => (
                <li className='flex items-center' key={index}>
                  <input
                    type='checkbox'
                    className='checkbox'
                    name={el}
                    id={el}
                    onChange={(e) =>
                      populateFilter('codes', el, e.target.checked)
                    }
                    checked={is_checked('codes', el)}
                  />
                  <label htmlFor={el} className='ml-2'>
                    {el}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Type */}
          <div className="className='bg-[#38CB89] w-full border-b-[1px] border-color py-3 text-[#151615] text-[16px] px-12">
            <div
              className='flex justify-between items-center'
              onClick={() => toggle_links('type')}>
              <span>Type</span>
              <ArrowDown2
                size={16}
                className={`transiton duration-300 ${
                  dropdown.type && 'rotate-180'
                }`}
              />
            </div>
            <ul
              className={`max-h-0 overflow-hidden transition[max-height] duration-300 space-y-5 ${
                dropdown.type ? 'max-h-36  py-3' : undefined
              }  `}>
              {['Input', 'Commodity', 'Fees'].map((el, index) => (
                <li className='flex items-center' key={index}>
                  <input
                    type='checkbox'
                    className='checkbox'
                    name={el}
                    id={el}
                    value={el}
                    onChange={(e) =>
                      populateFilter('types', el, e.target.checked)
                    }
                  />
                  <label htmlFor={el} className='ml-2 capitalize'>
                    {el}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <button className='w-[90px] mt-[100px] self-center py-3 font-medium text-white bg-[#38CB89] rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center'>
            <span>Search</span>
          </button>
        </div>
      </div>
    </Drawer>
  );
}

export default Filtermodal;
