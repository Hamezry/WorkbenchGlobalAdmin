import React from 'react';
import ladyIcon from '../../../../Assets/ladyicon.svg';

function Deactivate({ setDeactivateProduct, deactivate }) {
  return (
    <div className='w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0'>
      <div className='bg-[#FFFFFF] flex flex-col items-center absolute w-[600px] h-[490px] left-[35%] mt-[10%] rounded-3xl px-6'>
        <div className='flex flex-col gap-5 mb-6 mt-14 items-center p-1 text-center'>
          <img
            src={ladyIcon}
            alt='black lady with hand on mouth'
            className='h-[150px]'
          />
          <p>Are you sure you want to Deactivate this Product.</p>
          <span className='text-[#9FA19C] text-[14px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
            porttitor <br /> ultricies mauris et lobortis. Tristique
            pellentesque fermentum purus feugiat sit auctor sit sit faucibus.
          </span>

          <div className='flex flex-1 w-full grow gap-4 items-center '>
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
