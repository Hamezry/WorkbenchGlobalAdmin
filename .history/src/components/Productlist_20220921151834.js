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
    <div className='w-[85%] relative font-muli bg-[#FFFFFF] h-[calc(100vh-90px)] overflow-y-auto'>

      {showElement ? (<div className='absolute top-3 z-50 right-0 '>
        <img src={successIcon} alt='' />
      </div>) :
        (
          <div></div>
        )}


      <div className=' flex justify-between items-center w-full h-[98%] rounded py-8 px-8 bg-[#F9F9F9] text-[#54565B] text-[14px]'>

        <div className='bg-[#FFFFFF] rounded-3xl w-full py-5 px-8 h-[100%]'>

          <div className='p-4 border-b-2'> <p>Overview</p></div>

          <div className='flex justify-end items-center p-4 gap-5'>

            <div class=" flex gap-12 p-3 rounded-2xl text-sm text-black bg-[#F9F9F9] h-[54px w-[186px]">
              <p>Date Created</p>
              <img src={calenderIcon} alt='' />
            </div>

            <div className='relative'>
              <input type="search" name="" id="" placeholder="Search" class="w-full p-3 rounded-2xl text-sm text-black border-none outline-none focus:outline-none bg-[#F9F9F9] h-[54px w-[360px]" />
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
                <tr class="bg-[#F9F9F9] text-[#54565B] text-left text-[14px]">
                  <th class="py-3 px-6 ">S/N</th>
                  <th class="py-3 px-6 ">Product Name</th>
                  <th class="py-3 px-6 ">Code</th>
                  <th class="py-3 px-6 ">Type</th>
                  <th class="py-3 px-6 ">Certified</th>
                  <th class="py-3 px-6 ">Unit Type</th>
                  <th class="py-3 px-6 ">Date Created</th>
                  <th class="py-3 px-6 ">Last Updated</th>
                  <th class="py-3 px-6 ">Action</th>
                </tr>
              </thead>

              <tbody class="text-[#54565B] text-[12px] font-light">

                {
                  list?.data?.map((item, index) => {

                    return (

                      <tr key={index} class="text-left border-b border-gray-200 hover:bg-[#e3f7ee]">

                        <td class="py-8 px-6">
                          <span class="font-medium">{index + 1}</span>
                        </td>

                        <td class="py-8 px-6">
                          <span class="font-medium ">{item.name}</span>
                        </td>

                        <td class="py-8 px-14">
                          <span class="font-medium ">{item.code}</span>
                        </td>

                        <td class="py-8 px-6">
                          <span class="font-medium ">{item.product_type}</span>
                        </td>

                        <td class="py-8 px-6">
                          <span class="font-medium ">Yes</span>
                        </td>

                        <td class="py-8 px-6">
                          <span class="font-medium ">{item.unit_type}</span>
                        </td>

                        <td class="py-8 px-6  ">
                          <span class="font-medium ">{item.created}</span>
                        </td>

                        <td class="py-8 px-6">
                          <span class="font-medium ">{item.updated}</span>
                        </td>

                        <td class="py-8 px-6">
                          <span class="font-medium ">...</span>
                        </td>

                      </tr>

                    )
                  })
                }






              </tbody>


            </table>



          </div>

          <div className='flex items-center justify-between bg-[#F9F9F9] p-3 rounded-2xl'>
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
