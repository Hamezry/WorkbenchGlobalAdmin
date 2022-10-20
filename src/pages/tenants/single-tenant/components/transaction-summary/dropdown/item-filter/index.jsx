import React from 'react';

function FilterItem({ itemList, handleItemFilter, setOpened, setDrop }) {
  return (
    <>
      <div className=' cursor-text text-gray-300 border-b-2  border-gray-100 px-4'>
        Filter by item
      </div>
      {itemList?.map((item) => (
        <div
          key={item.pk}
          className='w-full text-sm flex gap-2 items-center  hover:bg-afexgreen-lighter cursor-pointer rounded p-2'
          onClick={() => {
            handleItemFilter(item.pk);
            setOpened((prev) => !prev);
            setDrop(true);
          }}>
          {item?.name}
        </div>
      ))}
    </>
  );
}

export default FilterItem;
