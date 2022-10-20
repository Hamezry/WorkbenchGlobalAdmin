import React from 'react';

function WarehouseFilter({
  warehouseList,
  handleWarehouseFilter,
  setOpened,
  setDrop,
}) {
  return (
    <>
      <div className=' cursor-text text-gray-300 border-b-2  border-gray-100 px-4'>
        Filter by location
      </div>

      {warehouseList?.map((item) => (
        <div
          key={item.id}
          className='w-full text-sm flex gap-2 items-center  hover:bg-afexgreen-lighter cursor-pointer rounded p-2'
          onClick={() => {
            handleWarehouseFilter(item.id);
            setOpened((prev) => !prev);
            setDrop(true);
          }}>
          {item?.name}
        </div>
      ))}
    </>
  );
}

export default WarehouseFilter;
