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
const Select = ({
  data,
  label,
  id,
  name,
  defaultValue,
  placeholder,
  className,
  updateValue,
}) => {
  const [value, setValue] = useState(defaultValue ?? 'Select');
  const [showOpts, setShowOpts] = useState(false);
  return (
    <div className='relative'>
      <label
        htmlFor={name || id}
        className='block text-base tracking-wide text-[#54565b]'>
        {label}
      </label>
      <div className='relative w-full' onClick={() => setShowOpts((s) => !s)}>
        <input
          className={`flex p-1 w-full border bg-gray-50 text-[#9fa19c] text-base rounded-lg cursor-pointer ${className} ${
            showOpts && 'ring-1 ring-afexgreen'
          }`}
          disabled
          value={value}
          placeholder={placeholder}
        />
        <MdKeyboardArrowDown className='absolute top-2 right-0 text-gray-400 text-lg' />
      </div>
      <ul
        className={`overflow-auto absolute top-10 rounded-lg z-10 px-2 transition-[max-height] child:p-1 hover:child:bg-afexgreen-lighter child:cursor-pointer child:m-1 bg-gray-50 w-full ring-1 ring-afexgreen rounded-lg${
          showOpts ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        {data.map((option, index) => (
          <li
            key={index}
            onClick={() => {
              setValue(option.value);
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

export default Select;
