import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

import Navigation from '../components/navigation';

import CountryTile from '../components/tile';

import filterIcon from '../../../Assets/filter.svg';
import calenderIcon from '../../../Assets/calendar.svg';
import Pagination from '../../../components/Pagination';

import { useCountriesCtx } from '../../../contexts';

function Countrylist() {
  const { countries } = useCountriesCtx();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const [posts, setPosts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [itemsOffset, setItemsOffset] = useState(0);

  const handleSearch = (e) => {
    const { value } = e.target;
    // setItemsOffset(0)
    const res = countries.filter((el) =>
      el.name.toLowerCase().includes(value.toLowerCase())
    );
    setPosts(res);

    setItemsOffset(0);
  };

  const handlePageChange = (e) => {
    const newOffset = (e.selected * postsPerPage) % posts.length;
    setItemsOffset(newOffset);
  };

  const populate = () => {
    setPosts(countries);
  };

  useEffect(
    () => populate(),
    //eslint-disable-next-line
    [countries]
  );

  useEffect(() => {
    const endOffset = itemsOffset + postsPerPage;
    setCurrentPosts(posts.slice(itemsOffset, endOffset));
    setCurrentPage(Math.ceil(posts.length / postsPerPage));
  }, [itemsOffset, currentPage, posts, postsPerPage]);

  return (
    <div className='w-[82%] flex flex-col gap-14 font-muli h-[calc(100vh-90px)] bg-[#FFFF] overflow-y-auto '>
      {/*CARDS */}
      <CountryTile />

      <div className='bg-[#F9F9F9] flex flex-col gap-8 p-6 h-[calc(100%-3%)] rounded-3xl'>
        <Navigation />

        <div className='w-[100%] h-[calc(100%-10%)] rounded-2xl p-3 bg-[#F9F9F9] overflow-y-auto'>
          <div className='flex flex-col gap-1 bg-[#FFFF] h-[100%] rounded-3xl w-[100%] py-3 px-8'>
            <div className='flex justify-between p-3 border-b-2'>
              <p>Country List</p>
              <div className='border-2 border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89]  bg-white h-[40px] p-4'>
                <img src={filterIcon} alt='funnel' />
                <button>Filter</button>
              </div>
            </div>

            <div className='flex justify-between items-center pl-5 gap-5'>
              <div className=' flex gap-2 p-3 rounded-2xl text-sm text-black bg-[#F9F9F9] h-[54px w-[186px]'>
                <p>
                  {' '}
                  <span>Show </span> 100 Entries{' '}
                </p>
                <img src={calenderIcon} alt='calendar icon' />
              </div>

              <div className='flex justify-end items-center p-5 gap-5'>
                <p className='text-[12px]'>Sort By</p>

                <div className=' flex gap-12 p-3 rounded-2xl text-sm text-black bg-[#F9F9F9] h-[54px'>
                  <p>Date Registered</p>
                  <img src={calenderIcon} alt='calendar icon' />
                </div>

                <div className='relative'>
                  <input
                    type='text'
                    placeholder='Search by Country Name'
                    className='p-3 rounded-2xl text-sm text-black border-none outline-none focus:outline-none bg-[#F9F9F9] h-[54px w-[360px]'
                    onKeyUp={handleSearch}
                  />
                  <span className='absolute left-[300px] top-3'>
                    <AiOutlineSearch />
                  </span>
                </div>

                <div className='border-2 border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89]  bg-white h-[40px] p-4'>
                  <img src={filterIcon} alt='funnel' />
                  <button>Select Action</button>
                </div>
              </div>
            </div>

            {/*TABLE */}

            <div className='px-5 overflow-y-auto overflow-x-auto'>
              <table className='min-w-max w-full text-[14px] table-auto'>
                <thead>
                  <tr className='bg-[#F9F9F9] text-[#54565B] text-left'>
                    <th className='py-3 px-6 '>S/N</th>
                    <th className='py-3 px-6 '>Country Name</th>
                    <th className='py-3 px-6 '>No. of Tenants</th>
                    <th className='py-3 px-6 '>No. of Locations</th>
                    <th className='py-3 px-6 '>No. of Farmers</th>
                    <th className='py-3 px-6 '>Commodities Available</th>
                    <th className='py-3 px-6 '>Action</th>
                  </tr>
                </thead>

                <tbody className='text-[#54565B] font-light'>
                  {currentPosts.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className=' text-left  border-b border-gray-200 py-6 hover:bg-[#e3f7ee]'
                        onClick={() => navigate(`/countries/${item.pk}`)}>
                        <td className='py-4 px-8'>
                          <span className='font-medium'>{index + 1}</span>
                        </td>

                        <td className=' flex mt-2 gap-2 py-4 px-8 w-[190px]'>
                          <Link to={`/countries/${item.pk}`}>
                            <div className='flex gap-3'>
                              <img
                                src={item.country_flag}
                                className='w-[22px] rounded'
                                alt={item.name}
                              />
                              <span className='font-medium '>{item.name}</span>
                            </div>
                          </Link>
                        </td>

                        <td className='py-4 px-8'>
                          <span className='font-medium '>
                            {item.no_of_tenants}
                          </span>
                        </td>

                        <td className='py-4 px-8'>
                          <span className='font-medium '>
                            {item.no_of_locations}
                          </span>
                        </td>

                        <td className='py-4 px-8'>
                          <span className='font-medium '>
                            {item.no_of_farmers}
                          </span>
                        </td>

                        <td className='px-8 '>
                          <div className=' overflow-x-auto overflow-y-auto w-[100px] h-[50px]'>
                            <span className='font-medium '>
                              {item.available_commodities}
                            </span>
                          </div>
                        </td>

                        <td
                          className='py-4 px-8 '
                          onClick={(e) => e.stopPropagation()}>
                          <Link to={`/countries/${item.pk}`}>
                            <span className='font-medium text-cyan-400 '>
                              View Dashboard
                            </span>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className='flex justify-between p-2 px-4 rounded-2xl bg-[#F9F9F9] items-center'>
              {/* {itemsOffset + 1} - {postsPerPage + itemsOffset} of {posts.length}{" "}
              Entries */}
              {currentPosts?.length > 0 ? itemsOffset + 1 : itemsOffset + 0}-
              {itemsOffset + postsPerPage > posts?.length
                ? posts?.length
                : itemsOffset + postsPerPage}
              &nbsp;of {posts?.length} entries
              <Pagination
                totalPosts={posts.length}
                handlePageChange={handlePageChange}
                currentPage={currentPage}
                perPage={postsPerPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countrylist;
