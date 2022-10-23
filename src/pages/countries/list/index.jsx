import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { Filter } from 'iconsax-react';

import Navigation from '../components/navigation';

import CountryTile from '../components/tile';
import TableSelect from '../../../components/TableSelect';
import Pagination from '../../../components/Pagination';
import { useCountriesCtx } from '../../../contexts';

function Countrylist() {
  const { countries } = useCountriesCtx();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);
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
  };

  const handlePageChange = (e) => {
    const newOffset = (e.selected * postsPerPage) % posts.length;
    setItemsOffset(newOffset);
  };

  /**
   *
   * @param {string} commodites
   * @returns
   */
  const formatAvailableCommodities = (commodites) => {
    return commodites.split(' ').slice(0, 6).join(' ');
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
              <button className='border-2 border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89]  bg-white h-[40px] p-4 hover:bg-afexgreen hover:text-white'>
                <Filter variant='Bold' size={17} />
                <span>Filter</span>
              </button>
            </div>

            <div className='flex justify-between items-center pl-5 gap-5'>
              <TableSelect
                defaultValue={'7 entries'}
                updateValue={setPostsPerPage}
                data={[
                  { value: 7, label: '7 entries' },
                  { value: 20, label: '20 entries' },
                  { value: 100, label: '100 entries' },
                  { value: 500, label: '500 entries' },
                ]}
                className='text-sm'
              />

              <div className='flex justify-end items-center p-5 gap-5 relative'>
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

                <button className='border-2 border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89]  bg-white h-[40px] p-4 hover:bg-afexgreen hover:text-white'>
                  <Filter variant='Bold' size={17} />
                  <span>Select Action</span>
                </button>
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
                                className='w-[22px] h-[22px] object-contain rounded'
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
                          <div className='overflow-hidden w-56'>
                            <span className='font-medium '>
                              {formatAvailableCommodities(
                                item.available_commodities
                              )}
                            </span>
                          </div>
                        </td>

                        <td
                          className='py-4 px-8 '
                          onClick={(e) => e.stopPropagation()}>
                          <Link to={`/countries/${item.pk}`}>
                            <span className='font-medium text-cyan-400 underline text-sm '>
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
