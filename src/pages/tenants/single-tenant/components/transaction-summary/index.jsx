import React from 'react';
import TransactionDropdown from './dropdown';

const TrasactionSummary = ({
  transaction,
  locationList,
  warehouseList,
  itemList,
  handleLocationFilter,
  handleWarehouseFilter,
  handleItemFilter,
}) => {
  const formatNumber = (value) => {
    return Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(value));
  };
  return (
    <div className='bg-[#FFFF]  p-4 mt-8 rounded-3xl w-full'>
      <div className='flex items-center border-b border-gray-200 justify-between p-3'>
        <div className='flex text-[20px] gap-2'>
          <p>Transaction Summary</p>
        </div>

        <div className='flex gap-6'>
          <TransactionDropdown
            locationList={locationList}
            warehouseList={warehouseList}
            itemList={itemList}
            handleLocationFilter={handleLocationFilter}
            handleWarehouseFilter={handleWarehouseFilter}
            handleItemFilter={handleItemFilter}
          />
        </div>
      </div>

      {/*TABLE */}
      <div className='p-3 mt-4'>
        <table className='border-collapse w-full'>
          <thead>
            <tr>
              <th className='p-2 font-bold bg-[#F2F2F2] text-[#54565B] border-[#D2DAE7] table-cell'>
                Transaction
              </th>
              <th className='p-2 font-bold bg-[#F2F2F2] text-[#54565B] border-[#D2DAE7] table-cell'>
                Gross Weight (KG)
              </th>
              <th className='p-2 font-bold bg-[#F2F2F2] text-[#54565B] border-[#D2DAE7] table-cell'>
                Net Weight (KG)
              </th>
              <th className='p-2 font-bold bg-[#F2F2F2] text-[#54565B] border-[#D2DAE7] table-cell'>
                Units
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
              <td className='w-full lg:w-auto p-3 text-[#54565B] text-center border border-b table-cell relative lg:static'>
                Uploaded Balance
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.uploaded_balance
                  ? transaction.uploaded_balance.total_gross_weight
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.uploaded_balance
                  ? transaction.uploaded_balance.total_net_weight
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.uploaded_balance
                  ? transaction.uploaded_balance.total_units
                  : '0'}
              </td>
            </tr>

            <tr className='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
              <td className='w-full lg:w-auto p-3 text-[#54565B] text-center border  table-cell relative lg:static'>
                Goods Received
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border text-center block lg:table-cell relative lg:static'>
                {transaction.goods_received
                  ? formatNumber(transaction.goods_received.total_gross_weight)
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border text-center block lg:table-cell relative lg:static'>
                {transaction.goods_received
                  ? formatNumber(transaction.goods_received.total_net_weight)
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border-2 text-center block lg:table-cell relative lg:static'>
                {transaction.goods_received
                  ? formatNumber(transaction.goods_received.total_units)
                  : '0'}
              </td>
            </tr>

            <tr className='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
              <td className='w-full lg:w-auto p-3 text-[#54565B] text-center border border-b table-cell relative lg:static'>
                Received Transfer
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.received_transfer
                  ? formatNumber(
                      transaction.received_transfer.total_gross_weight
                    )
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.received_transfer
                  ? formatNumber(transaction.received_transfer.total_net_weight)
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.received_transfer
                  ? formatNumber(transaction.received_transfer.total_units)
                  : '0'}
              </td>
            </tr>

            {/*TOTAL IN */}
            <tr className='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
              <td className='w-full bg-white lg:w-auto p-3 text-[#54565B] text-center'>
                Total IN
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.total_in
                  ? formatNumber(transaction.total_in.total_gross_weight)
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.total_in
                  ? formatNumber(transaction.total_in.total_net_weight)
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.total_in
                  ? formatNumber(transaction.total_in.total_units)
                  : '0'}
              </td>
            </tr>

            <tr className='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
              <td className='w-full lg:w-auto p-3 text-[#54565B] text-center border border-b table-cell relative lg:static'>
                Dispatches
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.dispatches
                  ? formatNumber(transaction.dispatches.total_gross_weight)
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.dispatches
                  ? formatNumber(transaction.dispatches.total_net_weight)
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.dispatches
                  ? formatNumber(transaction.dispatches.total_units)
                  : '0'}
              </td>
            </tr>

            <tr className='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
              <td className='w-full lg:w-auto p-3 text-[#54565B] text-center border border-b table-cell relative lg:static'>
                IWH Transfers
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.iwh_transfers
                  ? formatNumber(transaction.iwh_transfers.total_gross_weight)
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.iwh_transfers
                  ? formatNumber(transaction.iwh_transfers.total_net_weight)
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.iwh_transfers
                  ? formatNumber(transaction.iwh_transfers.total_units)
                  : '0'}
              </td>
            </tr>

            <tr className='bg-[#FBFBFB] lg:hover:bg-[#e3f7ee] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
              <td className='bg-white w-auto p-3 text-[#54565B] text-center'>
                Total OUT
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.total_out
                  ? formatNumber(transaction.total_out.total_gross_weight)
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.total_out
                  ? formatNumber(transaction.total_out.total_net_weight)
                  : '0'}
              </td>
              <td className='w-full lg:w-auto p-3 text-[#54565B] border border-b text-center block lg:table-cell relative lg:static'>
                {transaction.total_out
                  ? formatNumber(transaction.total_out.total_units)
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
