import React from 'react'
import { Select } from '@mantine/core';

function Selectmodule() {
    return (
        <div>
            <Select

                placeholder="Select Action"
                data={[
                    { value: 'react', label: 'React' },
                    { value: 'ng', label: 'Angular' },
                    { value: 'svelte', label: 'Svelte' },
                    { value: 'vue', label: 'Vue' },
                ]}
                styles={{
                    
                    dropdown: {

                    }
                }}
            />
        </div>
    )
}

export default Selectmodule
