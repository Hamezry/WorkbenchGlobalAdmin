import { useState } from "react";
import { Popover, Text, Button } from "@mantine/core";
import filterIcon from "../../../../../../Assets/green-filter.svg";

function TransactionDropdown() {
  const [opened, setOpened] = useState(false);
  const [drop, setDrop] = useState(true);

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      width={"350px"}
      position='bottom-end'>
      <Popover.Target>
        <Button
          className='flex justify-between '
          onClick={() => setOpened((o) => !o)}>
          {" "}
          <img src={filterIcon} alt='funnel' /> Filter{" "}
        </Button>
      </Popover.Target>

      {drop && (
        <Popover.Dropdown setDrop={setDrop}>
          <Text
            size='sm'
            className=' cursor-text text-gray-300 border-b-2  border-gray-100 px-4'>
            filter
          </Text>
          <Text
            size='sm'
            className='cursor-pointer hover:bg-afexgreen-lighter rounded-xl p-1'>
            Filter by warehouse...
          </Text>
          <Text
            size='sm'
            className='cursor-pointer hover:bg-afexgreen-lighter rounded-xl p-1'
            onClick={() => {}}>
            Filter by location....
          </Text>
          <Text
            size='sm'
            className='cursor-pointer hover:bg-afexgreen-lighter rounded-xl p-1'
            onClick={() => {}}>
            Filter by item....
          </Text>
        </Popover.Dropdown>
      )}
    </Popover>
  );
}

export default TransactionDropdown;
