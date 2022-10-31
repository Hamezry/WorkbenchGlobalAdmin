import React from "react";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const MyPagination = ({ totalPosts, postsPerPage, setItemsOffset, perPage }) => {
  const stop = Math.ceil(totalPosts / perPage);

  const handlePageChange = (e) => {
    const newOffset = (e.selected * perPage) % totalPosts;

    setItemsOffset(newOffset);
  };

  return (
    <ReactPaginate
      breakLabel='...'
      previousLabel={
        <MdKeyboardArrowLeft className='text-3xl bg-afexgreen text-white rounded-lg cursor-pointer ' />
      }
      nextLabel={
        <MdKeyboardArrowRight className='text-3xl bg-afexgreen text-white rounded-lg cursor-pointer ' />
      }
      onPageChange={handlePageChange}
      pageCount={stop}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      className='flex justify-end items-center gap-2 child:child:p-1 child:mx-1 child:child:rounded'
    />
  );
};

export default MyPagination;
