import React from 'react'
import { useField, } from 'formik'

const Checkbox = (props) => {
  const [field, meta] = useField(props)
  return (
    <>
      <div className='flex items-center gap-2'>
        <input
          type='checkbox'
          id={props.id}
          className='checkbox'
          {...field}
          checked={field.value}
        />
        <label htmlFor={props.id} className='text-sm mt-1'>
          {props.label}
        </label>
      </div>
      {
        meta.error && meta.touched && (
          <span className='block text-red-400 text-xs mt-2'>{meta.error} </span>
        )
      }
    </>
  )
}

export default Checkbox
