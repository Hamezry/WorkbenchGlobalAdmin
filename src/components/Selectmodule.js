import React from 'react'
import { Select } from '@mantine/core';

function Selectmodule() {
    return (
        <div>
            <Select

                placeholder="Select Action"
                data={[
                    { value: 'activate', label: 'Activate Selected' },
                    { value: 'ng', label: 'Deactivate Selected' },
                    
                ]}
                styles={{

                    input: {
                        padding:"20px",
                        borderColor: "#38CB89",
                        
                        borderRadius:"10px",
                        focus:"#38CB89"
                    },
                    dropdown:{
                        borderColor:"#38CB89",
                        backgroundColor:"#F9FAFB",
                        color:"#C9C8C6",

                    }
                }}
            />
        </div>
    )
}

export default Selectmodule
