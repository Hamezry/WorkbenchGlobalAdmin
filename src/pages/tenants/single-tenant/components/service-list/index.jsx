import React from 'react';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

import {
  AccountingModal,
  CSDModal,
  EWRModal,
  LogisticsModal,
  OverageModal,
  PlantModal,
  RegistrationModal,
  VerificationModal,
} from '../../../modal/service-list';

import profIcon from '../../../../../Assets/profile.svg';
import building from '../../../../../Assets/Storage Cap.svg';
import book from '../../../../../Assets/Warehouse.svg';

const ServiceList = ({
  modalsService,
  closeModal,
  change_status,
  switch_list,
  userCount,
  setUserCount,
  storageCount,
  setStorageCount,
  service,
  showModal,
}) => {
  const formatNumber = (value) => {
    return Intl.NumberFormat('en-US').format(Number(value));
  };

  const formatter = Intl.NumberFormat('en', { notation: 'compact' });

  return (
    <div className='flex gap-4 mt-3 p-6 '>
      <div className='w-[50%] h-[350px] flex flex-col gap-3 overflow-y-auto rounded-3xl p-6 bg-[#FFFF]'>
        <div className='flex justify-between p-3 border-b '>
          <p>Service List</p>
          <p className='text-green-400 text-bold text-xs'>See all</p>
        </div>

        <div className='flex justify-between mt-6 items-center'>
          <p>Accounting Module</p>
          <label className='inline-flex relative items-center mr-5 cursor-pointer'>
            <input
              type='checkbox'
              className='sr-only peer'
              checked={switch_list.accounting_setting}
              readOnly
            />
            <div
              onClick={() => {
                showModal('account');
              }}
              className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "></div>
          </label>
        </div>

        <div className='flex justify-between mt-6 items-center'>
          <p>CSD Module</p>
          <label className='inline-flex relative items-center mr-5 cursor-pointer'>
            <input
              type='checkbox'
              className='sr-only peer'
              checked={switch_list.csd_setting}
              readOnly
            />
            <div
              onClick={() => {
                showModal('csd');
              }}
              className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "></div>
          </label>
        </div>

        <div className='flex justify-between mt-6 items-center'>
          <p>EWR Module</p>
          <label className='inline-flex relative items-center mr-5 cursor-pointer'>
            <input
              type='checkbox'
              className='sr-only peer'
              checked={switch_list.ewr_setting}
              readOnly
            />
            <div
              onClick={() => {
                showModal('ewr');
              }}
              className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "></div>
          </label>
        </div>

        <div className='flex justify-between mt-6 items-center'>
          <p>Logistics Module</p>
          <label className='inline-flex relative items-center mr-5 cursor-pointer'>
            <input
              type='checkbox'
              className='sr-only peer'
              checked={switch_list.logistics_setting}
              readOnly
            />
            <div
              onClick={() => {
                showModal('logistic');
              }}
              className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "></div>
          </label>
        </div>

        <div className='flex justify-between mt-6 items-center'>
          <p>Overage Module</p>
          <label className='inline-flex relative items-center mr-5 cursor-pointer'>
            <input
              type='checkbox'
              className='sr-only peer'
              checked={switch_list.overage_setting}
              readOnly
            />
            <div
              onClick={() => {
                showModal('overage');
              }}
              className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "></div>
          </label>
        </div>

        <div className='flex justify-between mt-6 items-center'>
          <p>Plant Module</p>
          <label className='inline-flex relative items-center mr-5 cursor-pointer'>
            <input
              type='checkbox'
              className='sr-only peer'
              checked={switch_list.plant_setting}
              readOnly
            />
            <div
              onClick={() => {
                showModal('plant');
              }}
              className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "></div>
          </label>
        </div>

        <div className='flex justify-between mt-6 items-center'>
          <p>Registration Module</p>
          <label className='inline-flex relative items-center mr-5 cursor-pointer'>
            <input
              type='checkbox'
              className='sr-only peer'
              checked={switch_list.registration_setting}
              readOnly
            />
            <div
              onClick={() => {
                showModal('reg');
              }}
              className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "></div>
          </label>
        </div>

        <div className='flex justify-between mt-6 items-center'>
          <p>Verification Module</p>
          <label className='inline-flex relative items-center mr-5 cursor-pointer'>
            <input
              type='checkbox'
              className='sr-only peer'
              checked={switch_list.verification_setting}
              readOnly
            />
            <div
              onClick={() => {
                showModal('verification');
              }}
              className="w-12 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#38CB89]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38CB89] "></div>
          </label>
        </div>
      </div>

      <div className='flex flex-col w-[50%] h-[350px] items-center gap-10'>
        {userCount && (
          <div className='relative bg-[#FFFF] w-full h-[50%] rounded-xl  flex gap-10 px-8 items-center'>
            <img src={profIcon} alt='avatar' />

            <div className='font-semibold text-[25px]'>
              <p className='text-[14px] text-[#B4B4B0] mb-5'>User Account</p>
              <p>
                {' '}
                <span className='text-[#9FA19C]'>
                  {service.users ? formatter.format(service.users.active) : '0'}{' '}
                </span>
                /{service.users ? formatter.format(service.users.total) : '0'}
              </p>
            </div>

            <div className=' absolute right-8 top-8 flex gap-5 '>
              <button>
                <FaLessThan className='h-[18px] text-[#B4B4B0] font-light ' />
              </button>
              <button
                onClick={() => {
                  setUserCount(false);
                  setStorageCount(true);
                }}>
                <FaGreaterThan className='h-[18px]' />
              </button>
            </div>
          </div>
        )}

        {storageCount && (
          <div className='relative bg-[#FFFF] w-full h-[50%] rounded-xl  flex gap-10 px-8 items-center'>
            <img src={building} alt='avatar' />

            <div className='font-semibold text-[25px]'>
              <p className='text-[14px] text-[#B4B4B0] mb-5'>
                Storage Capacity (MT)
              </p>
              <p>
                {' '}
                <span className='text-[#9FA19C]'>
                  {service.storage_capacity
                    ? formatter.format(
                        service.storage_capacity.total_utilization
                      )
                    : '0'}{' '}
                </span>
                /
                {service.storage_capacity
                  ? formatter.format(service.storage_capacity.total_capacity)
                  : '0'}
              </p>
            </div>

            <div className=' absolute right-8 top-8 flex gap-5 '>
              <button
                onClick={() => {
                  setUserCount(true);
                  setStorageCount(false);
                }}>
                <FaLessThan className='h-[18px] font-light ' />
              </button>
              <button>
                <FaGreaterThan className='h-[18px] text-[#B4B4B0]' />
              </button>
            </div>
          </div>
        )}

        <div className=' bg-[#FFFF] w-full h-[50%] rounded-xl p-8 items-center flex gap-10'>
          <img src={book} alt='avatar' />
          <p className='text-[25px]'>
            {' '}
            <span className='text-[14px]'>Warehouse Count</span> <br />{' '}
            {service.warehouse_count
              ? formatNumber(service.warehouse_count)
              : '0'}
          </p>
        </div>
      </div>
      {/* Modals */}
      <AccountingModal
        show={modalsService.account}
        close={closeModal}
        activate={() => change_status('accounting_setting', 'True')}
        active={switch_list.accounting_setting}
        deactivate={() => change_status('accounting_setting', 'False')}
      />

      <CSDModal
        show={modalsService.csd}
        close={closeModal}
        activate={() => change_status('csd_setting', 'True')}
        active={switch_list.csd_setting}
        deactivate={() => change_status('csd_setting', 'False')}
      />
      <EWRModal
        show={modalsService.ewr}
        close={closeModal}
        activate={() => change_status('ewr_setting', 'True')}
        active={switch_list.ewr_setting}
        deactivate={() => change_status('ewr_setting', 'False')}
      />
      <LogisticsModal
        show={modalsService.logistic}
        close={closeModal}
        activate={() => change_status('logistics_setting', 'True')}
        active={switch_list.logistics_setting}
        deactivate={() => change_status('logistics_setting', 'False')}
      />
      <OverageModal
        show={modalsService.overage}
        close={closeModal}
        activate={() => change_status('overage_setting', 'True')}
        active={switch_list.overage_setting}
        deactivate={() => change_status('overage_setting', 'False')}
      />
      <PlantModal
        show={modalsService.plant}
        close={closeModal}
        activate={() => change_status('plant_setting', 'True')}
        active={switch_list.plant_setting}
        deactivate={() => change_status('plant_setting', 'False')}
      />
      <RegistrationModal
        show={modalsService.reg}
        close={closeModal}
        activate={() => change_status('registration_setting', 'True')}
        active={switch_list.registration_setting}
        deactivate={() => change_status('registration_setting', 'False')}
      />
      <VerificationModal
        show={modalsService.verification}
        close={closeModal}
        activate={() => change_status('verification_setting', 'True')}
        active={switch_list.registration_setting}
        deactivate={() => change_status('verification_setting', 'False')}
      />
    </div>
  );
};

export default ServiceList;
