import React from 'react';
import ladyIcon from '../../../../Assets/ladyicon.svg';

function Deactivate({ setDeactivateProduct, deactivate }) {
  return (
    <div
      className='w-[100vw] font-muli h-[100vh] bg-[rgba(64,64,64,0.75)] fixed z-50 top-0 left-0 flex items-center justify-center'
      onClick={() => setDeactivateProduct(false)}>
      <div
        className='bg-[#FFFFFF] flex flex-col items-center absolute w-[500px] rounded-3xl px-6'
        onClick={(e) => e.stopPropagation()}>
        <div className='flex flex-col gap-5 mb-6 mt-14 items-center p-1 text-center'>
          <img
            src={ladyIcon}
            alt='black lady with thumbs up'
            className='h-[150px]'
          />
          <p className='text-lg font-semibold'>
            Are you sure you want to Deactivate this Product?
          </p>
          <span className='text-[#9FA19C] text-[14px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
            porttitor
          </span>

          <div className='flex flex-1 w-full grow gap-4 items-center pb-2 '>
            <button
              onClick={() => {
                setDeactivateProduct(false);
              }}
              className='block w-full rounded cursor-pointer bg-[#e9ebea] p-4 text-center hover:ring-1 hover:ring-gray-400'>
              Cancel
            </button>

            <button
              onClick={() => {
                deactivate();
                setDeactivateProduct(false);
              }}
              className='block w-full rounded cursor-pointer bg-[#38CB89] p-4 text-center text-white hover:text-afexgreen hover:bg-white hover:ring-1 hover:ring-afexgreen'>
              Deactivate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deactivate;
