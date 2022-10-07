import React from 'react'
import { Link } from 'react-router-dom'
import background from '../Assets/backround.png'
import logo from '../Assets/afex-logo.png'

function Landingpage() {
  return (
    <div className='flex w-full h-[100vh] z-50 fixed top-0 left-0 bg-white'>

          <img src={background} alt='bg' className='w-1/2'/>
    

        <div className='bg[#F5F5F5] w-1/2'>
            <div className='flex justify-end p-[60px]'>
                <p className='mr-4'>Powered By</p>
                <img src={logo} alt='lg'/>
            </div>

            <div className="w-[500px] ml-[150px] mt-[100px] p-8 rounded-xl ">
                <h1 className="text-[#54565B] text-[28px] font-medium">Login</h1>

                <form action="" className="my-10">
                    <div className="flex flex-col space-y-5">
                        <label for="email">
                            <p className="text-[14px] text-[#54565B] pb-2">Username</p>
                            <input id="email" name="email" type="email" className="w-full py-3 border text-[#9FA19C] text-[14px] rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Username"/>
                        </label>
                        <label for="password">
                            <p className="font-medium text-slate-700 pb-2">Password</p>
                            <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="..........."/>
                        </label>
                        <div className="flex flex-row justify-between">
                            <div>
                                <label for="remember" className="">
                                    <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-indigo-600"/>
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <p className="font-medium text-[#38CB89]">Forgot Password?</p>
                            </div>
                        </div>
                        <button  className="w-full py-3 font-medium text-white bg-[#38CB89] rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
                           <Link to='/authenticated'> <span>Sign In</span> </Link> 
                        </button>
                        <p className="text-center">Create an account for your organization <br/> <span>Data Privacy Policy</span></p>
                    </div>
                </form>

            </div>

            
        </div>
    </div>
  )
}

export default Landingpage
