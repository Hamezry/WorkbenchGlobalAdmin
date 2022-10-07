import React from 'react'
import { Link } from 'react-router-dom';

function Productmodal ({setModal}) {
  return (
    <div className='w-[100vw] font-muli h-[100vh] bg-[#323B4B] opacity-90 fixed z-50 top-0 left-0'>

        <div className='bg-[#FFFFFF] absolute w-[450px] h-[700px] left-[38%] mt-[8%] rounded-3xl  px-10'>

            <div className='flex justify-between  items-center border-b-2 py-6 w-full'>
              <p className='text-[18px]'>Create Product</p>

              <div className="titleCloseBtn">
                <button
                onClick={() => {
                    setModal(false);
                    }}
                >
                    X
                </button>
        </div>


            </div>


            <form action="" className="my-10">

                <div className='flex flex-col gap-8'>
                    <label for="product name">
                        <p className="text-[14px] text-[#54565B] pb-2">Product Name</p>
                        <input id="name" name="name" type="text" className="w-full py-3 border-none bg-[#F1F2F3] text-[#9FA19C] text-[14px] rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Insert Name"/>
                    </label>

                    <label for="code">
                        <p className="text-[14px] text-[#54565B] pb-2">Code</p>
                        <input id="volume" name="volume" type="text" className="w-full py-3 border-none bg-[#F1F2F3] text-[#9FA19C] text-[14px] rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Insert Volume"/>
                    </label>

                    <label for="type">

                       <p className="text-[14px] text-[#54565B] pb-2">Type</p>

                        <select id="type" className="w-full py-3 border-none bg-[#2f70b2] text-[#9FA19C] text-[14px] rounded-lg px-5 focus:outline-none focus:border-slate-500 hover:shadow">
                            <option value="Type">Select Type</option>
                            <option value="input">input</option>
                            <option value="commodities">commodities</option>
                            <option value="fees">fees</option>
                        </select>

                    </label>

                     <label for="unit type">

                       <p className="text-[14px] text-[#54565B] pb-2">Unit Type</p>

                        <select id="type" className="w-full py-3 border-none bg-[#F1F2F3] text-[#9FA19C] text-[14px] rounded-lg px-5 focus:outline-none focus:border-slate-500 hover:shadow">
                            <option value="Type">Select Unit Type</option>
                            <option value="input">input</option>
                            <option value="commodities">commodities</option>
                            <option value="fees">fees</option>
                        </select>

                    </label>
                    
                    <div className="flex items-center gap-3">

                        <label for="remember" className="">
                            <input type="checkbox" id="remember" className="w-4 h-4 focus:bg-[#38CB89]"/>
                            
                        </label>
                        <p>Sustainable Product?</p>
            
                        
                    </div>

                    <div className='self-center'>
                        <Link to="/productlist" 
                            onClick={() => {
                                setModal(false);
                                }}> 
                            <span className="w-[400px] py-3 font-medium text-white bg-[#38CB89] rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
                                Submit
                            </span>
                        </Link> 
                    </div>
                     
                </div>

            </form>

        </div>

        

    
    </div>
  )
}

export default Productmodal;