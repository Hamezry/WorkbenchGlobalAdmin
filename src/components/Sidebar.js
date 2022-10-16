import React from 'react';
import { NavLink } from 'react-router-dom';

import orgIcon from '../Assets/building.svg';
import prodIcon from '../Assets/box.svg';
import globeIcon from '../Assets/world.svg';
//import bulkIcon from "../Assets/folder-2.svg";

function Sidebar() {
  const activeStyle =
    'bg-[#e2f8ee] border-r-4 border-[#38CB89] mt-4 flex items-center rounded ';
  const baseStyle = 'flex items-center rounded hover:bg-[#e2f8ee] w-full mt-4';

  return (
    <div className='sticky flex flex-col font-muli left-0 w-[16%] bg-[#FFFFFF] h-[calc(100vh-90px)] border-none'>
      <div className='overflow-x-hidden text-[#8B908B] h-full border-r-0.5 flex flex-col'>
        <div className='flex flex-col border-r-2 border-r-[#F3F3F3] h-[100%] mr-8 pt-4 pl-3'>
          <div className='mt-4 ml-2'>
            <span className='text-sm font-semibold text-gray-400 uppercase'>
              PAGES
            </span>
          </div>

          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}>
            <li className='flex gap-2 items-center p-2'>
              <span>
                <img src={orgIcon} alt='buillding' />
              </span>
              <span>Tenants</span>
            </li>
          </NavLink>
          <NavLink
            to='products'
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}>
            <li className='flex gap-2 items-center p-2'>
              <span>
                <img src={prodIcon} alt='box' />
              </span>
              <span>Products</span>
            </li>
          </NavLink>
          <NavLink
            to='countries'
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}>
            <li className='flex gap-2 items-center p-2'>
              <span>
                <img src={globeIcon} alt='globe' />
              </span>
              <span>Countries</span>
            </li>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
