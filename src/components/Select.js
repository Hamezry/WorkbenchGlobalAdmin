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
      {label && (
        <label
          htmlFor={name || id}
          className='block mb-5 text-base tracking-wide text-[#54565b]'>
          {label}
        </label>
      )}
      <div className='relative w-full' onClick={() => setShowOpts((s) => !s)}>
        <input
          className={`block p-1 w-full border bg-[#F9FAFB] text-[#9fa19c] text-base rounded-2xl cursor-pointer ${className} ${
            showOpts && 'ring-1 ring-afexgreen'
          }`}
          disabled
          value={value}
          placeholder={placeholder}
        />
        <MdKeyboardArrowDown className='absolute top-2 right-0 text-gray-400 text-lg' />
      </div>
      <ul
        className={`overflow-auto absolute top-[100%] left-0 rounded-lg z-10 px-2 transition-[max-height] child:p-1 hover:child:bg-afexgreen-lighter child:cursor-pointer  bg-[#F9FAFB] w-full ring-1 ring-afexgreen ${
          showOpts ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}>
        {data.map((option, index) => (
          <li
            key={index}
            onClick={() => {
              setValue(option.value);
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
