import React, { useEffect, useState } from 'react'
import axios from 'axios'
import chatIcon from '../Assets/Group59.svg'
import profIcon from '../Assets/profile.svg'
import dot from '../Assets/Ellipse.svg'
import filterIcon from '../Assets/filter.svg'
import jetfarmsIcon from '../Assets/jetfarms.svg'
import { FaGreaterThan } from 'react-icons/fa';
import { FaLessThan } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Organisation({ list, setList }) {

  const [userCount, setUserCount] = useState(true)
  const [storageCount, setStorageCount] = useState(false)


  const [client, setClient] = useState([])
  const [service, setService] = useState([])
  const [transaction, setTransaction] = useState([])
  const [summary, setSummary] = useState([])
  const [overallCount, setOverallCount] = useState(0)
  const { id } = useParams()

  //SERVICE TOGGLE BUTTON FUNCTIONS
  const [account, setAccount] = useState(false);
  const [csd, setCsd] = useState(false);
  const [ewr, setEwr] = useState(false);
  const [logistic, setLogistic] = useState(false);
  const [overage, setOverage] = useState(false);
  const [plant, setPlant] = useState(false);
  const [reg, setReg] = useState(false);
  const [verification, setVerification] = useState(false);

  const token = localStorage.getItem('workbench-app-token')


  useEffect(() => {

    const options = {
      headers: { 'Authorization': `WB3 ${token}` }
    };

    //CLIENT API CALL
    axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/client/graph/${id}`, options)
      .then(res => {
        setClient(res.data)
        console.log(res.data)
        const handleSum = (array) => {
          return array.reduce((acc, obj) => acc + obj.count, 0)
        }
        const count = handleSum(res.data.data)
        setOverallCount(count)
      }).catch(err => {
        console.log(err)
      })

    //TRANSACTION SUMMARY API CALL
    axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/transaction/summary/${id}`, options)
      .then(res => {
        setTransaction(res.data.data)
        //console.log(res.data)
        //console.log(res.data.data.dispatches.total_net_weight)
      }).catch(err => {
        console.log(err)
      })

    //TENANT SERVICE INFO API CALL
    axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/tenant/info/${id}`, options)
      .then(res => {
        setService(res.data.data)
        console.log(res.data.data)
        const switchList = res.data.data.service_list
        setAccount(switchList.accounting_setting)
        setCsd(switchList.csd_setting)
        setEwr(switchList.ewr_setting)
        setLogistic(switchList.logistics_setting)
        setOverage(switchList.overage_setting)
        setPlant(switchList.plant_setting)
        setReg(switchList.registration_setting)
        setVerification(switchList.verification_setting)
        // console.log(res.data.data.warehouse_count)
      }).catch(err => {
        console.log(err)
      })


    //STOCK POSITION API CALL
    axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/stock/position/${id}`, options)
      .then(res => {
        setSummary(res.data)
      }).catch(err => {
        console.log(err)
      })


  },)


  return (
    <div className='w-[84%] font-muli text-[#54565B] h-[calc(100vh-90px)] p-1'>

      <div className='w-[100%] h-[80px] bg-white p-4 flex justify-between'>

        <div className='flex w-[400px] items-center gap-2'>
          <img src={jetfarmsIcon} alt='' />
          <p>{localStorage.getItem("companyName")} </p>
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
                <p>{overallCount}</p>
                <img src={chatIcon} alt='' />
              </div>

              <div className='flex flex-col text-[12px] gap-3'>

                <p>Impressions</p>

                {
                  client?.data?.map((item, index) => {
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

                <tbody>
                  <tr class="bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static">
                      Uploaded Balance
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      {transaction.uploaded_balance ? transaction.uploaded_balance.total_gross_weight : '0'}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      {transaction.uploaded_balance ? transaction.uploaded_balance.total_net_weight : '0'}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      {transaction.uploaded_balance ? transaction.uploaded_balance.total_units : '0'}
                    </td>
                  </tr>

                  <tr class="bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static">
                      Goods Received
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      {transaction.goods_recieveed ? transaction.goods_recieveed.total_gross_weight : '0'}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      {transaction.goods_recieveed ? transaction.goods_recieveed.total_net_weight : '0'}

                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      {transaction.goods_recieveed ? transaction.goods_recieveed.total_units : '0'}

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
                      {transaction.total_in ? transaction.total_in.total_gross_weight : '0'}

                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      {transaction.total_in ? transaction.total_in.total_net_weight : '0'}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      {transaction.total_in ? transaction.total_in.total_units : '0'}
                    </td>
                  </tr>

                  <tr class="bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static">
                      Dispatches
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      {transaction.dispatches ? transaction.dispatches.total_gross_weight : '0'}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      {transaction.dispatches ? transaction.dispatches.total_net_weight : '0'}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      {transaction.dispatches ? transaction.dispatches.total_units : '0'}
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
                      {transaction.total_out ? transaction.total_out.total_gross_weight : '0'}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      {transaction.total_out ? transaction.total_out.total_net_weight : '0'}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      {transaction.total_out ? transaction.total_out.total_units : '0'}
                    </td>
                  </tr>



                </tbody>




              </table>

            </div>




          </div>

          <div className='flex gap-4 mt-3 p-6 '>

            <div className='w-[50%] h-[350px] overflow-y-auto rounded-3xl p-4 bg-[#FFFF]'>
              <div className='flex justify-between p-3 border-b '>
                <p>Service List</p>
                <p className='text-green-400 text-bold text-xs'>See all</p>
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
                <p>CSD Module</p>
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
                <p>EWR Module</p>
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={ewr}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setEwr(!ewr);
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
                <p>Overage Module</p>
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={overage}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setOverage(!overage);
                    }}
                    className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "
                  ></div>

                </label>

              </div>

              <div className='flex justify-between mt-6 items-center'>
                <p>Plant Module</p>
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={plant}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setPlant(!plant);
                    }}
                    className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "
                  ></div>

                </label>

              </div>

              <div className='flex justify-between mt-6 items-center'>
                <p>Registration Module</p>
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={reg}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setReg(!reg);
                    }}
                    className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "
                  ></div>

                </label>

              </div>

              <div className='flex justify-between mt-6 items-center'>
                <p>Verification Module</p>
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={verification}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setVerification(!verification);
                    }}
                    className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "
                  ></div>

                </label>

              </div>

            </div>

            <div className='flex flex-col w-[50%] h-[350px] items-center gap-10'>

              {userCount &&
                <div className='relative bg-[#FFFF] w-full h-[50%] rounded-xl  flex gap-8 px-8 items-center'>
                  <img src={profIcon} alt='' />

                  <div className='font-semibold text-[25px]'>
                    <p className='text-[14px] mb-5'>User Account</p>
                    <p> <span className='text-[#9FA19C]'>{service.users ? service.users.active : '0'} </span>/{service.users ? service.users.total : '0'}</p>
                  </div>

                  <div className=" absolute right-1 top-8 flex gap-5 ">
                    <button ><FaLessThan className="h-[30px]" /></button>
                    <button onClick={() => {
                      setUserCount(false);
                      setStorageCount(true);
                    }}><FaGreaterThan className="h-[30px]" /></button>
                  </div>

                </div>
              }

              {
                storageCount &&
                <div className=' bg-[#FFFF] w-full h-[50%] rounded-xl p-3 items-center flex gap-14'>

                  <p className='font-semibold text-[25px]'> <span className='text-[14px] mb-8'>
                    Storage Capacity (MT)</span> <br /> <span className='text-[#9FA19C]'>{service.storage_capacity ? service.storage_capacity.total_capacity : '0'}</span>/{service.storage_capacity ? service.storage_capacity.total_utilization : '0'}
                  </p>
                  <div className="flex gap-3 ">
                    <button onClick={() => {
                      setUserCount(true);
                      setStorageCount(false);
                    }} ><FaLessThan className="h-[30px]" /></button>
                    <button><FaGreaterThan className="h-[30px]" /></button>
                  </div>
                </div>

              }


              <div className=' bg-[#FFFF] w-full h-[50%] rounded-xl p-8 items-center flex gap-14'>

                <p className='text-[25px]'> <span className='text-[14px]'>Warehouse Count</span> <br /> {service.warehouse_count ? service.warehouse_count : '0'}</p>
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

                            <span class="font-medium ">{item.location_breakdown[0].volume}</span>


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