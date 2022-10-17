import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";

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

            <tbody className='text-[#54565B] text-[12px] font-light'>
              {stock?.map((item, index) => {
                return (
                  <>
                    <tr className='text-left border-b border-[#F9FAFB] hover:bg-[#e3f7ee]'>
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
                          {item.location_breakdown[0].volume}
                        </span>
                      </td>

                      <td className='py-4 px-2'>
                        <span className='font-medium '>
                          {item.total_lien_weight}
                        </span>
                      </td>
                    </tr>
                    <div
                      className={`max-h-0 overflow-hidden flex flex-col self-end p-0 transition-[max-height] ${
                        indexToShow === index + 1
                          ? " max-h-64 p-3 w-[200px]"
                          : ""
                      }`}>
                      <tr className='text-left p-3 bg-[#F9F9F9] hover:bg-[#e3f7ee]'>
                        <td className='py-2 px-4 '>Location</td>
                        <td className='py-2 px-4 '>Volume(MT)</td>
                      </tr>
                      {item.location_breakdown.map((list) => {
                        return (
                          <>
                            <tr className='text-left p-3  hover:bg-[#e3f7ee]'>
                              <td className='py-2 px-4 '>
                                {list.location_name}
                              </td>
                              <td className='py-2 px-4 '>{list.volume}</td>
                            </tr>
                            {/* <tr className='text-center p-3 hover:bg-[#e3f7ee]'>
                                  <td className='px-4 '>last update: Today @ 2:30pm</td>
                                </tr> */}
                          </>
                        );
                      })}
                    </div>
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
