import React from 'react'
import filterIcon from '../../Assets/filter2.svg'

function Filtermodal({setViewFilter}) {
  return (
    <div className='w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.7)] fixed top-0 z-50'>

        <div className='bg-[#FFFFFF] rounded-tl-[70px] absolute w-[380px] h-[100vh] py-5 right-[0] px-10'>

            <div className='flex justify-between items-center border-b-2 p-10 w-full'>
                <div className='flex gap-4 text-[20px]'>
                    <img src={filterIcon} alt=''/>
                    <p>Filter</p>
                    
                
                </div>
                <button 
                onClick={() => {
                    setViewFilter(false);
                    }} >X</button>

            </div>


            <form action="" class="my-10">

                <div className='flex flex-col gap-8'>

                        <select id="type" class="className='bg-[#38CB89] w-full py-3 border-b-2 text-[#151615] text-[16px] px-5">
                            <option value="certified">Certified</option>
                            <option value="input">input</option>
                            <option value="commodities">commodities</option>
                            <option value="fees">fees</option>
                        </select>

                        <select id="type" class="className='bg-[#38CB89] w-full py-3 border-b-2 text-[#151615] text-[14px] px-5">
                            <option value="certified">Unit Type</option>
                            <option value="input">input</option>
                            <option value="commodities">commodities</option>
                            <option value="fees">fees</option>
                        </select>

                        <select id="type" class="className='bg-[#38CB89] w-full py-3 border-b-2 text-[#151615] text-[14px] px-5">
                            <option value="certified">Code</option>
                            <option value="input">input</option>
                            <option value="commodities">commodities</option>
                            <option value="fees">fees</option>
                        </select>

                        <select id="type" class="className='bg-[#38CB89] w-full py-3 border-b-2 text-[#151615] text-[14px] px-5">
                            <option value="certified">Type</option>
                            <option value="input">input</option>
                            <option value="commodities">commodities</option>
                            <option value="fees">fees</option>
                        </select>

            
                    
                    <button class="w-[90px] mt-[100px] self-center py-3 font-medium text-white bg-[#38CB89] rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
                        <span>Search</span>
                    </button>
                    
                </div>

            </form>

        </div>

        

    
    </div>
  )
}

export default Filtermodal;