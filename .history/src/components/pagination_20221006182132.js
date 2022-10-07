import React from 'react'

const Pagination = ({ page, handlePageChange }) => {
    return (
        <div className='my-10 w-[80%] mx-auto flex justify-end'>
            <div
                className={page === 1 ? 'text-slate-300 cursor-pointer' : 'cursor-pointer text-black'}
                onClick={() => {
                    if (page !== 1)
                        return handlePageChange(page - 1)
                }}
            ><i className="lni lni-angle-double-left text-[10px]"></i></div>
            <div className='grid grid-cols-6 gap-2 mx-4'>
                <div
                    className={page === 1 ? "flex justify-center items-center w-6 h-6 rounded-sm bg-primary text-[10px] text-white [cursor:pointer]" :
                        'flex justify-center items-center w-6 h-6 rounded-sm bg-slate-300 text-[10px] [cursor:pointer]'}
                    onClick={() => handlePageChange(1)}
                >
                    1
                </div>
                <div
                    className={page === 2 ? "flex justify-center items-center w-6 h-6 rounded-sm bg-primary text-[10px] text-white [cursor:pointer]" :
                        'flex justify-center items-center w-6 h-6 rounded-sm bg-slate-300 text-[10px] [cursor:pointer]'}
                    onClick={() => handlePageChange(2)}
                >
                    2
                </div>
                <div
                    className={page === 3 ? "flex justify-center items-center w-6 h-6 rounded-sm bg-primary text-[10px] text-white [cursor:pointer]" :
                        'flex justify-center items-center w-6 h-6 rounded-sm bg-slate-300 text-[10px] [cursor:pointer]'}
                    onClick={() => handlePageChange(3)}
                >
                    3
                </div>
                <div
                    className={page === 4 ? "flex justify-center items-center w-6 h-6 rounded-sm bg-primary text-[10px] text-white [cursor:pointer]" :
                        'flex justify-center items-center w-6 h-6 rounded-sm bg-slate-300 text-[10px] [cursor:pointer]'}
                    onClick={() => handlePageChange(4)}
                >
                    4
                </div>
                <div
                    className={page === 5 ? "flex justify-center items-center w-6 h-6 rounded-sm bg-primary text-[10px] text-white [cursor:pointer]" :
                        'flex justify-center items-center w-6 h-6 rounded-sm bg-slate-300 text-[10px] [cursor:pointer]'}
                    onClick={() => handlePageChange(5)}
                >
                    5
                </div>
                <div
                    className={page === 6 ? "flex justify-center items-center w-6 h-6 rounded-sm bg-primary text-[10px] text-white [cursor:pointer]" :
                        'flex justify-center items-center w-6 h-6 rounded-sm bg-slate-300 text-[10px] [cursor:pointer]'}
                    onClick={() => handlePageChange(6)}
                >
                    6
                </div>
            </div>
            <div
                className={page === 6 ? 'text-slate-400 cursor-pointer' : 'cursor-pointer text-black'}
                onClick={() => {
                    if (page !== 6)
                        return handlePageChange(page + 1)
                }}
            ><i className="lni lni-angle-double-right text-[10px]"></i></div>
        </div>
    )
}

export default Pagination

