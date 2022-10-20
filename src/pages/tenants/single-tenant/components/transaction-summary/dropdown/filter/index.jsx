import React from 'react';

function FilterTransaction({
  setDrop,
  setWarehouseDrop,
  setLocationDrop,
  setItemDrop,
}) {
  return (
    <>
      <div className=' cursor-text text-gray-300 border-b-2  border-gray-100 px-4'>
        filter
      </div>

      {/* FILTER BY LOCATION */}
      <div
        className='cursor-pointer hover:bg-afexgreen-lighter rounded p-2'
        onClick={() => {
          setDrop(false);
          setLocationDrop(true);
        }}>
        Filter by location....
      </div>

      {/* FILTER BY WAREHOUSE */}
      <div
        className='cursor-pointer hover:bg-afexgreen-lighter rounded p-1'
        onClick={() => {
          setDrop(false);
          setWarehouseDrop(true);
        }}>
        {' '}
        Filter by warehouse...
      </div>

      {/* FILTER BY ITEM */}
      <div
        className='cursor-pointer hover:bg-afexgreen-lighter rounded p-1'
        onClick={() => {
          setDrop(false);
          setItemDrop(true);
        }}>
        Filter by item....
      </div>
    </>
  );
}

export default FilterTransaction;
