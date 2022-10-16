import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { AiOutlineSearch } from 'react-icons/ai';

import Dropdown from './dropdown';

import recieptIcon from '../../Assets/receipt-text.png';
import filterIcon from '../../Assets/filter.svg';
import calenderIcon from '../../Assets/calendar.svg';
//import successIcon from '../Assets/Success-icon.svg'
import Pagination from '../../components/Pagination';
import GlobalProductTile from './components/tile';

import CreateProductModal from './modal/create-product';

import { useProductsCtx } from '../../contexts';
import Filtermodal from './modal/filter';

function Productlist({ openModal }) {
  const { products } = useProductsCtx();
  const [modal, setModal] = useState(false);
  const [viewFilter, setViewFilter] = useState(false);

  //DATE FORMAT FUNCTION
  const formDate = (datex) => {
    const date = new Date(datex);
    return `${format(date, 'MMM')} ${format(date, 'ii')} ${format(date, 'Y')}`;
  };

  const [posts, setPosts] = useState([]);

  const populate = () => {
    setPosts(products);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [itemsOffset, setItemsOffset] = useState(0);

  const handlePageChange = (e) => {
    const newOffset = (e.selected * postsPerPage) % posts.length;
    setItemsOffset(newOffset);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setPosts(
      products.filter((el) =>
        el.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(
    () => populate(),
    //eslint-disable-next-line
    [products]
  );

  useEffect(() => {
    const endOffset = itemsOffset + postsPerPage;
    setCurrentPosts(posts.slice(itemsOffset, endOffset));
    setCurrentPage(Math.ceil(posts.length / postsPerPage));
  }, [itemsOffset, postsPerPage, posts]);

  return (
    <div className='w-[82%] relative flex flex-col font-muli bg-[#FFFFFF] h-[calc(100vh-90px)] gap-14 overflow-y-auto'>
      {/*CARDS */}
      <GlobalProductTile />

      <div className=' flex justify-between items-center w-full h-[calc(100vh-3%)] rounded py-8 px-8 bg-[#F9F9F9] text-[#54565B] text-[14px]'>
        <div className='bg-[#FFFFFF] rounded-3xl w-full py-5 px-8 h-[100%]'>
          <div className='p-4 text-[18px] border-b-2'>
            {' '}
            <p>Overview</p>
          </div>

          <div className='flex justify-end items-center p-4 gap-5'>
            <div className=' flex gap-12 p-3 rounded-2xl border text-sm text-gray-400 bg-[#F9F9F9] h-[54px'>
              <p>Date Registered</p>
              <img src={calenderIcon} alt='calendar icon' />
            </div>

            <div className='relative'>
              <input
                type='text'
                name=''
                id=''
                placeholder='Search'
                className='p-3 rounded-2xl text-sm text-black border outline-none focus:outline-none bg-[#F9F9F9] h-[54px w-[360px]'
                onChange={handleSearch}
              />
              <span className='absolute left-[300px] top-3'>
                <AiOutlineSearch className='text-[25px] text-gray-400' />
              </span>
            </div>

            <div className='flex justify-between rounded-lg items-center text-[12px] text-white bg-[#38CB89] h-[40px] w-[142px] p-4'>
              <button
                onClick={() => {
                  setModal(true);
                }}>
                Create product
              </button>
              <img src={recieptIcon} alt='receipt icon' />
            </div>

            <div className='border border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89]  bg-white h-[40px] w-[86px] p-4'>
              <img src={filterIcon} alt='funnel' />
              <button
                onClick={() => {
                  setViewFilter(true);
                  console.log('here');
                }}>
                Filter
              </button>
            </div>
          </div>

          {/*TABLE */}

          <div className='px-5 h-[500px] overflow-y-auto overflow-x-auto'>
            <table className='min-w-max w-full table-auto'>
              <thead>
                <tr className='bg-[#F9F9F9] text-[#54565B] text-left text-[14px]'>
                  <th className='py-3 px-6 '>S/N</th>
                  <th className='py-3 px-6 '>Product Name</th>
                  <th className='py-3 px-6 '>Code</th>
                  <th className='py-3 px-6 '>Type</th>
                  <th className='py-3 px-6 '>Sustainable</th>
                  <th className='py-3 px-6 '>Unit Type</th>
                  <th className='py-3 px-6 '>Date Created</th>
                  <th className='py-3 px-6 '>Last Updated</th>
                  <th className='py-3 px-6 '>Action</th>
                </tr>
              </thead>

              <tbody className='text-[#54565B] text-[12px] font-light'>
                {currentPosts.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className='text-left border-b border-gray-200 hover:bg-[#e3f7ee]'>
                      <td className='py-5 px-6'>
                        <span className='font-medium'>{index + 1}</span>
                      </td>

                      <td className='py-5 px-6'>
                        <span className='font-medium '>{item.name}</span>
                      </td>

                      <td className='py-5 px-6'>
                        <span className='font-medium '>{item.code}</span>
                      </td>

                      <td className='py-5 px-6'>
                        <span className='font-medium '>
                          {item.product_type}
                        </span>
                      </td>

                      <td className='py-5 px-6'>
                        <span className='font-medium '>
                          {item.certified ? 'Yes' : 'No'}{' '}
                        </span>
                      </td>

                      <td className='py-5 px-6'>
                        <span className='font-medium '>{item.unit_type}</span>
                      </td>

                      <td className='py-5 px-6  '>
                        <span className='font-medium '>{`${formDate(
                          item.created
                        )}`}</span>
                      </td>

                      <td className='py-5 px-6'>
                        <span className='font-medium '>{`${formDate(
                          item.updated
                        )} `}</span>
                      </td>

                      <td className='py-5 px-6 relative'>
                        <Dropdown
                          item={item}
                          setModal={() => {
                            setModal(true);
                          }}
                          openModal={openModal}
                          singleProduct={item}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className='flex items-center justify-between mb-3 bg-[#F9F9F9] p-3 rounded-2xl'>
            <p>
              {itemsOffset + 1} - {postsPerPage + itemsOffset} of {posts.length}{' '}
              Entries
            </p>

            <Pagination
              totalPosts={posts.length}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
              perPage={postsPerPage}
            />
          </div>
        </div>
      </div>

      {modal && <CreateProductModal setModal={setModal} />}
      {viewFilter && <Filtermodal setViewFilter={setViewFilter} />}
    </div>
  );
}

export default Productlist;
