import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
/**
 *
 * data: [{
 *  value: string;
 *  label: string;
 * }]
 *
 * label: string
 * id: string
 * name: string
 * placeholder: string
 * default: string
 */

const TableSelect = ({
  data,
  defaultValue,
  placeholder,
  className,
  updateValue,
}) => {
  const [value, setValue] = useState(defaultValue ?? 'Select');
  const [showOpts, setShowOpts] = useState(false);
  return (
    <div className='relative cursor-pointer'>
      <div className='relative w-full' onClick={() => setShowOpts((s) => !s)}>
        <span className='text-gray-400 absolute text-sm top-[13px] ml-2 left-1'>
          Show:{' '}
        </span>
        <input
          className={`flex p-1 w-full border pl-14 py-3 bg-gray-50 text-sm rounded-2xl cursor-pointer ${className} ${
            showOpts && 'ring-1 ring-afexgreen'
          }`}
          disabled
          value={value}
          placeholder={placeholder}
        />

        <MdKeyboardArrowDown className='absolute top-4 right-2 text-gray-400 text-lg' />
      </div>
      <ul
        className={`overflow-auto absolute top-14 rounded-lg z-10 px-2 transition-[max-height] child:p-1 hover:child:bg-afexgreen-lighter child:cursor-pointer child:m-1 bg-gray-50 w-full ring-1 ring-afexgreen rounded-lg${
          showOpts ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        {data.map((option, index) => (
          <li
            key={index}
            onClick={() => {
              setValue(option.label);
              updateValue(option.value);
              setShowOpts(false);
            }}
            className='text-gray-400 rounded-lg'>
            {String(option.label)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableSelect;
