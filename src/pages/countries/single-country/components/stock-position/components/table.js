import React, { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function Table({ data }) {
  const [currentList, setCurrentList] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentList(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };
  return (
    // <div className='h-[calc(100%-theme(space.36))] table-auto overflow-auto w-full pb-[35px] relative'>

    <>
      <div className='pb-[10px] h-full'>
        <div className='overflow-y-scroll h-full'>
          <table className='w-full over p-6'>
            <thead>
              <tr className='bg-[#F9F9F9] text-left text-[#54565B] text-[14px]'>
                <th className='py-4 px-4'>Commodity</th>
                <th className='py-4 px-4'>Grade</th>
                <th className='py-4 px-4'>Volume(MT) </th>
                <th className='py-4 px-4'>Lien(MT)</th>
              </tr>
            </thead>
            <tbody className='text-[#54565B] text-[12px] font-light'>
              {currentList.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className='text-left border-b border-gray-200 hover:bg-[#e3f7ee]'>
                    <td className='py-4 px-4'>
                      <span className='font-medium'>{item.item_code}</span>
                    </td>

                    <td className='py-4 px-4 '>
                      <span className='font-medium'>Grade{item.grade}</span>
                    </td>

                    <td className='py-4 px-4'>
                      <span className='font-medium '>
                        {item.location_breakdown[0].volume}
                      </span>
                    </td>

                    <td className='py-4 px-4'>
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

      <div className=' bg-bggrey rounded-[5px] absolute bottom-[25px] left-0 flex justify-between items-center h-[70px] w-[95%] mx-3 px-3'>
        <div>
          {currentList?.length > 0 ? itemOffset + 1 : itemOffset + 0}-
          {itemOffset + itemsPerPage > data?.length
            ? data?.length
            : itemOffset + itemsPerPage}
          &nbsp;of {data?.length}
        </div>

        <ReactPaginate
          breakLabel='...'
          previousLabel={
            <MdKeyboardArrowLeft className='text-2xl bg-afexgreen text-white rounded-lg cursor-pointer ' />
          }
          nextLabel={
            <MdKeyboardArrowRight className='text-2xl bg-afexgreen text-white rounded-lg cursor-pointer ' />
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={0}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          // renderOnZeroPageCount={null}
          className='flex justify-end items-center gap-[0px] child:child:p-2 child:m-1 child:child:rounded '
        />
      </div>
    </>
  );
}
