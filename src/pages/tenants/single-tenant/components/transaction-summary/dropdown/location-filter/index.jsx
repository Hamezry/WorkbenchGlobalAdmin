import React from 'react';

function FilterLocation({
  locationList,
  handleLocationFilter,
  setOpened,
  setDrop,
}) {
  return (
    <>
      <div className=' cursor-text text-gray-300 border-b-2  border-gray-100 px-4'>
        Filter by location
      </div>

      {locationList?.map((item) => (
        <div
          className='w-full text-sm flex gap-2 items-center  hover:bg-afexgreen-lighter cursor-pointer rounded p-2'
          key={item.pk}
          onClick={() => {
            handleLocationFilter(item.pk);
            setOpened((prev) => !prev);
            setDrop(true);
          }}>
          {item?.name}
        </div>
      ))}
    </>
  );
}

export default FilterLocation;
