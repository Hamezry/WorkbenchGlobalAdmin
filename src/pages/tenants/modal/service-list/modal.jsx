import React from 'react';
import { Modal } from '@mantine/core';

import shockedFace from '../../../../Assets/shocked.svg';

const ServiceModal = ({ show, close, activate, deactivate, active }) => {
  return (
    <Modal
      onClose={close}
      shadow='md'
      opened={show}
      centered
      withCloseButton={false}
      className='px-8'>
      <>
        <div className='flex items-center justify-center w-full space-y-6 mb-6 p-2 flex-col text-center'>
          <img
            src={shockedFace}
            alt='Icon of black woman with shocked expression'
          />
          <p className='font-semibold'>
            Are you sure you want to {!active ? 'activate' : 'deactivate'} this
            service?
          </p>
          <p className='text-gray-400 text-[14px]'>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div className='flex gap-5'>
          <button
            onClick={close}
            className='p-3 flex-1 w-full bg-gray-50 ring-1 ring-gray-200 rounded-xl hover:ring-gray-400 text-gray-400'>
            Cancel
          </button>
          <button
            onClick={
              !active
                ? () => {
                    activate();
                  }
                : () => {
                    deactivate();
                  }
            }
            className={`p-3 flex-1 w-full rounded-xl ring-1 text-white hover:bg-white ${
              !active
                ? 'bg-[#38CB89] ring-[#38CB89] hover:text-[#38CB89]'
                : 'bg-red-500 ring-red-500 hover:text-red-500'
            }`}>
            {!active ? 'Activate' : 'Deactivate'}
          </button>
        </div>
      </>
    </Modal>
  );
};

export default ServiceModal;
