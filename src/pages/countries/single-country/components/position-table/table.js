import React, { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";
import { ArrowDown2 } from "iconsax-react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function Table({
  data,
  headers,
  title,
  currentlyDisplayed,
  setCurrentlyDisplayed,
}) {
  const [currentList, setCurrentList] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  useEffect(() => {
    setCurrentlyDisplayed(null);
    const endOffset = itemOffset + itemsPerPage;
    setCurrentList(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
    // eslint-disable-next-line
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };
  const arrowClicked = (id) => {
    if (id === currentlyDisplayed) return true;
    else return false;
  };
  return (
    // <div className='h-[calc(100%-theme(space.36))] table-auto overflow-auto w-full pb-[35px] relative'>

    <div className='w-full h-full overflow-x-auto p-3 pb-7 '>
      <div className='pb-[10px] h-[50vh] '>
        <div className='overflow-y-scroll h-full'>
          <table className='w-full over p-6'>
            <thead className='sticky top-0 z-10'>
              <tr className='bg-[#F9F9F9] text-left text-[#54565B] text-[14px]'>
                <th className='p-2'></th>
                {headers.map((item, key) => (
                  <th className='p-4 whitespace-nowrap' key={key}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className='text-[#54565B] text-[12px] font-light'>
              {title === "commodities" &&
                currentList.map((item, index) => {
                  return (
                    <>
                      <tr
                        key={index}
                        className={`text-left border-b border-[#F9FAFB] hover:bg-[#e3f7ee] child:whitespace-nowrap bg-white ${arrowClicked("cm" + index)
                          ? "sticky top-[54px] z-10"
                          : ""
                          }`}>
                        <td className='w-8'>
                          <button
                            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${arrowClicked("cm" + index)
                              ? "bg-afexgreen rotate-180"
                              : "bg-bggrey rotate-0"
                              }`}
                            onClick={() =>
                              setCurrentlyDisplayed((s) =>
                                s === "cm" + index ? null : "cm" + index
                              )
                            }>
                            <ArrowDown2
                              size='12'
                              color={
                                arrowClicked("cm" + index) ? "#fff" : "#54565b"
                              }
                              variant='Outline'
                            />
                          </button>
                        </td>
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
                      <tr
                        key={`exp${index}`}
                        className='child:whitespace-nowrap'>
                        <td
                          colSpan={5}
                          className={`${arrowClicked("cm" + index)
                            ? " px-[14px] py-[18px]"
                            : "!p-0 "
                            }`}>
                          <div
                            className={`flex justify-end transition-all duration-400 overflow-hidden ${arrowClicked("cm" + index)
                              ? "opacity-100 h-auto"
                              : "opacity-0 h-0 "
                              }`}>
                            <div className=' min-w-[200px] max-w-[70%] '>
                              <table className={` w-full pb-3 relative `}>
                                <thead className='sticky top-0 '>
                                  <tr className='table-head bg-bggrey p-6 child:p-2'>
                                    <td>Location</td>
                                    <td>Volume</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  {item.location_breakdown.map(
                                    (data, newIndex) => {
                                      return (
                                        <tr key={newIndex}>
                                          <td className={`p-2`}>
                                            {data.location_name}
                                          </td>
                                          <td className={`p-2`}>
                                            {data.volume}
                                          </td>
                                        </tr>
                                      );
                                    }
                                  )}
                                </tbody>
                              </table>
                              <div className='text-xs border-t border-t-textgrey-lighter pt-3 text-textgrey-light text-end'>
                                Last updated: {item.last_updated}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}

              <>
                {title === "inputs" &&
                  currentList.map((item, index) => {
                    return (
                      <>
                        <tr
                          key={index}
                          className={`child:whitespace-nowrap text-left border-b border-[#F9FAFB] hover:bg-[#e3f7ee] bg-white ${arrowClicked("in" + index)
                            ? "sticky top-[54px] z-10"
                            : ""
                            }`}>
                          <td className='w-8'>
                            <button
                              className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${arrowClicked("in" + index)
                                ? "bg-afexgreen rotate-180"
                                : "bg-bggrey rotate-0"
                                }`}
                              onClick={() =>
                                setCurrentlyDisplayed((s) =>
                                  s === "in" + index ? null : "in" + index
                                )
                              }>
                              <ArrowDown2
                                size='12'
                                color={
                                  arrowClicked("in" + index)
                                    ? "#fff"
                                    : "#54565b"
                                }
                                variant='Outline'
                              />
                            </button>
                          </td>
                          <td className='py-4 px-4'>
                            <span className='font-medium'>
                              {item.item_code}
                            </span>
                          </td>

                          <td className='py-4 px-4 '>
                            <span className='font-medium'>
                              {item.total_lien_unit}
                            </span>
                          </td>

                          <td className='py-4 px-4'>
                            <span className='font-medium '>
                              {item.total_unit}
                            </span>
                          </td>
                        </tr>
                        <tr
                          key={`exp${index}`}
                          className='child:whitespace-nowrap'>
                          <td
                            colSpan={4}
                            className={`${arrowClicked("in" + index)
                              ? " px-[14px] py-[18px]"
                              : "!p-0 "
                              }`}>
                            <div
                              className={`flex justify-end transition-all duration-400 overflow-hidden ${arrowClicked("in" + index)
                                ? "opacity-100 h-auto"
                                : "opacity-0 h-0 "
                                }`}>
                              <div className=' min-w-[200px] max-w-[70%] '>
                                <table className={` w-full pb-3 `}>
                                  <thead className='sticky top-0 '>
                                    <tr className='table-head bg-bggrey p-6 child:p-2'>
                                      <td>Location</td>
                                      <td>Quanties</td>
                                      <td>Units</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {item.location_breakdown.map(
                                      (data, newIndex) => {
                                        return (
                                          <tr key={newIndex}>
                                            <td className={`p-2`}>
                                              {data.location_name}
                                            </td>
                                            <td className={`p-2`}>
                                              {data.quatity}
                                            </td>
                                            <td className={`p-2`}>
                                              {data.unit}
                                            </td>
                                          </tr>
                                        );
                                      }
                                    )}
                                  </tbody>
                                </table>
                                <div className='text-xs border-t border-t-textgrey-lighter pt-3 text-textgrey-light text-end'>
                                  Last updated: {item.last_updated}
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </>
            </tbody>
          </table>
        </div>
      </div>

      <div className='z-10 bg-bggrey rounded-[5px] absolute top-[88%] left-0 flex justify-between items-center h-[70px] w-[95%] mx-3 px-3'>
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
    </div>
  );
}
