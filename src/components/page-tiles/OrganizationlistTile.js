import React from 'react';
import { ArrowUp, ArrowDown } from 'iconsax-react';
import { useGlobalTenantsCardCtx } from '../../contexts/tenantsCard';

const Increase = () => {
  return (
    <ArrowUp
      size={38}
      className='bg-[#E5F6EF] text-[#38CB89] p-2 rounded-full font-bold '
    />
  );
};

const Decrease = () => {
  return (
    <ArrowDown
      size={38}
      className='bg-red-100 text-red-500 p-2 rounded-full font-bold '
    />
  );
};

const getPercentageDifference = (current, previous) => {
  return (((current - previous) / (previous || 1)) * 100).toFixed(2);
};

const OrganizationlistTile = () => {
  const { cardData } = useGlobalTenantsCardCtx();

  const csdtenants_diff = getPercentageDifference(
    cardData.csd_access.total,
    cardData.csd_access.last_month
  );
  const availabletenants_diff = getPercentageDifference(
    cardData.available_tenants.total,
    cardData.available_tenants.last_month
  );

  return (
    <div className='w-full flex text-[16px] flex-col bg-[#F9FAFB] rounded-3xl gap-3 p-3 mt-10'>
      <p className='px-8 py-2'>Overview</p>
      <div className='flex p-6 justify-between gap-6 '>
        <div className=' flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-3xl flex-1'>
          <p className=' text-[#47494E] text-[16px] mb-4'>
            Total Active Tenants
          </p>

          <div className='text-[14px] flex justify-between items-end'>
            <p className='flex flex-col space-y-4'>
              <span className='text-[25px] font-bold '>
                {Intl.NumberFormat('en-US').format(
                  cardData.active_tenants.total_active
                )}
              </span>
              <span>
                In-active Tenants:{' '}
                {Intl.NumberFormat('en-US').format(
                  cardData.active_tenants.inactive_tenants
                )}
              </span>
            </p>
          </div>
        </div>

        <div className=' flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-3xl flex-1'>
          <p className=' text-[#47494E] text-[16px] mb-4'>
            Total Tenants (CSD)
          </p>

          <div className='text-[14px] flex justify-between items-end'>
            <p className='flex flex-col space-y-4'>
              <span className='text-[25px] font-bold '>
                {Intl.NumberFormat('en-US').format(cardData.csd_access.total)}{' '}
              </span>
              <span>
                Last Month:{' '}
                {Intl.NumberFormat('en-US').format(
                  cardData.csd_access.last_month
                )}
              </span>
            </p>
            <div className='flex flex-col space-y-1 items-center pb-2'>
              {csdtenants_diff > 0 ? (
                <>
                  <Increase />
                  <span className='text-[#38CB89]'>+{csdtenants_diff}% </span>
                </>
              ) : (
                <>
                  <Decrease />
                  <span className='text-red-500'>{csdtenants_diff}% </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className=' flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-3xl flex-1'>
          <p className=' text-[#47494E] text-[16px] mb-4'>
            Total Tenants Available
          </p>

          <div className='text-[14px] flex justify-between items-end'>
            <p className='flex flex-col space-y-4'>
              <span className='text-[25px] font-bold '>
                {Intl.NumberFormat('en-US').format(
                  cardData.available_tenants.total
                )}{' '}
              </span>
              <span>
                Last Month:{' '}
                {Intl.NumberFormat('en-US').format(
                  cardData.available_tenants.last_month
                )}
              </span>
            </p>
            <div className='flex flex-col space-y-1 items-center pb-2'>
              {availabletenants_diff > 0 ? (
                <>
                  <Increase />
                  <span className='text-[#38CB89]'>
                    +{availabletenants_diff}%
                  </span>
                </>
              ) : (
                <>
                  <Decrease />
                  <span className='text-red-500'>
                    {availabletenants_diff}%{' '}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className=' flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-3xl flex-1'>
          <p className=' text-[#47494E] text-[16px] mb-4'>
            Highest Number of Tenants
          </p>

          <div className='text-[14px] flex justify-between items-end'>
            <div className='flex flex-col space-y-4'>
              <div className='flex gap-3 items-center'>
                <span className='text-[25px] font-bold'>
                  {cardData.highest_tenant_num.name}{' '}
                </span>
                <img
                  src={cardData.highest_tenant_num.country_flag}
                  className='w-7 h-5'
                  alt={cardData.highest_tenant_num.name}
                />
              </div>
              <span>
                Registered tenants: {cardData.highest_tenant_num.no_of_tenants}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationlistTile;
