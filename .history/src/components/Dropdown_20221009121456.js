import { Popover, Text, Button } from '@mantine/core';
import {MdExpandMore} from "react-icons/md"

function Dropdown () {
    return (
        <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
                <Button> <MdExpandMore/> </Button>
            </Popover.Target>
            <Popover.Dropdown>
                <Text size="sm">Activate</Text>
                <Text size="sm">Deactivate</Text>
            </Popover.Dropdown>
        </Popover>
    )
}

export default Dropdown;
