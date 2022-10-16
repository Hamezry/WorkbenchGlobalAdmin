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
    <div className='sticky font-muli bg-[#FFFFFF] shadow shadow-gray-100  w-full flex items-center justify-between p-[35px] h-[90px] z-10'>
      <div className='flex items-center border-none'>
        <img src={logo1} alt='logo-icon' />

        <div className='ml-[70px] text-[20px]'>
          <p className='text-[12px]'>
            Pages <span className='text-[#C9C8C6]'>/ {currentLocation}</span>
          </p>
          <p>{currentLocation}</p>
        </div>
      </div>

      <div className='relative'>
        <input
          type='text'
          placeholder='Search'
          className='p-3 rounded-2xl text-sm text-gray-500 border-none  focus:ring-1 focus:ring-afexgreen outline-none  bg-[#F9F9F9] h-[56px]  w-[370px]'
        />
        <span className='absolute left-[300px] top-3'>
          <AiOutlineSearch className='text-[#C9C8C6] text-[30px]' />
        </span>
      </div>

      <div className='flex gap-14 items-center'>
        <div className='flex justify-center gap-2 items-center'>
          <img src={moonIcon} alt='moon icon' />
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

          <img src={sunIcon} alt='sun icon' />
        </div>

        <img
          src={notifications}
          alt='bell icon'
          onClick={() => {
            setViewNotifications(true);
          }}
          className='cursor-pointer'
        />
        <img src={settings} alt='settings switch' />
        <img src={logo2} alt='AFEX' />
      </div>
      {viewNotifications && (
        <Notificationmodal setViewNotifications={setViewNotifications} />
      )}
    </div>
  );
}

export default Navbar;
