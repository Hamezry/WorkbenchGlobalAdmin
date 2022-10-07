import React from 'react'
import { useState } from "react";

function Dropdown() {
    const [clickActions, setClickActions] = useState(false);
    const [uploadCertClicked, setUploadCertClicked] = useState(false);

    return (
        <div>
            <div className='cursor-pointer transition-all duration-300 flex items-center rounded-[5px] border border-green-500 py-[9px]  px-[15px] fill-afexgreen hover:bg-afexgreen hover:text-white'>
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
