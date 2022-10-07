import React from 'react'
import { FaGreaterThan } from 'react-icons/fa';
import { FaLessThan } from 'react-icons/fa';

// const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className='bg-green-500'>
//         {pageNumbers.map(number => (
//           <li key={number} className='cyan'>
//             <a onClick={() => paginate(number)} href='!#' className='page-link'>
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };



const Pagination = ({ setCurrentPage }) => {
    return (
        <div className='my-10 w-[80%] mx-auto flex justify-end'>
            <div
                className={setCurrentPage === 1 ? 'text-slate-300 cursor-pointer' : 'cursor-pointer text-black'}
                onClick={() => {
                    if (setCurrentPage !== 1)
                        return(setCurrentPage - 1)
                }}
            ><FaLessThan className="bg-gray-200"/></div>
            <div className='grid grid-cols-6 gap-2 mx-4'>
                <div
                    className={setCurrentPage === 1 ? "flex justify-center items-center w-6 h-6 rounded-sm bg-primary text-[10px] text-white [cursor:pointer]" :
                        'flex justify-center items-center w-6 h-6 rounded-sm text-[10px] [cursor:pointer]'}
                    onClick={() => setCurrentPage(1)}
                >
                    1
                </div>
                <div
                    className={setCurrentPage === 2 ? "flex justify-center items-center w-6 h-6 rounded-sm bg-primary text-[10px] text-white [cursor:pointer]" :
                        'flex justify-center items-center w-6 h-6 rounded-sm text-[10px] [cursor:pointer]'}
                    onClick={() => setCurrentPage(2)}
                >
                    2
                </div>
                <div
                    className={setCurrentPage === 3 ? "flex justify-center items-center w-6 h-6 rounded-sm bg-primary text-[10px] text-white [cursor:pointer]" :
                        'flex justify-center items-center w-6 h-6 rounded-sm text-[10px] [cursor:pointer]'}
                    onClick={() => setCurrentPage(3)}
                >
                    3
                </div>
                <div
                    className={setCurrentPage === 4 ? "flex justify-center items-center w-6 h-6 rounded-sm bg-primary text-[10px] text-white [cursor:pointer]" :
                        'flex justify-center items-center w-6 h-6 rounded-sm text-[10px] [cursor:pointer]'}
                    onClick={() =>setCurrentPage(4)}
                >
                    4
                </div>
                <div
                    className={setCurrentPage === 5 ? "flex justify-center items-center w-6 h-6 rounded-sm bg-primary text-[10px] text-white [cursor:pointer]" :
                        'flex justify-center items-center w-6 h-6 rounded-sm text-[10px] [cursor:pointer]'}
                    onClick={() =>setCurrentPage(5)}
                >
                    5
                </div>
                <div
                    className={setCurrentPage === 6 ? "flex justify-center items-center w-6 h-6 rounded-sm bg-primary text-[10px] text-white [cursor:pointer]" :
                        'flex justify-center items-center w-6 h-6 rounded-sm text-[10px] [cursor:pointer]'}
                    onClick={() => setCurrentPage(6)}
                >
                    6
                </div>
            </div>
            <div
                className={setCurrentPage === 6 ? 'text-slate-400 cursor-pointer' : 'cursor-pointer text-black'}
                onClick={() => {
                    if (setCurrentPage !== 6)
                        return (setCurrentPage + 1)
                }}
            > <FaGreaterThan className="bg-green-400 text-white text-[10px]"/> </div>
        </div>
    )
}


export default Pagination;
