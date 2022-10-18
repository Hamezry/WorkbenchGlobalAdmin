import { useState } from 'react';
import { Popover, Text } from '@mantine/core';
import { MdExpandMore } from 'react-icons/md';

function TenantDropdown() {
  const [opened, setOpened] = useState(false);

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      width={'180px'}
      position='bottom-end'>
      <Popover.Target>
        <button
          className='flex gap-4 border rounded-lg border-afexgreen text-afexgreen  items-center text-[14px] hover:bg-afexgreen hover:text-[#ffff]  bg-[#ffff] h-[40px] w-full p-3'
          onClick={() => setOpened((o) => !o)}>
          {' '}
          Select Action <MdExpandMore />{' '}
        </button>
      </Popover.Target>

      <Popover.Dropdown>
        <Text
          size='sm'
          className='cursor-pointer hover:bg-afexgreen-lighter rounded-xl p-1'>
          Activate Selected
        </Text>
        <Text
          size='sm'
          className='cursor-pointer hover:bg-afexgreen-lighter rounded-xl p-1'
          onClick={() => {}}>
          Deactivate Selected
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export default TenantDropdown;
