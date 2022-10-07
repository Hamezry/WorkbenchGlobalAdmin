import React from 'react'
import ladyIcon from "../../Assets/ladyicon.svg";
import axios from 'axios';



function Activate({ setViewActivate, setSuccess, modalData, }) {


    const changeStatus =()=>{

        axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/tenant/change/status/${modalData.id}`)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }

    console.log(modalData.id)
    

    return (
        <div className="bg-[#FFFFFF] flex flex-col items-center absolute w-[500px] h-[420px] left-[35%] mt-[10%] rounded-3xl px-6">
            <div className="flex flex-col gap-5 mb-6 mt-14 items-center p-1 text-center">
                <img src={ladyIcon} alt="" className="h-[150px]" />
                <p>Are you sure you want to activate this Account.</p>
                <span className="text-[#9FA19C] text-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                    porttitor ultricies mauris et lobortis. Tristique pellentesque
                </span>

                <div className="flex mx-auto gap-4 items-center ">
                    <button className='text-[15px] flex items-center text-center text-gray-500 bg-[#eff1f1] rounded h-[40px]  p-5'
                        onClick={() => {
                            setViewActivate(false)
                        }}>
                        Cancel
                    </button>
                    <button className='text-[15px] flex items-center text-center text-white bg-[#38CB89] rounded h-[40px] p-5'
                        onClick={() => {
                            setSuccess(true)
                            changeStatus();
                        }}>
                        Activate
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Activate
