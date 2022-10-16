import { useState } from 'react';
import { Popover, Text, Button } from '@mantine/core';
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
        <Button onClick={() => setOpened((o) => !o)}>
          {' '}
          Select Action <MdExpandMore />{' '}
        </Button>
      </Popover.Target>

      <Popover.Dropdown>
        <Text size='sm'>Activate Selected</Text>
        <Text size='sm' onClick={() => {}}>
          Deactivate Selected
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export default TenantDropdown;
