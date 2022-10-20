import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useField, Field } from 'formik';

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
const DropdownSelect = (props) => {
  const { label, ...rest } = props;
  const [showOpts, setShowOpts] = useState(false);
  const [field, meta, helpers] = useField(rest);

  const { setValue } = helpers;

  return (
    <div className='relative'>
      {props.label && (
        <label
          htmlFor={props.name || props.id}
          className='block mb-5 text-base tracking-wide text-[#54565b]'>
          {props.label}
        </label>
      )}

      <div className='relative w-full' onClick={() => setShowOpts((s) => !s)}>
        <Field
          className={`block w-full py-4 border bg-[#F9FAFB] text-[#9fa19c] text-sm rounded-2xl px-3 pr-6 focus:outline-none focus:ring-1 focus:ring-afexgreen appearance-none invalid:ring-red-400 ${
            props.className
          } ${showOpts && 'ring-1 ring-afexgreen'}`}
          disabled
          id={props.id}
          name={props.name}
          // value={select.value}
          {...field}
          {...rest}
        />
        <MdKeyboardArrowDown className='absolute top-[30%] right-3 text-gray-400 text-lg' />
      </div>
      <ul
        className={`overflow-auto absolute top-[100%] left-0 rounded-lg z-10 px-2 transition-[max-height] child:p-1 hover:child:bg-afexgreen-lighter child:cursor-pointer child:m-1 bg-[#F9FAFB] w-full ring-1 ring-afexgreen ${
          showOpts ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}>
        {props.data.map((option, index) => (
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
      {meta.error && meta.touched && (
        <span className='block text-red-400 text-xs pt-2'>{meta.error} </span>
      )}
    </div>
  );
};

export default DropdownSelect;
