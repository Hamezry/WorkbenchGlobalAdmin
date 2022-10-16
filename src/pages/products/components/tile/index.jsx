import React from 'react';
import { Skeleton } from '@mantine/core';

import { useProductsCtx } from '../../../../contexts';

const GlobalProductTile = () => {
  const { cardData, dataLoaded } = useProductsCtx();

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className='w-full flex text-[16px] flex-col bg-[#F9FAFB] rounded-3xl gap-3 p-3 mt-10'>
      <p className='px-8 py-2'>Overview</p>
      <div className='flex p-6 justify-between gap-6 '>
        {/* Total Products */}
        {!dataLoaded ? (
          <Skeleton className=' flex flex-col p-6 gap-4 rounded-3xl flex-1 h-40' />
        ) : (
          <div className=' flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-3xl flex-1'>
            <p className=' text-[#47494E] text-[16px] mb-4'>Total Products</p>

            <div className='text-[14px] flex justify-between items-end'>
              <p className='flex flex-col space-y-4'>
                <span className='text-[25px] font-bold '>
                  {Intl.NumberFormat('en-US').format(
                    cardData.total_products.value
                  )}
                </span>
                <span className='text-gray-400'>
                  Certified Products:{' '}
                  {Intl.NumberFormat('en-US').format(
                    cardData.total_products.certified_products
                  )}
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Products Commodity */}
        {!dataLoaded ? (
          <Skeleton className=' flex flex-col p-6 gap-4 rounded-3xl flex-1 h-40' />
        ) : (
          <div className=' flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-3xl flex-1'>
            <p className=' text-[#47494E] text-[16px] mb-4'>
              Products (Commodity)
            </p>

            <div className='text-[14px] flex justify-between items-end'>
              <p className='flex flex-col space-y-4'>
                <span className='text-[25px] font-bold '>
                  {Intl.NumberFormat('en-US').format(
                    cardData.commodities.value
                  )}{' '}
                </span>
                <span className='text-gray-400'>
                  Last Added: {formatDate(cardData.commodities.last_added)}
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Products Input */}
        {!dataLoaded ? (
          <Skeleton className=' flex flex-col p-6 gap-4 rounded-3xl flex-1 h-40' />
        ) : (
          <div className=' flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-3xl flex-1'>
            <p className=' text-[#47494E] text-[16px] mb-4'>Products (Input)</p>

            <div className='text-[14px] flex justify-between items-end'>
              <p className='flex flex-col space-y-4'>
                <span className='text-[25px] font-bold '>
                  {Intl.NumberFormat('en-US').format(cardData.inputs.value)}{' '}
                </span>
                <span className='text-gray-400'>
                  Last Added: {formatDate(cardData.inputs.last_added)}
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Products Fees */}
        {!dataLoaded ? (
          <Skeleton className=' flex flex-col p-6 gap-4 rounded-3xl flex-1 h-40' />
        ) : (
          <div className=' flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-3xl flex-1'>
            <p className=' text-[#47494E] text-[16px] mb-4'>Products (Fees)</p>

            <div className='text-[14px] flex justify-between items-end'>
              <p className='flex flex-col space-y-4'>
                <span className='text-[25px] font-bold '>
                  {Intl.NumberFormat('en-US').format(cardData.fees.value)}{' '}
                </span>
                <span className='text-gray-400'>
                  Last Added: {formatDate(cardData.fees.last_added)}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalProductTile;
