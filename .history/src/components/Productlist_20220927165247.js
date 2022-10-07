import React, { useState, useEffect } from 'react';
import manager from '../utils/encryption';
import axios from 'axios'
import { AiOutlineSearch } from 'react-icons/ai';
import recieptIcon from '../Assets/receipt-text.png'
import filterIcon from '../Assets/filter.svg'
import calenderIcon from '../Assets/calendar.svg'
import successIcon from '../Assets/Success-icon.svg'


function Productlist({ setViewFilter, setModal }) {

  const [list, setList] = useState([])

  useEffect(() => {
    axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/encrypted-products`)
      .then(res => {
        const response = res.data.data
        manager.decrypt(response)
        setList(res.data)
        //console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
  },)


  const [showElement, setShowElement] = React.useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 2000);
  }, []);

  return (
    <div className='w-[85%] relative flex flex-col font-muli bg-[#FFFFFF] h-[calc(100vh-90px)] gap-14 overflow-y-auto'>

      {showElement ? (<div className='absolute top-3 z-50 right-0 '>
        <img src={successIcon} alt='' />
      </div>) :
        (
          <div></div>
        )}

      <div className="w-full flex text-[16px] flex-col bg-[#F9FAFB] mt-[3%] rounded-3xl gap-3 p-3">
        <div className="px-8 py-2 w-full ml-7">
          <p>Overview</p>
        </div>


        {/*CARDS */}
        <div className="flex p-5 justify-evenly">

          <div className=" flex flex-col p-5 gap-4 bg-[#FFFFFF] rounded-3xl w-[300px] h-[180px]">
            <p className=" mb-4 text-[#47494E] text-[16px]">Total Products</p>
            <p className="text-[25px]">58</p>
            <p className="text-[14px]">
              <span>Certified Products:</span>10
            </p>
          </div>

          <div className=" flex flex-col p-5 gap-4 bg-[#FFFFFF] rounded-3xl w-[300px] h-[180px]">
            <p className=" mb-4  text-[#47494E] text-[16px]">Products (Commodity)</p>
            <p className="text-[25px]">20</p>
            <p className="text-[14px]">
              <span>Last Added:</span>September 26, 2022
            </p>
          </div>

          <div className=" flex flex-col p-5 gap-3 bg-[#FFFFFF] rounded-3xl w-[300px] h-[180px]">
            <p className=" mb-4  text-[#47494E] text-[16px]">Products (Input)</p>
            <p className="text-[25px]">16</p>
            <p className="text-[14px]">
              <span>Last Added:</span> September 26, 2022
            </p>
          </div>
          <div className=" flex flex-col p-5 gap-3 bg-[#FFFFFF] rounded-3xl w-[300px] h-[180px]">
            <p className=" mb-4  text-[#47494E] text-[14px]">Products (Fees)</p>
            <p className="text-[25px]">22</p>
            <p className="text-[14px]">
              <span>Registered tenants: </span>248
            </p>
          </div>

        </div>

      </div>
      <div className=' flex justify-between items-center w-full h-[calc(100vh-3%)] rounded py-8 px-8 bg-[#F9F9F9] text-[#54565B] text-[14px]'>

        <div className='bg-[#FFFFFF] rounded-3xl w-full py-5 px-8 h-[100%]'>

          <div className='p-4 border-b-2'> <p>Overview</p></div>

          <div className='flex justify-end items-center p-4 gap-5'>

            <div className=" flex gap-12 p-3 rounded-2xl text-sm text-black bg-[#F9F9F9] h-[54px w-[186px]">
              <p>Date Created</p>
              <img src={calenderIcon} alt='' />
            </div>

            <div className='relative'>
              <input type="search" name="" id="" placeholder="Search" className="w-full p-3 rounded-2xl text-sm text-black border-none outline-none focus:outline-none bg-[#F9F9F9] h-[54px w-[360px]" />
              <span className='absolute left-[300px] top-3'>
                < AiOutlineSearch />
              </span>
            </div>

            <div className='flex justify-between rounded-lg items-center text-[12px] text-white bg-[#38CB89] h-[40px] w-[142px] p-4'>

              <button onClick={() => {
                setModal(true);
              }}>
                Create product
              </button>
              <img src={recieptIcon} alt='' />

            </div>

            <div className='border-2 border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89]  bg-white h-[40px] w-[86px] p-4'>
              <img src={filterIcon} alt='' />
              <button
                onClick={() => {
                  setViewFilter(true);
                }}
              >
                Filter
              </button>

            </div>


          </div>

          {/*TABLE */}

          <div className='px-5 h-[600px] overflow-y-auto overflow-x-auto'>

            <table className='min-w-max w-full table-auto'>

              <thead>
                <tr className="bg-[#F9F9F9] text-[#54565B] text-left text-[14px]">
                  <th className="py-3 px-6 ">S/N</th>
                  <th className="py-3 px-6 ">Product Name</th>
                  <th className="py-3 px-6 ">Code</th>
                  <th className="py-3 px-6 ">Type</th>
                  <th className="py-3 px-6 ">Certified</th>
                  <th className="py-3 px-6 ">Unit Type</th>
                  <th className="py-3 px-6 ">Date Created</th>
                  <th className="py-3 px-6 ">Last Updated</th>
                  <th className="py-3 px-6 ">Action</th>
                </tr>
              </thead>

              <tbody className="text-[#54565B] text-[12px] font-light">

                {
                  list?.data?.map((item, index) => {

                    return (

                      <tr key={index} className="text-left border-b border-gray-200 hover:bg-[#e3f7ee]">

                        <td className="py-6 px-6">
                          <span className="font-medium">{index + 1}</span>
                        </td>

                        <td className="py-6 px-6">
                          <span className="font-medium ">{item.name}</span>
                        </td>

                        <td className="py-6 px-14">
                          <span className="font-medium ">{item.code}</span>
                        </td>

                        <td className="py-6 px-6">
                          <span className="font-medium ">{item.product_type}</span>
                        </td>

                        <td className="py-6 px-6">
                          <span className="font-medium ">Yes</span>
                        </td>

                        <td className="py-6 px-6">
                          <span className="font-medium ">{item.unit_type}</span>
                        </td>

                        <td className="py-6 px-6  ">
                          <span className="font-medium ">{item.created}</span>
                        </td>

                        <td className="py-6 px-6">
                          <span className="font-medium ">{item.updated}</span>
                        </td>

                        <td className="py-6 px-6">
                          <span className="font-medium ">...</span>
                        </td>

                      </tr>

                    )
                  })
                }






              </tbody>


            </table>



          </div>

          <div className='flex items-center justify-between mb-3 bg-[#F9F9F9] p-3 rounded-2xl'>
            <p>1 - 10 of 80 Entries</p>

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

export default Productlist;
