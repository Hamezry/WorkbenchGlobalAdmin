import React from 'react'
import {useState } from "react";

function Dropdown() {
    const [clickActions, setClickActions] = useState("text-green-500");

    return (
        <div className='relative z-[1]'>
            <div className={`svg-box1 cursor-pointer transition-all duration-300 flex items-center rounded-[5px] border border-afexgreen py-[9px]   px-[15px] fill-afexgreen hover:bg-afexgreen hover:text-white ${clickActions}`}
                onClick={() =>
                    clickActions.trim().length > 14
                        ? setClickActions("text-afexgreen")
                        : setClickActions(
                            "bg-afexgreen text-white svg-box1-active"
                        )
                }>
                <span className='pr-[7px] '>Select Action</span>
                <svg
                    width='11'
                    height='6'
                    viewBox='0 0 11 7'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='transition-all duration-300'>
                    <path
                        d='M1 1L5.25 5.25L9.5 1'
                        fill='none'
                        stroke='#38cb89'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            </div>
            <ul className='actions-list absolute w-full border bg-bggrey border-afexgreen-light py-[6px] rounded-[5px] mt-[2px] hidden'>
                <li onClick={() => setClickActions("text-afexgreen")}>
                    Export
                </li>
                <li
                    onClick={() => {
                        setClickActions("text-afexgreen");
                        setUploadCertClicked(true);
                    }}>
                    Upload Cert.
                </li>
            </ul>
        </div>
    )
}

export default Dropdown
