import React from 'react'
import { useState } from "react";

function Dropdown() {
    const [clickActions, setClickActions] = useState(false);

    return (
        <div>
            <div>
                <span>Select Action</span>
                
            </div>
            {
                clickActions &&
                <ul className='actions-list absolute w-full border bg-bggrey border-afexgreen-light py-[6px] rounded-[5px] mt-[2px]'>
                    <li>
                        Export
                    </li>
                    <li>
                        Upload Cert.
                    </li>
                </ul>
            }

        </div>
    )
}

export default Dropdown
