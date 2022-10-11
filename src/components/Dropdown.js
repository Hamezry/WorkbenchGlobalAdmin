import { Popover, Text, Button } from '@mantine/core';
import { BsThreeDots } from "react-icons/bs";

function Dropdown({setDeactivateProduct, item, openModal}) {
    return (
        <Popover width={200} position="bottom">
            <Popover.Target>
                <Button> <BsThreeDots className='text-[20px] text-black' /> </Button>
            </Popover.Target>
            <Popover.Dropdown>
                <Text size="sm">Activate</Text>
                <Text size="sm"
                    onClick={() => {
                        setDeactivateProduct(true);
                        console.log(openModal(item.pk))
                        
                    
                    }}>Deactivate</Text>
            </Popover.Dropdown>
        </Popover>
    )
}

export default Dropdown;
