import React from 'react'

function Administrativemodal() {
    return (
        <div className='w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.7)] fixed z-50 top-0 left-0'>

            <div className='bg-[#FFFFFF] absolute w-[450px] h-[700px] left-[38%] mt-[8%] rounded-3xl px-10'>

                <div className='flex justify-between  items-center border-b-2 py-6 w-full'>
                    <p className='text-[18px]'>Upload or Drag and Drop</p>

                    <div className="titleCloseBtn">
                        <button>
                            X
                        </button>
                    </div>


                </div>

                <div className='w-[461px] h-[253px] bg-[#A0AEC0] border-dotted '>

                    <div className='self-center'>

                        <span className="w-[400px] py-3 font-medium text-white bg-[#abf4d3] rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
                        Choose File
                        </span>

                    </div>

                </div>


                <form action="" class="my-10">

                    <div className='flex flex-col gap-8'>


                        <div className='self-center'>

                            <span className="w-[400px] py-3 font-medium text-white bg-[#38CB89] rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
                                Upload
                            </span>

                        </div>

                    </div>

                </form>

            </div>




        </div>
    )
}

export default Administrativemodal
