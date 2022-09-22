import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import filterIcon from '../Assets/filter.svg'
import calenderIcon from '../Assets/calendar.svg'


function Countrylist() {

    const [list, setList] = useState([])
    const options = {
        headers: { 'Authorization': 'WB3 ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwODYyNTE3LCJpYXQiOjE2NjM1ODI1MTcsImp0aSI6IjYyMmQ5NzAxY2U1NjQ4NDBhOTAyNmExN2FjYjhmNDM4IiwidXNlcl9pZCI6Impva2Fmb3IiLCJlbWFpbCI6Impva2Fmb3JAYWZleG5pZ2VyaWEuY29tIn0.szo9wLbMsm4GZoct4c_eWtlbG-IEZygusdUStw6df9M' }
    };

    useEffect(() => {
        axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/countries`, options)
            .then(res => {
                setList(res.data)
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    },)


    return (
        <div className='w-[85%] font-muli h-[calc(100vh-90px)] p-1'>

            <div className='flex items-center w-[100%] h-[10%] p-4'>

                <div className='flex w-full border-b-2 items-center gap-8'>
                    <Link to='/countrypage'> <p>Heat Map</p> </Link>
                    <span className='border-b-2 py-5  border-b-[#38CB89] '>Country List</span>
                </div>

            </div>

            <div className='w-[100%] h-[calc(100%-10%)] rounded-2xl p-10 bg-[#F9F9F9] overflow-y-auto'>

                <div className='bg-[#FFFFFF]  rounded-3xl w-[100%] py-3 px-8'>

                    <div className='flex justify-between p-3 border-b-2'>
                        <p>Country List</p>
                        <div className='border-2 border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89]  bg-white h-[40px] p-4'>
                            <img src={filterIcon} alt='' />
                            <button>
                                Filter
                            </button>

                        </div>
                    </div>

                    <div className='flex justify-between items-center pl-5 gap-5'>

                        <div class=" flex gap-2 p-3 rounded-2xl text-sm text-black bg-[#F9F9F9] h-[54px w-[186px]">
                            <p> <span>Show </span> 100 Entries </p>
                            <img src={calenderIcon} alt='' />
                        </div>

                        <div className='flex justify-end items-center p-5 gap-5'>

                            <p className='text-[12px]'>Sort By</p>


                            <div class=" flex gap-12 p-3 rounded-2xl text-sm text-black bg-[#F9F9F9] h-[54px">
                                <p>Date Registered</p>
                                <img src={calenderIcon} alt='' />
                            </div>

                            <div className='relative'>
                                <input type="search" name="" id="" placeholder="Search by Company Name" class="w-full p-3 rounded-2xl text-sm text-black border-none outline-none focus:outline-none bg-[#F9F9F9] h-[54px w-[360px]" />
                                <span className='absolute left-[300px] top-3'>
                                    < AiOutlineSearch />
                                </span>
                            </div>


                            <div className='border-2 border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89]  bg-white h-[40px] p-4'>
                                <img src={filterIcon} alt='' />
                                <button>
                                    Select Action
                                </button>

                            </div>

                        </div>



                    </div>

                    {/*TABLE */}

                    <div className='px-5 overflow-x-auto'>

                        <table className='min-w-max w-full table-auto'>

                            <thead>
                                <tr class="bg-[#F9F9F9] text-[#54565B] text-[14px] text-left">
                                    <th class="py-3 px-6 ">S/N</th>
                                    <th class="py-3 px-6 ">Country Name</th>
                                    <th class="py-3 px-6 ">No. of Tenants</th>
                                    <th class="py-3 px-6 ">No. of Locations</th>
                                    <th class="py-3 px-6 ">No. of Farmers</th>
                                    <th class="py-3 px-6 ">Commodities Available</th>
                                    <th class="py-3 px-6 ">Action</th>
                                </tr>
                            </thead>

                            <tbody class="text-[#54565B] text-[12px] font-light">

                                {
                                    list?.data?.map((item, index) => {
                                        return (

                                            <tr key={index} class=" text-left border-b border-gray-200 hover:bg-[#e3f7ee]">


                                                <td class="py-6 px-6">
                                                    <Link to='/country'>
                                                        <span class="font-medium">{index + 1}</span>
                                                    </Link>
                                                </td>

                                                <td class=" flex mt-2 gap-2 py-6 px-6 w-[190px]">
                                                    <Link to='/country'>
                                                        <img src={item.flag_url} alt='' />
                                                        <span class="font-medium ">{item.name}</span>
                                                    </Link>
                                                </td>

                                                <td class="py-6 px-6">
                                                    <span class="font-medium ">{item.no_of_tenants}</span>
                                                </td>

                                                <td class="py-6 px-6">
                                                    <span class="font-medium ">{item.no_of_locations}</span>
                                                </td>

                                                <td class="py-6 px-6">
                                                    <span class="font-medium ">{item.no_of_farmers}</span>
                                                </td>

                                                <td class="px-6 ">
                                                    <div className=' overflow-x-auto overflow-y-auto w-[100px] h-[50px]' >
                                                        <span class="font-medium ">{item.available_commodities}</span>
                                                    </div>

                                                </td>

                                                <td class="py-6 px-6  ">
                                                    <Link to='/country'>
                                                    <span class="font-medium ">View Dashboard</span>
                                                    </Link>
                                                    
                                                </td>


                                            </tr>


                                        )
                                    }
                                    )
                                }





                            </tbody>


                        </table>

                    </div>

                    <div className='flex justify-between p-3 mt-4 rounded-2xl bg-[#F9F9F9] items-center'>

                        <p>1 - 7 of 80 Entries</p>

                        <div className='flex items-center gap-5'>
                            <span className='py-2 px-3 text-[#9FA19C] rounded-lg  bg-[#F3F3F3]'>&#60;</span>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>....</span>
                            <span>10</span>
                            <span className='py-2 px-3 text-white rounded-lg  bg-[#38CB89] '>&#62;</span>

                        </div>

                    </div>



                </div>

            </div>







        </div>
    )
}

export default Countrylist;