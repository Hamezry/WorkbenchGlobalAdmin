import React from 'react';
import ladyIcon from '../Assets/ladyicon.svg';

function Success({ setViewActivate, activate }) {
  return (
    <div className='bg-[#FFFFFF] flex flex-col items-center absolute w-[600px] h-[490px] left-[35%] mt-[10%] rounded-3xl px-6'>
      <div className='flex flex-col gap-5 mb-6 mt-14 items-center p-1 text-center'>
        <img
          src={ladyIcon}
          alt='black lady with shocked expression'
          className='h-[150px]'
        />
        <p>
          Tenant Account {activate ? 'Activated' : 'Deactivated'} Successfully.
        </p>
        <span className='text-[#9FA19C] text-[14px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
          porttitor <br /> ultricies mauris et lobortis. Tristique pellentesque
          fermentum purus feugiat sit auctor sit sit faucibus.
        </span>

        <div className='flex justify-center gap-2 rounded items-center text-[12px] text-white bg-[#38CB89] h-[50px] w-[200px] p-4'>
          <button
            onClick={() => {
              setViewActivate(false);
            }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
