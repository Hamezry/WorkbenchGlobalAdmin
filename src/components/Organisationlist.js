import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import DateModule from './Datemodule';
import filterIcon from '../Assets/filter.svg';
import { format } from 'date-fns';
import TenantDropdown from './Dropdown/TenantDropdown';
import Pagination from './Pagination';
import OrganisationlistTile from './page-tiles/OrganizationlistTile';

function Organisationlist({
  list,
  setViewActivate,
  openModal,
  setViewDeactivate,
}) {
  const [query, setQuery] = useState('');
  const [isDate, setIsDate] = useState(false);


  //DATE FORMAT FUNCTION
  const formDate = (datex) => {
    const date = new Date(datex);
    return `${format(date, 'MMM')} ${format(date, 'ii')} ${format(date, 'Y')}`;
  };
  const formTime = (datex) => {
    const date = new Date(datex);
    return `${format(date, 'K')}:${format(date, 'mm')} ${format(date, 'aaa')}`;
  };

  //PAGINATION FUNCTION
  const [posts, setPosts] = useState([]);

  const populate = () => {
    setPosts(list.data ?? [])
  }
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list?.data?.slice(indexOfFirstPost, indexOfLastPost);


  useEffect(() => {
    populate()

    // eslint-disable-next-line
  }, [list])

  return (
    <div className='w-[82%] flex flex-col bg-[#FFFFFF] gap-14 font-muli h-[calc(100vh-90px)] overflow-y-auto'>
      {/*TENANT STATISTICS*/}

      {/*CARDS */}
      <OrganisationlistTile />

      <div className=' h-[calc(100vh-5%)] bg-[#F9F9F9] rounded-3xl'>
        <div className='flex w-full mt-6 px-14 text-[20px]'>
          <p>Tenants</p>
        </div>

        {/*ORGANISATION CONTAINER*/}
        <div className='w-[100%] rounded-2xl p-10 bg-[#F9F9F9] overflow-y-auto'>
          <div className='bg-[#FFFFFF] rounded-3xl w-[100%] py-4 px-8'>
            {/*ORGANISATION LIST HEADING*/}
            <div className='flex justify-between p-3 border-b-2 '>
              <p className='text-[18px]'>Organisation List</p>
              <div className='border border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89]  bg-white h-[40px] p-4'>
                <img src={filterIcon} alt='rficon' />
                <button>Filter</button>
              </div>
            </div>

            {/*ORGANISATION LIST*/}
            <div className='flex justify-between items-center pl-5 gap-5'>
              <div className='dropdown inline-block relative'>
                <button className='bg-[#F9F9F9] text-gray-700 text-[12px] py-1 px-4 rounded-2xl inline-flex gap-8 items-center h-[50px] w-[186px]'>
                  <p className='mr-1'>
                    <span className='text-[#C9C8C6]'>Show</span> 100 Entries
                  </p>
                  <svg
                    className='fill-current h-4 w-4'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'>
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
                  </svg>
                </button>
              </div>

              {/*TASK BAR*/}
              <div className='flex justify-end items-center p-5 gap-5 '>
                <p className='text-[12px]'>Sort By</p>

                <div className=' flex gap-2 p-3 rounded-2xl text-sm  text-[#C9C8C6] bg-[#F9F9F9] h-[54px'>
                  <p>Date Registered</p>
                  <svg
                    className='fill-current h-4 w-4'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    onClick={() => {
                      setIsDate(!isDate);
                    }}>
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
                  </svg>
                  {isDate && <DateModule />}
                </div>

                <div className='relative text-[#C9C8C6]'>
                  <input
                    type='search'
                    name=''
                    id=''
                    placeholder='Search by Company Name'
                    className='p-3 rounded-2xl text-sm text-gray-400 border-none outline-none focus:outline-none bg-[#F9F9F9] h-[54px w-[360px]'
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <span className='absolute left-[300px] top-3'>
                    <AiOutlineSearch />
                  </span>
                </div>
                <div className='relative'>
                  <TenantDropdown />
                </div>
              </div>
            </div>

            {/*TABLE CONTAINER */}
            <div className='px-5 w-full h-auto overflow-x-auto'>
              <table className='min-w-max table-auto'>
                <thead className='sticky'>
                  <tr className='bg-[#F9F9F9] text-[#54565B] text-left  text-[14px]'>
                    <th>
                      <input
                        type="checkbox"

                        id="remember"
                        className="w-4 h-4 border-slate-200 checked:bg-green-400"
                      />
                    </th>

                    <th className='py-3 px-4 '>S/N</th>
                    <th className='py-3 px-4 '>Company Name</th>
                    <th className='py-3 px-4 '>Country</th>
                    <th className='py-3 px-4 '>Location</th>
                    <th className='py-3 px-4 '>Status</th>
                    <th className='py-3 px-4 '>E-mail</th>
                    <th className='py-3 px-4 '>Phone Number</th>
                    <th className='py-3 px-4 '>CSD Access</th>
                    <th className='py-3 px-4 '>Registered On</th>
                    <th className='py-3 px-4 '>Action</th>
                  </tr>
                </thead>

                <tbody className='text-[#54565B] h-auto overflow-y-auto text-[12px] font-light'>
                  {currentPosts
                    ?.filter((item) =>
                      item.company_name.toLowerCase().includes(query)
                    )
                    .map((item, index) => {
                      return (
                        <tr
                          key={index}
                          className=' text-left  border-b border-gray-200 hover:bg-[#e3f7ee]'>

                          <td>
                            <input
                              type="checkbox"
                              id="remember"
                              className="w-4 h-4 border-slate-200 focus:bg-green-400"
                            />
                          </td>

                          <td
                            className='py-4 px-4 mr-10'
                          >

                            <span className='font-medium'>{index + 1}</span>
                          </td>

                          <td className='py-4 px-4 mr-10 text-start '>

                            <Link to={`/organisation/${item.id}`} className='font-medium '>
                              {item.company_name}
                            </Link>

                          </td>

                          <td className=' flex mt-2 gap-2 py-4 px-4 mr-10'>
                            <img
                              src={item.country.country_flag}
                              alt=''
                              className='w-[22px] rounded'
                            />
                            <span className='font-medium '>
                              {item.country.name}
                            </span>
                          </td>

                          <td className='py-4 px-4 mr-10 w-[150px]'>
                            <span className='font-medium '>
                              {item.location}
                            </span>
                          </td>

                          <td className='py-4 px-4 mr-10'>
                            <span className='font-medium '>
                              {item.is_active === 'True'
                                ? 'Active'
                                : 'Inactive'}
                            </span>
                          </td>

                          <td className='py-4 px-4 mr-10'>
                            <span className='font-medium '>{item.email}</span>
                          </td>

                          <td className='py-4 px-4 mr-10  '>
                            <span className='font-medium '>
                              {item.phone_number}
                            </span>
                          </td>

                          <td className='py-4 px-4'>
                            <span className='font-medium '>
                              {item.csd_access === 'True' ? 'Yes' : 'No'}
                            </span>
                          </td>

                          <td className='py-4 px-4'>
                            <span className='font-medium '>{`${formDate(
                              item.created
                            )} . ${formTime(item.created)}`}</span>
                          </td>

                          <td className='py-4 px-4 text-center'>
                            {item.is_active === 'True' ? (
                              <div
                                className=' bg-[#e55851] cursor-pointer rounded-lg text-[14px] text-white w-[86px] py-2 h-[35px]'
                                onClick={() => {
                                  setViewDeactivate(true);
                                  openModal(item);
                                }}>
                                <p>Deactivate</p>
                              </div>
                            ) : (
                              <div
                                className=' bg-[#38CB89]  cursor-pointer  rounded-lg text-[14px] text-white w-[86px] py-2 h-[35px]'
                                onClick={() => {
                                  setViewActivate(true);
                                  openModal(item);

                                }}>
                                <p>Activate</p>
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            {/*SLIDER*/}
            <div className='flex justify-between p-3 mt-4 bg-[#F9F9F9] items-center'>
              <p>1 - 7 of {posts.length} Entries</p>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                perPage={postsPerPage}
              />

              {/* <div className="flex items-center gap-5">
                                <span className="py-2 px-3 text-[#9FA19C] rounded-lg  bg-[#F3F3F3]">
                                    &#60;
                                </span>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>....</span>
                                <span>10</span>
                                <span className="py-2 px-3 text-white rounded-lg  bg-[#38CB89] ">
                                    &#62;
                                </span>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organisationlist;
