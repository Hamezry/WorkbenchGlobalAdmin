import React from 'react';
import { NavLink } from 'react-router-dom';

const TabNavigation = () => {
  return (
    <div className='flex items-center w-[100%] h-[10%] p-4'>
      <div className='flex w-full items-center gap-8  border-b-2 child:pb-2'>
        <NavLink
          to='/countries'
          end
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-b-afexgreen' : undefined
          }>
          Heat Map
        </NavLink>
        <NavLink
          to='/countries/list'
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-b-afexgreen' : undefined
          }>
          Countries List
        </NavLink>
      </div>
    </div>
  );
};

export default TabNavigation;
