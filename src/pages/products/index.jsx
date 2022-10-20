import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Calendar, ReceiptText, Filter } from 'iconsax-react';

import Dropdown from './dropdown';
import Query from '../../utils/query';
import GlobalProductTile from './components/tile';
import CreateProductModal from './modal/create-product';
import Filtermodal from './modal/filter';

import { useProductsCtx } from "../../contexts";

import Pagination from '../../components/Pagination';
import TableSelect from '../../components/TableSelect';
import DateModule from '../../components/Datemodule';
import notification from '../../utils/notification';

function Productlist({ openModal }) {
  const { products } = useProductsCtx();


  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [viewFilter, setViewFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [itemsOffset, setItemsOffset] = useState(0);
  const [showDate, setShowDate] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filterObj, setFilterObj] = useState({
    certified: [],
    codes: [],
    unit_types: [],
    types: [],
  });

  // Filter Modal Query Bundler
  const QueryBuilder = new Query(products)
    .certified_filter(filterObj.certified)
    .code_filter(filterObj.codes)
    .type_filter(filterObj.types)
    .unit_type_filter(filterObj.unit_types);

  //DATE FORMAT FUNCTION
  const formDate = (datex) => {
    return new Date(datex).toLocaleDateString("en-UK", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Date Range Filter Function
  const dateRangeFilter = () => {
    if (!startDate)
      return notification({
        heading: 'Please specify a start date',
        id: 'error',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      });
    if (!endDate)
      return notification({
        heading: 'Please specify an end date',
        id: 'error',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      });

    const res = QueryBuilder.data
      .slice()
      .filter(
        (item) =>
          new Date(item.created).getTime() >= startDate.getTime() &&
          new Date(item.created).getTime() <= endDate.getTime()
      )
      .sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      );
    return setPosts(res);
  };

  const populate = () => {
    setPosts(QueryBuilder.data);
  };

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
    [products, filterObj]
  );

  useEffect(() => {
    const endOffset = itemsOffset + postsPerPage;
    setCurrentPosts(posts.slice(itemsOffset, endOffset));
    setCurrentPage(Math.ceil(posts.length / postsPerPage));
  }, [itemsOffset, postsPerPage, posts, currentPage]);

  return (
    <div className='w-[82%] flex flex-col font-muli bg-[#FFFFFF] h-[calc(100vh-90px)] space-y-14 overflow-y-auto'>
      {/*CARDS */}
      <GlobalProductTile />

      <section className='bg-[#F9FAFB] p-10 w-full h-full relative rounded-3xl'>
        <div className='rounded-3xl p-6 pr-4 py-10 bg-white h-full relative child:px-4 space-y-3'>
          <h2
            className='text-xl font-bold border-b-[1px] border-[#F3F3F3] pb-2 w-full block'
            onClick={() => setShowDate(false)}>
            Overview
          </h2>
          {/* Table Controls */}
          <div className='flex justify-between items-center gap-5 relative'>
            <div className='flex items-start gap-4 align-middle'>
              <div className=' flex flex-1 h-full text-left self-start'>
                <TableSelect
                  defaultValue={"7 entries"}
                  updateValue={setPostsPerPage}
                  data={[
                    { value: 7, label: "7 entries" },
                    { value: 20, label: "20 entries" },
                    { value: 100, label: "100 entries" },
                    { value: 500, label: "500 entries" },
                  ]}
                  className='text-sm'
                />
              </div>
            </div>
            <div className='flex flex-1 justify-end items-center gap-5 relative'>
              <button
                className=' flex items-center gap-4 p-3 rounded-2xl border text-sm text-gray-400 bg-[#F9F9F9] self-end'
                onClick={() => setShowDate((s) => !s)}>
                <span>Date Registered</span>
                <Calendar size={18} variant='Bold' />
              </button>
              {showDate && (
                <DateModule
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                  close={() => setShowDate(false)}
                  filterFunc={dateRangeFilter}
                />
              )}

              <div className='relative flex justify-end'>
                <input
                  type='text'
                  name=''
                  id=''
                  placeholder='Search'
                  className='p-3 rounded-2xl text-sm text-black border outline-none focus:outline-none bg-[#F9F9F9]'
                  onChange={handleSearch}
                />
                <span className='absolute right-2 top-3'>
                  <AiOutlineSearch className='text-[25px] text-gray-300' />
                </span>
              </div>

              <button
                onClick={() => {
                  setModal(true);
                }}
                className='flex justify-between rounded-lg items-center text-[12px] font-semibold text-white bg-[#38CB89] p-3 gap-3'>
                Create product
                <ReceiptText size={18} />
              </button>

              <button
                className='border border-[#38CB89] flex gap-1 rounded-lg items-center  font-semibold text-[14px] text-[#38CB89]  bg-white p-3'
                onClick={() => {
                  setViewFilter(true);
                }}>
                <Filter size={18} variant='Bold' />
                <span>Filter</span>
              </button>
            </div>
          </div>
          {/* Table */}
          <div className='h-full'>
            <div className='h-[calc(100%-theme(space.36))] overflow-auto w-full pb-20'>
              <table className='overflow-auto w-full align-top text-[#54565B] text-[14px]'>
                <thead className='bg-gray-100 sticky top-0 text-left whitespace-nowrap z-10'>
                  <tr className='child:py-4 child:px-6 child:cursor-default child:align-middle'>
                    <th>S/N</th>
                    <th className=''>Product Name</th>
                    <th>Code</th>
                    <th>Type</th>
                    <th>Sustainable</th>
                    <th>Unit Type</th>
                    <th>Date Created</th>
                    <th>Last Updated</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className='text-[12px]'>
                  {currentPosts.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className='text-left border-b border-gray-200 hover:bg-[#e3f7ee] child:py-5 child:px-6'>
                        <td>
                          <span className='font-medium'>
                            {posts.indexOf(item) + 1}
                          </span>
                        </td>

                        <td>
                          <span className='font-medium '>{item.name}</span>
                        </td>

                        <td>
                          <span className='font-medium '>{item.code}</span>
                        </td>

                        <td>
                          <span className='font-medium '>
                            {item.product_type}
                          </span>
                        </td>

                        <td>
                          <span className='font-medium '>
                            {item.certified === 'True' ? 'Yes' : 'No'}
                          </span>
                        </td>

                        <td>
                          <span className='font-medium '>{item.unit_type}</span>
                        </td>

                        <td className='py-5 px-6  '>
                          <span className='font-medium '>{`${formDate(
                            item.created
                          )}`}</span>
                        </td>

                        <td>
                          <span className='font-medium '>{`${formDate(
                            item.updated
                          )} `}</span>
                        </td>
                        <td className='relative'>
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
          </div>
          {/* Pagination */}
          <div className='absolute bottom-0 left-0 right-0 w-full'>
            <div className='flex justify-between items-center text-gray-400 p-1 pr-6 pl-8 bg-gray-50 m-4 rounded-xl '>
              <span>
                {itemsOffset + 1 > posts.length ? currentPage : itemsOffset + 1}{' '}
                -{' '}
                {postsPerPage + itemsOffset < posts.length
                  ? postsPerPage + itemsOffset
                  : posts?.length}{' '}
                of {posts.length} Entries
              </span>

              <Pagination
                totalPosts={posts.length}
                handlePageChange={handlePageChange}
                currentPage={currentPage}
                perPage={postsPerPage}
              />
            </div>
          </div>
        </div>
      </section>

      <CreateProductModal close={() => setModal(false)} show={modal} />

      <Filtermodal
        filterObj={filterObj}
        setFilterObj={setFilterObj}
        show={viewFilter}
        close={() => setViewFilter(false)}
        product_codes={products.map((el) => el.code)}
      />
    </div>
  );
}

export default Productlist;
