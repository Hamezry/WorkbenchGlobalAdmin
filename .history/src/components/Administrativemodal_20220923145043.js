import React from 'react'
import cloudicon from '../Assets/cloudicon.svg'

function Administrativemodal() {
    return (
        <div className='w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.7)] fixed z-50 top-0 left-0'>

            <div className='bg-[#FFFFFF] flex flex-col items-center gap-6 absolute w-[600px] h-[490px] left-[38%] mt-[8%] rounded-3xl px-6'>

                <div className='flex justify-between  items-center py-10 w-full'>
                    <p className='text-[18px]'>Upload or Drag and Drop</p>

                    <div className="titleCloseBtn">
                        <button>
                            X
                        </button>
                    </div>


                </div>

                <div className='w-full flex flex-col items-center gap-6 h-[300px] bg-[#f8f8f9] border border-gray-700 border-dotted rounded-xl '>

                    <img src={cloudicon } alt=''className='mt-10'/>

                    <div className='self-center'>
                        <span className="w-[100px] py-1 font-medium text-white bg-[#9bedc8] rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
                            Choose File
                        </span>

                    </div>

                </div>




                <div className='flex flex-col gap-8'>


                    <div className='self-center'>

                        <span className="w-[120px] py-3 font-medium text-white bg-[#38CB89] rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
                            Upload
                        </span>

                    </div>

                </div>



            </div>




        </div>
    )
}

export default Administrativemodal
