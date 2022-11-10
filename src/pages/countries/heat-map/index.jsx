import React, { useState } from 'react';
import { Menu } from '@mantine/core';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Navigation from '../components/navigation';
import { useCountriesCtx } from '../../../contexts';

import CountryTile from '../components/tile';

import FarmerHeatMap from './farmer';
import TenantHeatMap from './tenant';
import CommodityHeatMap from './commodity';

import './map.css';

function HeatMap() {
  // const [selectValue, setSelectValue] = useState(true);
  const [showFarmer, setShowFarmer] = useState(true);
  const [showTenant, setShowTenant] = useState(false);
  const [showCommodity, setShowCommodity] = useState(false);
  const [showName, setShowName] = useState('Farmers');

  const { listItem, handleCommodityFilter } = useCountriesCtx();

  return (
    <div className='w-[82%] flex flex-col gap-10 font-muli h-[calc(100vh-80px)]  xl:h-[calc(100vh-90px)] bg-[#FFFF] overflow-y-auto'>
      {/*CARDS */}
      <CountryTile />

      <div className='bg-[#F9F9F9] flex flex-col h-[calc(100%-3%)] gap-8 p-6 rounded-3xl'>
        <Navigation />

        <div className='w-full h-[calc(100%-10%)] rounded-2xl p-6  bg-[#F9F9F9]'>
          <div className='relative bg-[#FFFFFF] flex justify-around p-5 h-[98%] overflow-y-auto rounded-3xl'>
            <div></div>

            {showFarmer && <FarmerHeatMap />}
            {showTenant && <TenantHeatMap />}
            {showCommodity && <CommodityHeatMap />}

            <div className='flex flex-col p-2'>
              <span className='p-3 text-sm mb-2 mt-4'>Show by:</span>
              <Menu
                position=''
                width={250}
                style={{
                  border: '6px',
                  padding: '15px',
                  width: '180px',
                  borderRadius: '15px',
                }}>
                <Menu.Target>
                  <button className='flex justify-between w-full  text-[14px] text-nowrap py-0 bg-gray-50 rounded-lg'>
                    {showName} <MdKeyboardArrowDown className='text-[20px]' />{' '}
                  </button>
                </Menu.Target>
                <Menu.Dropdown
                  style={{
                    padding: '15px',
                    borderColor: '#38CB89',
                  }}>
                  <Menu.Label
                    className='text-[14px] hover:bg-[#e2f8ee] rounded-xl'
                    onClick={() => {
                      setShowName('Farmers');
                      setShowFarmer(true);
                      setShowTenant(false);
                      setShowCommodity(false);
                    }}>
                    <span className='text-[14px]'>Farmers</span>
                  </Menu.Label>

                  <Menu.Label
                    className='text-[14px] hover:bg-[#e2f8ee] rounded-xl'
                    onClick={() => {
                      setShowName('Tenants');
                      setShowFarmer(false);
                      setShowTenant(true);
                      setShowCommodity(false);
                    }}>
                    Tenants
                  </Menu.Label>

                  <Menu.Label className='text-[14px] hover:bg-[#e2f8ee] rounded-xl'>
                    <Menu position='left-start' width={200}>
                      <Menu.Target>
                        <button
                          className='text-[14px]'
                          onClick={() => {
                            setShowName('Commodities');
                          }}>
                          Commodities
                        </button>
                      </Menu.Target>

                      <Menu.Dropdown
                        style={{
                          padding: '15px',
                          borderColor: '#38CB89',
                          height: '200px',
                          overflowY: 'auto',
                          borderRadius: '10px',
                        }}>
                        {listItem?.map((el, index) => {
                          return (
                            <Menu.Label
                              className='text-[14px] hover:bg-[#e2f8ee] rounded-xl'
                              key={index}
                              onClick={() => {
                                setShowName((prev) => `Commodity: ${el.name}`);
                                handleCommodityFilter(el.code);
                                setShowFarmer(false);
                                setShowTenant(false);
                                setShowCommodity(true);
                              }}>
                              <span className='text-[14px]'>{el.name}</span>
                            </Menu.Label>
                          );
                        })}
                      </Menu.Dropdown>
                    </Menu>
                  </Menu.Label>
                </Menu.Dropdown>
              </Menu>

              <div className='rounded-2xl p-8  mt-[200px] bg-white'>
                <div className='bg-white text-white py-1 px-6 rounded-2xl w-full'>
                  <div className='flex text-[14px] items-center gap-5 p-3'>
                    <div className='h-[20px] w-[20px]'></div>
                    <p>Above 50,000</p>
                  </div>
                  <div className='flex text-[14px] items-center  gap-5 p-3'>
                    <div className=' h-[20px] w-[20px]'></div>
                    <p>Above 40,000</p>
                  </div>
                  <div className='flex text-[14px] items-center gap-5 p-3'>
                    <div className=' h-[20px] w-[20px]'></div>
                    <p>Above 30,000</p>
                  </div>
                  <div className='flex text-[14px] items-center gap-5 p-3'>
                    <div className=' h-[20px] w-[20px]'></div>
                    <p>Above 20,000</p>
                  </div>
                  <div className='flex text-[14px] items-center gap-5 p-3'>
                    <div className=' h-[20px] w-[20px]'></div>
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
