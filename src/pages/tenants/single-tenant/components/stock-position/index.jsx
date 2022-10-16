import React from 'react';

const StockPosition = ({ stock }) => {
  return (
    <div className='flex mt-[30px] h-[800px] rounded-3xl bg-[#F9F9F9] p-8 w-[35%] overflow-y-auto'>
      <div className='bg-[#FFFF] w-full overflow-x-auto rounded-3xl'>
        <div className='mb-2 border-b border-gray-200 p-4'>
          <h1>Overall Stock Position</h1>
        </div>

        <div className='w-full overflow-x-auto p-5'>
          <table className='w-full over p-6'>
            <thead>
              <tr className='bg-[#F9F9F9] text-left text-[#54565B] text-[14px]'>
                <th className='py-2 px-2 '>Commodity</th>
                <th className='py-2 px-2 '>Grade</th>
                <th className='py-2 px-2 '>Volume(MT)</th>
                <th className='py-2 px-2 '>Lien(MT)</th>
              </tr>
            </thead>

            <tbody className='text-[#54565B] text-[12px] font-light'>
              {stock?.map((item) => {
                return (
                  <tr className='text-left border-b border-gray-200 hover:bg-[#e3f7ee]'>
                    <td className='py-4 px-2'>
                      <span className='font-medium'>{item.item_code}</span>
                    </td>

                    <td className='py-4 px-2 '>
                      <span className='font-medium'>Grade{item.grade}</span>
                    </td>

                    <td className='py-4 px-2'>
                      <span className='font-medium '>
                        {item.location_breakdown[0].volume}
                      </span>
                    </td>

                    <td className='py-4 px-2'>
                      <span className='font-medium '>
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
  );
};

export default StockPosition;
