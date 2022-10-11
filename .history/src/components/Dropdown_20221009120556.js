import { Popover, Text, Button } from '@mantine/core';

function Dropdown () {
    return (
        <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
                <Button>Toggle popover</Button>
            </Popover.Target>
            <Popover.Dropdown>
                <Text size="sm">Activate</Text>
                <Text size="sm">Deactivate</Text>
            </Popover.Dropdown>
        </Popover>
    )
}

export default Dropdown;
