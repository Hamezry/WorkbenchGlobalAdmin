import React, { useState } from 'react';

import DateModule from '../../../../../components/Datemodule';
import filterIcon from '../../../../../Assets/filter.svg';

const TrasactionSummary = ({ transaction }) => {
  const [isDate, setIsDate] = useState(false);

  return (
    <div className='bg-[#FFFF]  p-4 mt-8 rounded-3xl w-full'>
      <div className='flex items-center border-b border-gray-200 justify-between p-3'>
        <div className='flex gap-2'>
          <p>Transaction Summary .</p>
          <span className='text-[#C9C8C6]'>14 Jun, 2022</span>
        </div>

        <div className='flex gap-6'>
          <div className=' flex gap-12 p-3 cursor-pointer rounded-2xl text-sm text-[#C9C8C6] bg-[#F9F9F9] h-[54px w-[186px]'>
            <p>Filter by date</p>
            <p
              onClick={() => {
                setIsDate(!isDate);
              }}>
              &#62;
            </p>
          </div>

          <div className='border-2 border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89]  bg-[#FBFBFB] h-[40px] w-[86px] p-4'>
            <img src={filterIcon} alt='funnel' />
            <button>Filter</button>
          </div>
        </div>
        {isDate && <DateModule />}
      </div>

      {/*TABLE */}
      <div className='p-3 mt-4'>
        <table className='border-collapse w-full'>
          <thead>
            <tr>
              <th className='p-2 font-bold bg-[#F2F2F2] text-gray-600 border border-gray-300 table-cell'>
                Transaction
              </th>
              <th className='p-2 font-bold bg-[#F2F2F2] text-gray-600 border border-gray-300 table-cell'>
                Gross Weight (KG)
              </th>
              <th className='p-2 font-bold bg-[#F2F2F2] text-gray-600 border border-gray-300 table-cell'>
                Net Weight (KG)
              </th>
              <th className='p-2 font-bold bg-[#F2F2F2] text-gray-600 border border-gray-300 table-cell'>
                Units
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
              <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static'>
                Uploaded Balance
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.uploaded_balance
                  ? transaction.uploaded_balance.total_gross_weight
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.uploaded_balance
                  ? transaction.uploaded_balance.total_net_weight
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.uploaded_balance
                  ? transaction.uploaded_balance.total_units
                  : '0'}
              </td>
            </tr>

            <tr className='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
              <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static'>
                Goods Received
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.goods_recieveed
                  ? transaction.goods_recieveed.total_gross_weight
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.goods_recieveed
                  ? transaction.goods_recieveed.total_net_weight
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.goods_recieveed
                  ? transaction.goods_recieveed.total_units
                  : '0'}
              </td>
            </tr>

            <tr className='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
              <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static'>
                Received Transfer
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                21.780
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                21
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                21
              </td>
            </tr>

            {/*TOTAL IN */}
            <tr className='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
              <td className='w-full bg-white lg:w-auto p-3 text-gray-800 text-center'>
                Total IN
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.total_in
                  ? transaction.total_in.total_gross_weight
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.total_in
                  ? transaction.total_in.total_net_weight
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.total_in ? transaction.total_in.total_units : '0'}
              </td>
            </tr>

            <tr className='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
              <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static'>
                Dispatches
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.dispatches
                  ? transaction.dispatches.total_gross_weight
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.dispatches
                  ? transaction.dispatches.total_net_weight
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.dispatches
                  ? transaction.dispatches.total_units
                  : '0'}
              </td>
            </tr>

            <tr className='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
              <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b table-cell relative lg:static'>
                IWH Transfers
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                12.32
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                12
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                12
              </td>
            </tr>

            <tr className='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
              <td className='bg-white w-auto p-3 text-gray-800 text-center'>
                Total OUT
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.total_out
                  ? transaction.total_out.total_gross_weight
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.total_out
                  ? transaction.total_out.total_net_weight
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.total_out
                  ? transaction.total_out.total_units
                  : '0'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrasactionSummary;
