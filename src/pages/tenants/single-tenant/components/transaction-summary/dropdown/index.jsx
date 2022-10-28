import { useState } from 'react';
import { Popover } from '@mantine/core';
import { Filter } from 'iconsax-react';
import FilterTransaction from './filter';
import WarehouseFilter from './warehouse-filter';
import LocationFilter from './location-filter';
import ItemFilter from './item-filter';

function TransactionDropdown({
  locationList,
  warehouseList,
  itemList,
  handleLocationFilter,
  handleWarehouseFilter,
  handleItemFilter,
}) {
  const [opened, setOpened] = useState(false);
  const [drop, setDrop] = useState(false);
  const [warehouseDrop, setWarehouseDrop] = useState(true);
  const [locationDrop, setLocationDrop] = useState(true);
  const [itemDrop, setItemDrop] = useState(true);

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      width={'350px'}
      position='bottom-end'>
      <Popover.Target>
        <button
          className='flex gap-2 rounded-md items-center text-[14px] xl:text-[18px] bg-[#ffff] text-[#38CB89] border border-[#38CB89] hover:bg-[#38CB89] hover:text-[#ffff] h-[40px] w-full p-4'
          onClick={() => {
            setOpened((prev) => !prev);
            setDrop(true);
            setWarehouseDrop(false);
            setLocationDrop(false);
            setItemDrop(false);
          }}>
          {' '}
          <Filter variant='Bold' />
          Filter{' '}
        </button>
      </Popover.Target>

      <Popover.Dropdown
        style={{
          width: '150px',
          height: '200px',
          overflow: 'scroll',
          backgroundColor: 'white',
          border: '1px',
          margin: '8px',
        }}>
        {drop && (
          <FilterTransaction
            setOpened={setOpened}
            setDrop={setDrop}
            setWarehouseDrop={setWarehouseDrop}
            setLocationDrop={setLocationDrop}
            setItemDrop={setItemDrop}
          />
        )}

        {locationDrop && (
          <LocationFilter
            setOpened={setOpened}
            setDrop={setDrop}
            locationList={locationList}
            handleLocationFilter={handleLocationFilter}
          />
        )}

        {warehouseDrop && (
          <WarehouseFilter
            setOpened={setOpened}
            setDrop={setDrop}
            warehouseList={warehouseList}
            handleWarehouseFilter={handleWarehouseFilter}
          />
        )}

        {itemDrop && (
          <ItemFilter
            setOpened={setOpened}
            setDrop={setDrop}
            itemList={itemList}
            handleItemFilter={handleItemFilter}
          />
        )}
      </Popover.Dropdown>
    </Popover>
  );
}

export default TransactionDropdown;
