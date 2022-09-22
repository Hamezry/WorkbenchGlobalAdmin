import React, { useEffect, useState } from 'react'
import axios from 'axios'
import chatIcon from '../Assets/Group59.svg'
import dot from '../Assets/Ellipse.svg'
import filterIcon from '../Assets/filter.svg'
import jetfarmsIcon from '../Assets/jetfarms.svg'
import { Link } from 'react-router-dom'

function Organisation() {

  const [list, setList] = useState([])
  const [service, setService] = useState([])
  const [transaction, setTransaction] = useState([])
  const [summary, setSummary] = useState([])

  //TOGGLE FUNCTION
  const [csd, setCsd] = useState(false);
  const [account, setAccount] = useState(false);
  const [payment, setPayment] = useState(false);
  const [logistic, setLogistic] = useState(false);

  

  useEffect(() => {

    const options = {
      headers: { 'Authorization': 'WB3 ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwODYyNTE3LCJpYXQiOjE2NjM1ODI1MTcsImp0aSI6IjYyMmQ5NzAxY2U1NjQ4NDBhOTAyNmExN2FjYjhmNDM4IiwidXNlcl9pZCI6Impva2Fmb3IiLCJlbWFpbCI6Impva2Fmb3JAYWZleG5pZ2VyaWEuY29tIn0.szo9wLbMsm4GZoct4c_eWtlbG-IEZygusdUStw6df9M' }
    };

    
    axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/client/graph/7`, options)
      .then(res => {
        setList(res.data)
      }).catch(err => {
        console.log(err)
      })

    axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/tenant/info/7`, options)
      .then(res => {
        setService(res.data)
      }).catch(err => {
        console.log(err)
      })

    axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/stock/position/7`, options)
      .then(res => {
        setSummary(res.data)
      }).catch(err => {
        console.log(err)
      })
    axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/transaction/summary/7`, options)
      .then(res => {
        setTransaction(res.data)
        console.log(res.data)
        console.log('hear',res.data.dispatches.total_net_weight)
      }).catch(err => {
        console.log(err)
      })
  }, [setService, setSummary, setTransaction, setList])


  console.log(list)

  return (
    <div className='w-[85%] font-muli text-[#54565B] h-[calc(100vh-90px)] p-1'>

      <div className='w-[100%] h-[80px] bg-white p-4 flex justify-between'>

        <div className='flex w-[400px] items-center gap-2'>
          <img src={jetfarmsIcon} alt='' />
          <p>Jet Farmers <span className='text-[10px]'>(Kenya)</span></p>
        </div>

        <div className='flex gap-3 rounded-lg items-center text-[12px] text-[#38CB89]'>

          <div className=' bg-[#38CB89] flex gap-1 rounded-lg items-center text-[12px] text-white h-[40px] w-[80px] p-3 '>

            <p>
              Activate
            </p>
          </div>

          <div className='flex gap-1 rounded-lg items-center text-[12px] text-gray-500  bg-[#FBFBFB] h-[40px] w-[80px] p-3'>

            <Link to='/'>

              Back

            </Link>

          </div>






        </div>

      </div>



      <div className='w-[100%]  h-[calc(100%-80px)] overflow-y-auto flex gap-9'>

        <div className='mt-[30px] h-[800px] rounded-3xl bg-[#F9F9F9] p-8 w-[65%] overflow-y-auto'>

          <div className='bg-[#FFFF] p-3 rounded-3xl w-full'>

            <div className='mb-3 border-b border-gray-200 p-5'>
              <h1>Clients</h1>
            </div>

            <div className='flex p-5 w-full items-center justify-around'>

              <div className='p-5 gap-4 flex flex-col items-center'>
                <span>Total Number </span>
                <p>1,350</p>
                <img src={chatIcon} alt='' />
              </div>

              <div className='flex flex-col text-[12px] gap-3'>

                <p>Impressions</p>

                {
                  list?.data?.map((item, index) => {
                    return (
                      <div className='flex justify-between items-center gap-6 px-5 bg-[#FAFBFC] rounded-3xl w-[300px] h-[36px]'>
                        <div className='flex gap-5'>
                          <img src={dot} alt='' />
                          <span>{item.category}</span>
                        </div>
                        <span>{item.count}</span>
                      </div>
                    )
                  }
                  )
                }







              </div>

            </div>

          </div>

          <div className='bg-[#FFFF]  p-4 mt-8 rounded-3xl w-full'>

            <div className='flex items-center border-b border-gray-200 justify-between p-3'>

              <div className='flex gap-2'>
                <p>Transaction Summary .</p>
                <span>14 Jun, 2022</span>
              </div>

              <div className='flex gap-6'>
                <div class=" flex gap-12 p-3 rounded-2xl text-sm text-black bg-[#F9F9F9] h-[54px w-[186px]">
                  <p>Filter by date</p>
                  <p>&#62;</p>
                </div>

                <div className='border-2 border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89]  bg-[#FBFBFB] h-[40px] w-[86px] p-4'>
                  <img src={filterIcon} alt='' />
                  <button>
                    Filter
                  </button>

                </div>

              </div>

            </div>

            {/*TABLE */}
            <div className='p-3 mt-4'>
              <table class="border-collapse w-full">
                <thead>
                  <tr>
                    <th class="p-2 font-bold bg-[#F2F2F2] text-gray-600 border border-gray-300 table-cell">Transaction</th>
                    <th class="p-2 font-bold bg-[#F2F2F2] text-gray-600 border border-gray-300 table-cell">Gross Weight (KG)</th>
                    <th class="p-2 font-bold bg-[#F2F2F2] text-gray-600 border border-gray-300 table-cell">Net Weight (KG)</th>
                    <th class="p-2 font-bold bg-[#F2F2F2] text-gray-600 border border-gray-300 table-cell">Units</th>
                  </tr>
                </thead>


                return(
                <tbody>
                  <tr class="bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static">
                      Uploaded Balance
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      0
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      123.367
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      123
                    </td>
                  </tr>

                  <tr class="bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static">
                      Goods Received
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      300.543
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      300.589
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      300
                    </td>
                  </tr>

                  <tr class="bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static">
                      Received Transfer
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      21.780
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      21
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      21
                    </td>
                  </tr>

                  {/*TOTAL IN */}
                  <tr class="bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="w-full bg-white lg:w-auto p-3 text-gray-800 text-center">
                      Total IN
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      444.45
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      444.325
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      444.325
                    </td>
                  </tr>

                  <tr class="bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static">
                      Dispatches
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      32
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      32
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      32
                    </td>
                  </tr>

                  <tr class="bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static">
                      IWH Transfers
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      12.32
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      12
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      12
                    </td>
                  </tr>

                  <tr class="bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="bg-white w-auto p-3 text-gray-800 text-center">
                      Total OUT
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      44.32
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      44
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      44
                    </td>
                  </tr>



                </tbody>




              </table>

            </div>




          </div>

          <div className='flex gap-4 mt-3 p-6 '>

            <div className='w-[50%] h-[350px] rounded-3xl p-4 bg-[#FFFF]'>
              <div className='flex justify-between p-3 border-b '>
                <p>Service List</p>
                <p className='text-green-400 text-bold text-xs'>See all</p>
              </div>

              <div className='flex justify-between mt-6 items-center'>
                <p>CSD Access</p>
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={csd}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setCsd(!csd);
                    }}
                    className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "
                  ></div>

                </label>

              </div>

              <div className='flex justify-between mt-6 items-center'>
                <p>Accounting Module</p>
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={account}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setAccount(!account);
                    }}
                    className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "
                  ></div>

                </label>

              </div>

              <div className='flex justify-between mt-6 items-center'>
                <p>Logistics Module</p>
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={logistic}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setLogistic(!logistic);
                    }}
                    className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "
                  ></div>

                </label>

              </div>

              <div className='flex justify-between mt-6 items-center'>
                <p>Payment Portal</p>
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={payment}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setPayment(!payment);
                    }}
                    className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "
                  ></div>

                </label>

              </div>

            </div>

            <div className='flex flex-col w-[50%] h-[350px] items-center gap-10'>
              <div className=' bg-[#FFFF] w-full h-[50%] rounded-xl p-8 items-center flex gap-14'>

                <p className='text-[25px]'> <span className='text-[14px]'>User Account</span> <br /> 371/475</p>
                <p>	&#60; &#62;</p>
              </div>

              <div className=' bg-[#FFFF] w-full h-[50%] rounded-xl p-8 items-center flex gap-14'>

                <p className='text-[25px]'> <span className='text-[14px]'>Warehouse Count</span> <br /> 38</p>
              </div>


            </div>

          </div>

        </div>

        <div className='flex mt-[30px] h-[800px] rounded-3xl bg-[#F9F9F9] p-8 w-[35%] overflow-y-auto'>

          <div className='bg-[#FFFF] w-full overflow-x-auto rounded-3xl'>

            <div className='mb-2 border-b border-gray-200 p-4'>
              <h1>Overall Stock Position</h1>
            </div>


            <div className='w-full overflow-x-auto p-5'>

              <table className='w-full over p-6'>

                <thead>
                  <tr class="bg-[#F9F9F9] text-left text-[#54565B] text-[14px]">
                    <th class="py-2 px-2 ">Commodity</th>
                    <th class="py-2 px-2 ">Grade</th>
                    <th class="py-2 px-2 ">Volume(MT)</th>
                    <th class="py-2 px-2 ">Lien(MT)</th>
                  </tr>
                </thead>

                <tbody class="text-[#54565B] text-[12px] font-light">
                  {
                    summary?.data?.map((item) => {
                      return (
                        <tr class="text-left border-b border-gray-200 hover:bg-[#e3f7ee]">

                          <td class="py-4 px-2">
                            <span class="font-medium">{item.item_code}</span>
                          </td>

                          <td class="py-4 px-2 ">
                            <span class="font-medium">Grade{item.grade}</span>
                          </td>

                          <td class="py-4 px-2">

                            <span class="font-medium ">0</span>


                          </td>

                          <td class="py-4 px-2">
                            <span class="font-medium ">{item.total_lien_weight}</span>
                          </td>

                        </tr>

                      )
                    }
                    )
                  }







                </tbody>


              </table>

            </div>

          </div>

        </div>

      </div>




    </div>
  )
}

export default Organisation