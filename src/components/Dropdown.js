import { useState } from 'react';
import { Popover, Text } from '@mantine/core';
import { BsThreeDots } from "react-icons/bs";

function Dropdown({ setDeactivateProduct, item, openModal }) {
    const [opened, setOpened] = useState(false);

    return (
        <Popover opened={opened}
            onChange={setOpened}
            width={'100%'}
            position="bottom-end"
        >


            <Popover.Target>
                <BsThreeDots onClick={() =>
                    setOpened(true)}
                    className='text-[20px] text-black' />

            </Popover.Target>

            <Popover.Dropdown>
                <Text size="sm" >Update</Text>
                <Text size="sm"
                    onClick={() => {
                        setOpened(false)
                        setDeactivateProduct(true);
                        console.log(openModal(item.pk))


                    }}>Deactivate</Text>
            </Popover.Dropdown>
        </Popover>
    )
}

export default Dropdown;
