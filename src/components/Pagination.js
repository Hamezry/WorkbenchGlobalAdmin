import React from 'react'
import { Pagination } from '@mantine/core';

const MyPagination = ({ totalPosts, setCurrentPage, perPage, currentPage }) => {
    const stop = Math.ceil(totalPosts / perPage);


    return (
        <Pagination total={stop} page={currentPage} onChange={setCurrentPage} />
    )
}


export default MyPagination;
