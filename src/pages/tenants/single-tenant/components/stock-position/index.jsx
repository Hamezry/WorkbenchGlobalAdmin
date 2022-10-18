import React, { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';

const StockPosition = ({ stock }) => {
  const [indexToShow, setIndexToShow] = useState(null);
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

            <tbody className='text-[#54565B] text-[12px] font-light relative'>
              {stock?.map((item, index) => {
                return (
                  <>
                    <tr className='text-left border-b border-[#F9FAFB] hover:bg-[#e3f7ee] relative'>
                      <td className='py-4 px-2 flex gap-4'>
                        <button
                          onClick={() => {
                            setIndexToShow(index + 1);
                            if (indexToShow === index + 1) setIndexToShow(null);
                          }}>
                          <MdExpandMore />
                        </button>
                        <span className='font-medium'>{item.item_code}</span>
                      </td>

                      <td className='py-4 px-2 '>
                        <span className='font-medium'>Grade{item.grade}</span>
                      </td>

                      <td className='py-4 px-2'>
                        <span className='font-medium '>
                          {Number(item.location_breakdown[0].volume).toFixed(2)}
                        </span>
                      </td>

                      <td className='py-4 px-2'>
                        <span className='font-medium '>
                          {Number(item.total_lien_weight).toFixed(2)}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className='col-span-4' colSpan={4}>
                        <div
                          className={`max-h-0 overflow-hidden flex w-full justify-end p-0 transition-[max-height] ${
                            indexToShow === index + 1
                              ? ' max-h-64 p-3'
                              : undefined
                          }`}>
                          <div className='flex flex-col'>
                            <p className='text-left p-3 bg-[#F9F9F9] hover:bg-[#e3f7ee]'>
                              <span className='py-2 px-4 '>Location</span>
                              <span className='py-2 px-4 '>Volume(MT)</span>
                            </p>
                            {item.location_breakdown.map((list) => {
                              return (
                                <>
                                  <p className='text-left p-3  hover:bg-[#e3f7ee]'>
                                    <span className='py-2 px-4 '>
                                      {list.location_name}
                                    </span>
                                    <span className='py-2 px-4 '>
                                      {list.volume}
                                    </span>
                                  </p>
                                  {/* <tr className='text-center p-3 hover:bg-[#e3f7ee]'>
                                <td className='px-4 '>
                                  last update: Today @ 2:30pm
                                </td>
                              </tr> */}
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </td>
                    </tr>
                  </>
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
