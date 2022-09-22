import React from 'react'
import { Link } from 'react-router-dom';
import orgIcon from '../Assets/building.svg'
import productIcon from '../Assets/box.svg'
import globeIcon from '../Assets/world.svg'
import bulkIcon from '../Assets/folder-2.svg'

function Sidebar() {
    return (
        <div class="sticky flex flex-col font-muli left-0 w-[14%] bg-[#FFFFFF] h-[calc(100vh-90px)] border-none">

            <div class="overflow-x-hidden text-[#8B908B] h-full border-r-1 flex flex-col">
                <ul class="flex flex-col border-r-2 h-[100%] mr-6 gap-6 pl-4 py-4">

                    <li className='mt-4'>
                        <div class="text-sm font-light text-gray-400 uppercase">PAGES</div>

                    </li>

                    <Link to="/" className="cursor-pointer
                        hover:bg-[#e2f8ee]
                        active:bg-[#e2f8ee]
                        active:border-r-4 border-[#38CB89]
                        focus:bg-green-100
                        focus:border-r-4 
                        flex items-center
                        
                        
                    ">

                        
                        <li className='flex items-center p-1'>
                            <span>
                                <img src={orgIcon} alt='' />
                            </span>
                            <span class="ml-2">Tenants</span>
                        </li>
                    </Link>


                    <Link to="/products" className="cursor-pointer
                        hover:bg-[#e2f8ee]
                        active:bg-[#e2f8ee]
                        active:border-r-4 border-[#38CB89]
                        focus:bg-green-100
                        focus:border-r-4 
                        flex items-center
                        
                    ">
                        <li className='flex items-center p-1'>
                            <span>
                                <img src={productIcon} alt='' />
                            </span>
                            <span class="ml-2 text-[#54565B]">Products</span>
                        </li>
                    </Link>

                    <Link to='/countrypage' className="cursor-pointer
                        hover:bg-[#e2f8ee]
                        active:bg-[#e2f8ee]
                        active:border-r-4 border-[#38CB89]
                        focus:bg-green-100
                        focus:border-r-4 
                        flex items-center
                        
                    " >
                        <li className='flex items-center p-1'>
                            <span>
                                <img src={globeIcon} alt='' />
                            </span>
                            <span class="ml-2">Countries</span>
                        </li>

                    </Link>


                    <li className='flex items-center  p-1'>
                        <span>
                            <img src={bulkIcon} alt='' />
                        </span>
                        <span class="ml-2">Bulk Uploads</span>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default Sidebar;