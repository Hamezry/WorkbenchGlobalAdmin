import React from 'react'
import africanMap from '../Assets/Map of Africa.svg'
import { Link } from 'react-router-dom'

function Countrypage() {
    return (
        <div className='w-[85%] flex flex-col gap-14 font-muli h-[calc(100vh-90px)] bg-[#FFFF] overflow-y-auto'>

            <div className="w-full flex text-[16px] flex-col bg-[#F9FAFB] mt-[3%] rounded-3xl gap-3 p-3">
                <div className="px-8 py-2 w-full ml-7">
                    <p>Overview</p>
                </div>


                {/*CARDS */}
                <div className="flex p-5 justify-evenly">

                    <div className=" flex flex-col p-5 gap-4 bg-[#FFFFFF] rounded-3xl w-[300px] h-[180px]">
                        <p className=" mb-4 text-[#47494E] text-[16px]">Total Active Tenants</p>
                        <p className="text-[25px]">4,500</p>
                        <p className="text-[14px]">
                            <span>In-active Tenants:</span>4000
                        </p>
                    </div>

                    <div className=" flex flex-col p-5 gap-4 bg-[#FFFFFF] rounded-3xl w-[300px] h-[180px]">
                        <p className=" mb-4  text-[#47494E] text-[16px]">Total Tenants (CSD)</p>
                        <p className="text-[25px]">4,500</p>
                        <p className="text-[14px]">
                            <span>Last Month:</span>3500
                        </p>
                    </div>

                    <div className=" flex flex-col p-5 gap-3 bg-[#FFFFFF] rounded-3xl w-[300px] h-[180px]">
                        <p className=" mb-4  text-[#47494E] text-[16px]">Total Tenants Available</p>
                        <p className="text-[25px]">4,500</p>
                        <p className="text-[14px]">
                            <span>In-active Tenants:</span>4000
                        </p>
                    </div>
                    <div className=" flex flex-col p-5 gap-3 bg-[#FFFFFF] rounded-3xl w-[300px] h-[180px]">
                        <p className=" mb-4  text-[#47494E] text-[14px]">Highest Number of Tenants</p>
                        <p className="text-[25px]">Kenya</p>
                        <p className="text-[14px]">
                            <span>Registered tenants: </span>248
                        </p>
                    </div>

                </div>

            </div>

            <div className="bg-[#F9F9F9] flex flex-col h-[calc(100%-3%)] gap-8 p-6 rounded-3xl">

                <div className='flex  p-4 items-center w-[100%] h-[10%]'>

                    <div className='flex border-b-2 w-full items-center gap-8'>
                        <p className='border-b-2 border-b-[#38CB89]  py-5'>Heat Map</p>
                        <Link to='/countrylist'> <span>Country List</span> </Link>
                    </div>

                </div>



                <div className='w-full h-[calc(100%-10%)] rounded-2xl p-6  bg-[#F9F9F9]'>

                    <div className='bg-[#FFFFFF] flex justify-around p-5 h-[98%] overflow-y-auto rounded-3xl'>

                        <img src={africanMap} alt='' className='h-'/>

                        <div className='flex flex-col items-center'>

                            <div className='rounded-2xl p-8  mt-[100%] bg-[#F9F9F9]'>

                                <div className='bg-white py-1 px-6 rounded-2xl w-full'>

                                    <div className='flex text-[14px] items-center gap-5 p-3'>

                                        <div className='bg-green-400 h-[20px] w-[20px]'></div>
                                        <p>Above 50,000</p>

                                    </div>
                                    <div className='flex text-[14px] items-center  gap-5 p-3'>

                                        <div className='bg-green-400 h-[20px] w-[20px]'></div>
                                        <p>Above 50,000</p>

                                    </div>
                                    <div className='flex text-[14px] items-center gap-5 p-3'>

                                        <div className='bg-green-400 h-[20px] w-[20px]'></div>
                                        <p>Above 50,000</p>

                                    </div>
                                    <div className='flex text-[14px] items-center gap-5 p-3'>

                                        <div className='bg-green-400 h-[20px] w-[20px]'></div>
                                        <p>Above 50,000</p>

                                    </div>
                                    <div className='flex text-[14px] items-center gap-5 p-3'>

                                        <div className='bg-green-400 h-[20px] w-[20px]'></div>
                                        <p>Above 50,000</p>

                                    </div>

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