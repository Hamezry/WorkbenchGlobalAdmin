import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Progress } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Adminlist from '../components/adminlist/Adminlist';

function Country({ country }) {
  const [stock, setStock] = useState([]);
  const [list, setList] = useState();
  const token = localStorage.getItem('workbench-app-token');
  const { id } = useParams();

  const singleCountry = country.data.filter((el) => el.pk === Number(id))[0];
  const totalFarmers = country?.summary?.total_farmers;
  const totalTenants = country?.summary?.total_tenants;
  const singleTenant = singleCountry.no_of_tenants;
  const singleFarmer = singleCountry.no_of_farmers;

  //Farmers calculation
  const farmerProgress = singleFarmer / totalFarmers;
  const farmerValue = farmerProgress * 100;

  //Tenants calculation
  const tenantProgress = singleTenant / totalTenants;
  const tenantValue = tenantProgress * 100;

  useEffect(() => {
    const options = {
      headers: { Authorization: `WB3 ${token}` },
    };
    axios
      .get(
        `https://wb-temp.afexnigeria.com/WB3/api/v1/country/stock/position/${id}`,
        options
      )
      .then((res) => {
        setStock(res.data);
        //console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        `https://wb-temp.afexnigeria.com/WB3/api/v1/admin/levels/${id}`,
        options
      )
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className='w-[84%] font-muli text-[#54565B] h-[calc(100vh-90px)] p-1'>
      <div className='w-[100%] h-[80px] bg-white p-4 flex justify-between'>
        <div className='flex w-[400px] items-center gap-2'>
          <img
            src={singleCountry.country_flag}
            alt=''
            className='w-[25px] rounded'
          />
          <p>{singleCountry.name}</p>
        </div>

        <div className=' rounded-lg items-center text-[12px] text-gray-500  bg-[#FBFBFB] h-[40px] w-[80px] p-3'>
          <Link to='/countrylist'>
            {' '}
            <button> Back</button>{' '}
          </Link>
        </div>
      </div>

      <div className='w-[100%]  h-[calc(100%-80px)] overflow-y-auto flex gap-9'>
        <div className='mt-[30px] h-[800px] rounded-3xl bg-[#F9F9F9] p-8 w-[65%] overflow-y-auto'>
          <div className='bg-[#FFFF] p-3 rounded-3xl w-full'>
            <div className='mb-3 border-b border-gray-200 p-5'>
              <h1>People</h1>
            </div>

            <div className='flex  flex-col gap-3 py-3 px-6'>
              <p>Farmers</p>
              <Progress value={farmerValue} size='xl' radius='xl' />

              {/* <div className='w-[100%] bg-gray-300 rounded-3xl h-[15px]'>
                                <div className='w-[85%] bg-green-500 rounded-3xl h-[15px]'></div>

                            </div> */}
            </div>

            <div className='flex flex-col gap-3 py-3 px-6  '>
              <p>Tenants</p>

              <Progress value={tenantValue} size='xl' radius='xl' />
            </div>

            <div className='flex justify-around py-3 px-6 w-full mt-4 '>
              <p>0</p>
              <p>200</p>
              <p>400</p>
              <p>600</p>
              <p>8000</p>
              <p>1000</p>
              <p>1200</p>
              <p>1400</p>
              <p>1600</p>
              <p>1800</p>
              <p>2000</p>
            </div>
          </div>

          <div className='rounded-3xl w-full mt-8'>
            <Adminlist list={list} />
          </div>
        </div>

        <div className='flex mt-[30px] h-[800px] rounded-3xl bg-[#F9F9F9] p-8 w-[35%] overflow-y-auto'>
          <div className='bg-[#FFFF] w-full overflow-x-auto rounded-3xl'>
            <div className='mb-2 border-b border-gray-200 p-4'>
              <h1>Overall Stock Position</h1>
            </div>

            <div className='w-full overflow-x-auto p-3'>
              <table className='w-full over p-6'>
                <thead>
                  <tr class='bg-[#F9F9F9] text-left text-[#54565B] text-[14px]'>
                    <th class='py-4 px-4'>Commodity</th>
                    <th class='py-4 px-4'>Grade</th>
                    <th class='py-4 px-4'>Volume(MT) </th>
                    <th class='py-4 px-4'>Lien(MT)</th>
                  </tr>
                </thead>

                <tbody class='text-[#54565B] text-[12px] font-light'>
                  {stock?.data?.map((item) => {
                    return (
                      <tr class='text-left border-b border-gray-200 hover:bg-[#e3f7ee]'>
                        <td class='py-4 px-4'>
                          <span class='font-medium'>{item.item_code}</span>
                        </td>

                        <td class='py-4 px-4 '>
                          <span class='font-medium'>Grade{item.grade}</span>
                        </td>

                        <td class='py-4 px-4'>
                          <span class='font-medium '>
                            {item.location_breakdown[0].volume}
                          </span>
                        </td>

                        <td class='py-4 px-4'>
                          <span class='font-medium '>
                            {item.total_lien_weight}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
