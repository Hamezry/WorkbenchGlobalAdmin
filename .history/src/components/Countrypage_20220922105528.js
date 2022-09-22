import React from 'react'
import africanMap from '../Assets/Map of Africa.svg'
import calenderIcon from '../Assets/calendar.svg'
import { Link } from 'react-router-dom'

function Countrypage() {
    return (
        <div className='w-[85%] font-muli h-[calc(100vh-90px)] p-1'>

            <div className='flex  p-4 items-center w-[100%] h-[10%]'>

                <div className='flex border-b-2 w-full items-center gap-8'>
                    <p className='border-b-2 border-b-[#38CB89]  py-5'>Heat Map</p>
                    <Link to='/countrylist'> <span>Country List</span> </Link>
                </div>

            </div>



            <div className='w-full h-[calc(100%-10%)] rounded-2xl p-6 bg-[#F9F9F9]'>

                <div className='bg-[#FFFFFF] flex justify-around p-5 rounded-3xl'>

                    <img src={africanMap} alt='' />

                    <div className='flex flex-col items-center'>

                        {/*<div class=" flex justify-between p-2 items-center text-sm text-black bg-[#F9F9F9] h-[40px] w-[200px]">
                            <p> <span>Show </span> Farmers </p>
                            <img src={calenderIcon} alt='' />
                        </div>*/}

                        <div className='w-[300px] h-[300px] rounded-2xl p-8  mt-[90%] bg-[#F9F9F9]'>

                            <div className='bg-white py-1 px-6 rounded-2xl w-full'>

                                <div className='flex items-center gap-5 p-4'>

                                    <div className='bg-green-400 h-[15px] w-[20px]'></div>
                                    <p>Above 50,000</p>

                                </div>
                                <div className='flex items-center  gap-5 p-4'>

                                    <div className='bg-green-400 h-[15px] w-[20px]'></div>
                                    <p>Above 50,000</p>

                                </div>
                                <div className='flex items-center gap-5 p-4'>

                                    <div className='bg-green-400 h-[15px] w-[20px]'></div>
                                    <p>Above 50,000</p>

                                </div>
                                <div className='flex items-center gap-5 p-4'>

                                    <div className='bg-green-400 h-[15px] w-[20px]'></div>
                                    <p>Above 50,000</p>

                                </div>
                                <div className='flex items-center gap-5 p-4'>

                                    <div className='bg-green-400 h-[15px] w-[20px]'></div>
                                    <p>Above 50,000</p>

                                </div>

                            </div>



                        </div>

                    </div>


                </div>



            </div>




        </div>
    )
}

export default Countrypage