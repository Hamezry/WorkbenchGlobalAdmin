import React from 'react';
import { NavLink } from 'react-router-dom';

const TabNavigation = () => {
  return (
    <div className='flex items-center w-[100%] h-[10%] p-4'>
      <div className='flex w-full items-center gap-8'>
        <NavLink
          to='/countries'
          className={({ isActive }) =>
            isActive ? 'text-red-300' : 'text-afexgreen'
          }>
          Heat Map
        </NavLink>
        <NavLink
          to='/countries/list'
          className={({ isActive }) =>
            isActive ? 'text-red-300' : 'text-afexgreen'
          }>
          Countries List
        </NavLink>
      </div>
    </div>
  );
};

export default TabNavigation;
