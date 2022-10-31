import React from 'react';
import Navigation from '../components/navigation';

import CountryTile from '../components/tile';

import africanMap from '../../../Assets/Map of Africa.svg';
// import Map from './farmer';

function HeatMap() {
  return (
    <div className='w-[82%] flex flex-col gap-10 font-muli h-[calc(100vh-80px)]  xl:h-[calc(100vh-90px)] bg-[#FFFF] overflow-y-auto'>
      {/*CARDS */}
      <CountryTile />

      <div className='bg-[#F9F9F9] flex flex-col h-[calc(100%-3%)] gap-8 p-6 rounded-3xl'>
        <Navigation />

        <div className='w-full h-[calc(100%-10%)] rounded-2xl p-6  bg-[#F9F9F9]'>
          {/* <Map /> */}
          <div className='bg-[#FFFFFF] flex justify-around p-5 h-[98%] overflow-y-auto rounded-3xl'>
            <img src={africanMap} alt='map of Africa' className='h-' />
            <div className='flex flex-col items-center'>
              <div className='rounded-2xl p-8  mt-[320px] bg-[#F9F9F9]'>
                <div className='bg-white py-1 px-6 rounded-2xl w-full'>
                  <div className='flex text-[14px] items-center gap-5 p-3'>
                    <div className='bg-[#1D925D] h-[20px] w-[20px]'></div>
                    <p>Above 50,000</p>
                  </div>
                  <div className='flex text-[14px] items-center  gap-5 p-3'>
                    <div className='bg-[#72B746] h-[20px] w-[20px]'></div>
                    <p>Above 40,000</p>
                  </div>
                  <div className='flex text-[14px] items-center gap-5 p-3'>
                    <div className='bg-[#92D669] h-[20px] w-[20px]'></div>
                    <p>Above 30,000</p>
                  </div>
                  <div className='flex text-[14px] items-center gap-5 p-3'>
                    <div className='bg-[#38CB89] h-[20px] w-[20px]'></div>
                    <p>Above 20,000</p>
                  </div>
                  <div className='flex text-[14px] items-center gap-5 p-3'>
                    <div className='bg-[#38CB89] h-[20px] w-[20px]'></div>
                    <p>Above 10,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeatMap;
