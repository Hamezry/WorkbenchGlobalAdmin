import React from 'react';
import axios from '../../../../utils/axios';
import ladyIcon from '../../../../Assets/ladyicon.svg';

import { useTenantsCtx } from '../../../../contexts';

import customNotification from '../../../../utils/notification';

function Deactivate({ setViewDeactivate, modalData }) {
  const { refreshContext } = useTenantsCtx();

  const changeStatus = () => {
    axios
      .get(`tenant/change/status/${modalData.id}`)
      .then(() => {
        customNotification({
          heading: 'Tenant Deactivated successfully',
          id: 'success',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        });
        refreshContext();
      })
      .catch((err) => {
        customNotification({
          heading: 'Oops! Something went wrong',
          id: 'error',
          text: err.message,
        });
      });
  };

  return (
    <div className='bg-[#FFFFFF] flex flex-col items-center absolute w-[600px] h-[490px] left-[35%] mt-[10%] rounded-3xl px-6'>
      <div className='flex flex-col gap-5 mb-6 mt-14 items-center p-1 text-center'>
        <img src={ladyIcon} alt='' className='h-[150px]' />
        <p>Are you sure you want to Deactivate this Account.</p>
        <span className='text-[#9FA19C] text-[14px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
          porttitor <br /> ultricies mauris et lobortis. Tristique pellentesque
          fermentum purus feugiat sit auctor sit sit faucibus.
        </span>

        <div className='flex mx-auto  gap-4 items-center '>
          <div className='flex justify-center gap-2 rounded items-center text-[18px]  bg-[#e9ebea] h-[50px] w-[200px] p-4'>
            <button
              onClick={() => {
                setViewDeactivate(false);
              }}>
              Cancel
            </button>
          </div>

          <div className='flex justify-center gap-2 rounded items-center text-[18px] text-white bg-[#38CB89] h-[50px] w-[200px] p-4'>
            <button
              onClick={() => {
                setViewDeactivate(false);
                changeStatus();
              }}>
              Deactivate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deactivate;