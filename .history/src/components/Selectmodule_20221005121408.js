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

                    input: {
                        padding:"20px",
                        borderColor: "#92a8d1",
                        
                        borderRadius:"10px",
                        focus:"#38CB89"
                    },
                    dropdown:{
                        border:"#38CB89"

                    }
                }}
            />
        </div>
    )
}

export default Selectmodule
