import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
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
const Select = ({ data, defaultValue, className, updateValue }) => {
  const [value, setValue] = useState(defaultValue ?? "Select");
  const [showOpts, setShowOpts] = useState(false);
  return (
    <div className='relative'>
      <button
        className={`relative flex items-center py-2 px-2 child:px-1 child:whitespace-nowrap w-full border border-gray-50 bg-gray-50  text-base rounded-lg cursor-pointer ${className} ${
          showOpts && "ring-1 ring-afexgreen"
        }`}
        onClick={() => {
          console.log(showOpts);
          setShowOpts((s) => !s);
        }}>
        <span className='text-gray-400'>Show: </span>
        <span>{`${value} Entries`}</span>
        <MdKeyboardArrowDown className=' text-gray-400 text-lg hover:cursor-pointer' />
      </button>

      <ul
        className={` overflow-auto absolute top-12 rounded-lg z-10 px-2 transition-[max-height] hover:child:bg-afexgreen-lighter child:cursor-pointer child:m-1 bg-gray-50 w-full ring-1 ring-afexgreen rounded-lg${
          showOpts ? "max-h-96 opacity-100 z-10" : "max-h-0 opacity-0 w-0 -z-10"
        }`}>
        {data.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => {
                setValue(option.value);
                updateValue(option.value);
                setShowOpts(false);
              }}
              className='rounded-lg w-full h-full text-start p-2'>
              {`${String(option.label)} Entries`}
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
