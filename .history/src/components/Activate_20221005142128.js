import React from 'react'
import ladyIcon from "../Assets/ladyicon.svg";


function Activate({ setActivate, setViewActivate, setSuccess }) {
    return (
        <div className="bg-[#FFFFFF] flex flex-col items-center absolute w-[500px] h-[420px] left-[35%] mt-[10%] rounded-3xl px-6">
            <div className="flex flex-col gap-5 mb-6 mt-14 items-center p-1 text-center">
                <img src={ladyIcon} alt="" className="h-[150px]" />
                <p>Are you sure you want to activate this Account.</p>
                <span className="text-[#9FA19C] text-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                    porttitor <br /> ultricies mauris et lobortis. Tristique pellentesque
                </span>

                <div className="flex mx-auto gap-4 items-center ">
                    <button className='text-[12px] text-gray-500 bg-[#eff1f1] rounded h-[40px] w-[180px] p-4'
                        onClick={() => {
                            setViewActivate(false)
                        }}>
                        Cancel
                    </button>
                    <button className='text-[15px] text-center text-white bg-[#38CB89] rounded h-[40px] w-[180px] p-4'
                        onClick={() => {
                            setSuccess(true)
                            setActivate(false)
                        }}>
                        Activate
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Activate
