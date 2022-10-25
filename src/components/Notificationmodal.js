import React from 'react';
import { Drawer } from '@mantine/core';

import profIcon from '../Assets/Ellipse 1.svg';
import profIcon2 from '../Assets/Ellipse 2.svg';
import dot from '../Assets/Ellipse.svg';

function Notificationmodal({ close, show }) {
  return (
    <Drawer
      opened={show}
      onClose={close}
      position='right'
      size='25%'
      title='Notifications'
      styles={{
        drawer: {
          right: '2rem',
          top: '3rem',
          transform: 'translateY(-3rem)',
          borderRadius: '40px !important',
          height: '90%',
          overflow: ' auto',
          padding: '1.5rem 1rem !important',
        },
      }}>
      <div className='flex flex-col'>
        <div name='box1' className=' p-5'>
          <p>Today</p>

          <div className='flex mt-8 gap-3 rounded-lg p-3 bg-[#F9F9F9] text-[14px]'>
            <div>
              {' '}
              <img src={profIcon} alt='User' />
            </div>

            <div>
              <p>Simire Cornelius - Simicorn</p>
              <p className='text-[12px]'>raised a GRN with ID: #235459320TP</p>
            </div>

            <div>
              <span className='text-[10px]'>08:15 AM</span>
              <img
                src={dot}
                alt='notification dot'
                className='ml-[40px] mt-[40%]'
              />
            </div>
          </div>

          <div className='flex mt-4 gap-3 rounded-lg p-3 bg-[#F9F9F9] text-[14px]'>
            <div>
              {' '}
              <img src={profIcon2} alt='avatar' />
            </div>

            <div>
              <p>Simire Cornelius - Simicorn</p>
              <p className='text-[12px]'>raised a GRN with ID: #235459320TP</p>
              <div className='flex w-[190px] gap-2 mt-2'>
                <p className='text-[12px] border-l-2 border-l-gray-200 pl-2 ml-3'>
                  Wo!! The maize whey i collect don spoil fa!
                </p>
              </div>
            </div>

            <div className='relative'>
              <span className='text-[10px]'>08:15 AM</span>
              <img
                src={dot}
                alt='notification dot'
                className='ml-[40px] mt-[100%]'
              />
            </div>
          </div>
        </div>

        <div name='box2' className=' p-5'>
          <p>Yesterday</p>

          <div className='flex mt-8 gap-3 rounded-lg p-3 bg-[#F9F9F9] text-[14px]'>
            <div>
              {' '}
              <img src={profIcon} alt='avatar' />
            </div>

            <div>
              <p>Mustapha Akanaki - Makanaki</p>
              <p className='text-[12px]'>raised a GRN with ID: #235459320TP</p>
            </div>

            <div>
              <span className='text-[10px]'>08:15 AM</span>
              <img
                src={dot}
                alt='notification dot'
                className='ml-[40px] mt-[40%]'
              />
            </div>
          </div>

          <div className='flex mt-4 gap-3 rounded-lg p-3 bg-[#F9F9F9] text-[14px]'>
            <div>
              {' '}
              <img src={profIcon2} alt='avatar' />
            </div>

            <div>
              <p>Demilade Agboola - Dagboo</p>
              <p className='text-[12px]'>raised a GRN with ID: #235459320TP</p>
              <div className='flex w-[190px] gap-2 mt-2'>
                <p className='text-[12px] border-l-2 border-l-gray-200 pl-2 ml-3'>
                  Wo!! The maize whey i collect don spoil fa!
                </p>
              </div>
            </div>

            <div className='relative'>
              <span className='text-[10px]'>08:15 AM</span>
              <img
                src={dot}
                alt='notification dot'
                className='ml-[40px] mt-[100%]'
              />
            </div>
          </div>

          <div className='flex mt-4 gap-3 rounded-lg p-3 bg-[#F9F9F9] text-[14px]'>
            <div>
              {' '}
              <img src={profIcon2} alt='avatar' />
            </div>

            <div>
              <p>Simire Cornelius - Simicorn</p>
              <p className='text-[12px]'>raised a GRN with ID: #235459320TP</p>
              <div className='flex w-[190px] gap-2 mt-6'>
                <button className='text-[12px] text-white rounded-md bg-[#38CB89] py-2 px-6'>
                  Accept
                </button>
                <button className='text-[12px] text-gray-400 rounded-md bg-white border-2 py-2 px-6'>
                  Reject
                </button>
              </div>
            </div>

            <div className='relative'>
              <span className='text-[10px]'>08:15 AM</span>
              <img
                src={dot}
                alt='notification dot'
                className='ml-[40px] mt-[70px]'
              />
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
}

export default Notificationmodal;
