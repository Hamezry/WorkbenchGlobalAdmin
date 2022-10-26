import { useState } from 'react';
import { Popover, Text } from '@mantine/core';
import { MdExpandMore } from 'react-icons/md';

function TenantDropdown() {
  const [opened, setOpened] = useState(false);

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      width={'max-content'}
      position='bottom-end'>
      <Popover.Target>
        <button
          className='flex gap-4 border rounded-lg border-afexgreen text-afexgreen  items-center text-sm xl:text-[14px] hover:bg-afexgreen hover:text-[#ffff]  bg-[#ffff] xl:h-[40px] w-full p-2 xl:p-3'
          onClick={() => setOpened((o) => !o)}>
          Select Action{' '}
          <MdExpandMore
            className={`transition-all duration-200 ${
              opened ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </Popover.Target>

      <Popover.Dropdown>
        <Text
          size='sm'
          className='cursor-pointer hover:bg-afexgreen-lighter rounded-xl p-2'>
          Activate all
        </Text>
        <Text
          size='sm'
          className='cursor-pointer hover:bg-afexgreen-lighter rounded-xl p-2'
          onClick={() => {}}>
          Deactivate all
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export default TenantDropdown;
