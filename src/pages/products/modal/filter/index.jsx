import React, { useState } from 'react';
import { Drawer } from '@mantine/core';
import { GrClose } from 'react-icons/gr';
import { ArrowDown2 } from 'iconsax-react';

import filterIcon from '../../../../Assets/filter2.svg';

function Filtermodal({ setViewFilter, filterObj, setFilterObj, show, close }) {
  const initalState = {
    certified: false,
    unit_type: false,
    code: false,
    type: false,
  };
  const [dropdown, setDropdown] = useState(initalState);

  const toggle_links = (key) =>
    setDropdown((prev) => ({ ...initalState, [key]: !prev[key] }));

  const filter_unit_types = (e) => {
    const { name, checked } = e.target;
    if (checked)
      return setFilterObj((prev) => ({
        ...prev,
        unit_types: [...prev.unit_types, name],
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
          <GrClose
            onClick={() => close()}
            className='text-2xl text-gray-200 '
          />
        </button>
      </div>

      <form action='' className='my-6'>
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
              className={`max-h-0 overflow-hidden transition[max-height] duration-300 ${
                dropdown.certified ? 'max-h-36  py-3' : undefined
              }  `}>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='checkbox'
                  name='yes'
                  id='yes'
                />
                <label htmlFor='yes' className='ml-2'>
                  Yes
                </label>
              </li>
              <li className='flex items-center'>
                <input type='checkbox' className='checkbox' name='no' id='no' />
                <label htmlFor='no' className='ml-2'>
                  No
                </label>
              </li>
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
              className={`max-h-0 overflow-hidden transition[max-height] duration-300 ${
                dropdown.unit_type ? 'max-h-36  py-3' : undefined
              }  `}>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='checkbox'
                  name='bags'
                  id='bags'
                  onChange={filter_unit_types}
                />
                <label htmlFor='bags' className='ml-2'>
                  Bags
                </label>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='checkbox'
                  name='carton'
                  id='carton'
                />
                <label htmlFor='carton' className='ml-2'>
                  Carton
                </label>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='checkbox'
                  name='bottle'
                  id='bottle'
                />
                <label htmlFor='bottle' className='ml-2'>
                  Bottle
                </label>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='checkbox'
                  name='Kilogram'
                  id='Kilogram'
                  onChange={filter_unit_types}
                />
                <label htmlFor='Kilogram' className='ml-2'>
                  Kilogram (KG)
                </label>
              </li>
              <li className='flex items-center'>
                <input type='checkbox' className='checkbox' name='mt' id='mt' />
                <label htmlFor='mt' className='ml-2'>
                  Metric Tonne (MT)
                </label>
              </li>
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
              className={`max-h-0 overflow-hidden transition[max-height] duration-300 ${
                dropdown.code ? 'max-h-36  py-3' : undefined
              }  `}>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='checkbox'
                  name='afin'
                  id='afin'
                />
                <label htmlFor='afin' className='ml-2'>
                  AFIN
                </label>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='checkbox'
                  name='dmaz'
                  id='dmaz'
                />
                <label htmlFor='dmaz' className='ml-2'>
                  DMAZ
                </label>
              </li>
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
              className={`max-h-0 overflow-hidden transition[max-height] duration-300 ${
                dropdown.type ? 'max-h-36  py-3' : undefined
              }  `}>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='checkbox'
                  name='input'
                  id='input'
                />
                <label htmlFor='input' className='ml-2'>
                  Input
                </label>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='checkbox'
                  name='commodity'
                  id='commodity'
                />
                <label htmlFor='commodity' className='ml-2'>
                  Commodity
                </label>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='checkbox'
                  name='fees'
                  id='fees'
                />
                <label htmlFor='fees' className='ml-2'>
                  Fees
                </label>
              </li>
            </ul>
          </div>

          <button className='w-[90px] mt-[100px] self-center py-3 font-medium text-white bg-[#38CB89] rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center'>
            <span>Search</span>
          </button>
        </div>
      </form>
    </Drawer>
  );
}

export default Filtermodal;
