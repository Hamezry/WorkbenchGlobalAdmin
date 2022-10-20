import React from 'react';

import { useField } from 'formik';

const TextInput = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className=''>
        {props.label && (
          <label
            htmlFor={props.name || props.id}
            className='block mb-5 text-base tracking-wide text-[#54565b]'>
            {props.label}
          </label>
        )}
        <input
          type={props.type ?? 'text'}
          id={props.id}
          className='block w-full py-4 border bg-[#F9FAFB] text-[#9fa19c] text-sm rounded-2xl px-3 pr-6 focus:outline-none focus:ring-1 focus:ring-afexgreen appearance-none invalid:ring-red-400'
          placeholder={props.placeholder}
          {...field}
        />
        {meta.error && meta.touched && (
          <span className='block text-red-400 text-xs mt-2'>{meta.error} </span>
        )}
      </div>
    </>
  );
};

export default TextInput;
