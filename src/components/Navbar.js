import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Notificationmodal from './Notificationmodal';

import { useBreadCrumbs } from '../hooks';

import logo1 from '../Assets/logo.png';
import logo2 from '../Assets/afex-logo.png';
import notifications from '../Assets/Notifications.svg';
import settings from '../Assets/settings.svg';
import sunIcon from '../Assets/Day.svg';
import moonIcon from '../Assets/Night.svg';

function Navbar() {
  const [enabled, setEnabled] = useState(false);
  const [viewNotifications, setViewNotifications] = useState(false);
  const { currentLocation } = useBreadCrumbs();

  return (
    <div className='sticky font-muli bg-[#FFFFFF] shadow shadow-gray-100  w-full flex items-center justify-between p-5 h-[80px] xl:h-[90px] z-10'>
      <div className='flex  xl:justify-between 2xl:justify-around items-center w-[25%] border-none'>
        <img src={logo1} alt='logo-icon' className='lg:w-[130px] xl:w-[160px]' />

        <div className='xl:text-[20px] px-6 text-xl'>
          <p className='text-[9px] xl:text-[12px]'>
            Pages <span className='text-[#C9C8C6]'>/ {currentLocation}</span>
          </p>
          <p>{currentLocation}</p>
        </div>
      </div>

      <div className='flex justify-center relative w-[45%] items-center'>
        <input
          type='text'
          placeholder='Search'
          className='p-3 rounded-2xl text-lg text-gray-500 border-none  focus:ring-1 focus:ring-afexgreen outline-none  bg-[#F9F9F9] h-[45px] xl:h-[56px] w-[330px] xl:w-[400px] font-Muli'
        />
        <span className='absolute 2xl:left-[70%] left-[75%] top-3'>
          <AiOutlineSearch className='text-[#C9C8C6] text-[30px]' />
        </span>
      </div>

      <div className='flex justify-evenly items-center w-[30%]'>
        <div className='flex gap-2 items-center'>
          <img src={moonIcon} alt='moon icon' className='lg:w-[18px] xl:w-[25px]' />
          <label className='inline-flex relative items-center cursor-pointer'>
            <input
              type='checkbox'
              className='sr-only peer'
              checked={enabled}
              readOnly
            />
            <div
              onClick={() => {
                setEnabled(!enabled);
              }}
              className='w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-whit after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] '></div>
          </label>

          <img src={sunIcon} alt='sun icon' className='lg:w-[20px] xl:w-[18px]' />
        </div>

        <img
          src={notifications}
          alt='bell icon'
          onClick={() => {
            setViewNotifications(true);
          }}
          className='cursor-pointer lg:w-[20px] xl:w-[30px]'
        />
        <img src={settings} alt='settings switch' className='lg:w-[20px xl:w-[30px]' />
        <img src={logo2} alt='AFEX' className='lg:w-[70px] xl:w-[95px]' />
      </div>

      <Notificationmodal
        close={() => setViewNotifications(false)}
        show={viewNotifications}
      />
    </div>
  );
}

export default Navbar;
