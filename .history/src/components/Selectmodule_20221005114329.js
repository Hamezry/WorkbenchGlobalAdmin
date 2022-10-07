import React from 'react'
import { Select } from '@mantine/core';

function Selectmodule() {
    return (
        <div>
            <Select
                className="border-2 border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89]  bg-white h-[40px] p-4"
                placeholder="Select Action"
                data={[
                    { value: 'react', label: 'React' },
                    { value: 'ng', label: 'Angular' },
                    { value: 'svelte', label: 'Svelte' },
                    { value: 'vue', label: 'Vue' },
                ]}
                styles={{
                    input: {
                        color:"green"
                    }
                }}
            />
        </div>
    )
}

export default Selectmodule
