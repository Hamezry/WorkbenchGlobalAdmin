import React from 'react'
import profIcon from '../Assets/Ellipse 1.svg'
import profIcon2 from '../Assets/Ellipse 2.svg'
import dot from '../Assets/Ellipse.svg'
import line from '../Assets/line2.svg'

function Notificationmodal({setViewNotification}) {
  return (
    <div className='w-[100vw] font-muli h-[100vh] bg-[#323B4B] opacity-90 fixed top-0 z-50'>

        <div className='bg-[#FFFFFF] rounded-[20px] absolute w-[430px] py-5 px-3 top-[7%] right-[3%]'>

            <div className='flex justify-between items-center border-b-2 p-5 w-full'>

                <p>Notifications</p>
            
                <button onClick={() => {
                        setViewNotification(false);
                        }}
                >
                    X
                </button>

            </div>

            <div name='box1' className=' p-5'>
                <p>Today</p>

                <div className='flex mt-8 gap-3 rounded-lg p-3 bg-[#F9F9F9] text-[14px]'>
                    <div> <img src={profIcon } alt=''/></div>

                    <div> 
                        <p>Simire Cornelius -  Simicorn</p>
                        <p className='text-[12px]'>raised a GRN with ID: #235459320TP</p>
                    </div>

                    <div>
                        <span className='text-[10px]'>08:15 AM</span>
                        <img src={ dot} alt='' className='ml-[40px] mt-[40%]'/>
                    </div>
                
                </div>

                <div className='flex mt-4 gap-3 rounded-lg p-3 bg-[#F9F9F9] text-[14px]'>
                    <div> <img src={profIcon2} alt=''/></div>

                    <div> 
                        <p>Simire Cornelius -  Simicorn</p>
                        <p className='text-[12px]'>raised a GRN with ID: #235459320TP</p>
                        <div className='flex w-[190px] gap-2 mt-2'>
                            <img src={line} alt=''/>
                            <p className='text-[12px]'>Wo!! The maize whey i collect don spoil fa!</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <span className='text-[10px]'>08:15 AM</span>
                        <img src={ dot} alt='' className='ml-[40px] mt-[100%]'/>
                    </div>
                
                </div>
                

            </div>

            <div name='box2' className=' p-5'>
                <p>Yesterday</p>

                <div className='flex mt-8 gap-3 rounded-lg p-3 bg-[#F9F9F9] text-[14px]'>
                    <div> <img src={profIcon } alt=''/></div>

                    <div> 
                        <p>Mustapha Akanaki -  Makanaki</p>
                        <p className='text-[12px]'>raised a GRN with ID: #235459320TP</p>
                    </div>

                    <div>
                        <span className='text-[10px]'>08:15 AM</span>
                        <img src={ dot} alt='' className='ml-[40px] mt-[40%]'/>
                    </div>
                
                </div>

                <div className='flex mt-4 gap-3 rounded-lg p-3 bg-[#F9F9F9] text-[14px]'>
                    <div> <img src={profIcon2} alt=''/></div>

                    <div> 
                        <p>Demilade Agboola - Dagboo</p>
                        <p className='text-[12px]'>raised a GRN with ID: #235459320TP</p>
                        <div className='flex w-[190px] gap-2 mt-2'>
                            <img src={line} alt=''/>
                            <p className='text-[12px]'>Wo!! The maize whey i collect don spoil fa!</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <span className='text-[10px]'>08:15 AM</span>
                        <img src={ dot} alt='' className='ml-[40px] mt-[100%]'/>
                    </div>
                
                </div>

                <div className='flex mt-4 gap-3 rounded-lg p-3 bg-[#F9F9F9] text-[14px]'>
                    <div> <img src={profIcon2} alt=''/></div>

                    <div> 
                        <p>Simire Cornelius -  Simicorn</p>
                        <p className='text-[12px]'>raised a GRN with ID: #235459320TP</p>
                        <div className='flex w-[190px] gap-2 mt-6'>
                           <button className='text-[12px] text-white rounded-md bg-[#38CB89] py-2 px-6'>Accept</button>
                           <button className='text-[12px] text-gray-400 rounded-md bg-white border-2 py-2 px-6'>Reject</button>
                        </div>
                    </div>

                    <div className='relative'>
                        <span className='text-[10px]'>08:15 AM</span>
                        <img src={ dot} alt='' className='ml-[40px] mt-[70px]'/>
                    </div>
                
                </div>
                

            </div>

        

        </div>

        

    
    </div>
  )
}

export default Notificationmodal