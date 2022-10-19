import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { format } from 'date-fns';

import OrganisationlistTile from './components/tile';
import TenantDropdown from './dropdown';

import Pagination from '../../components/Pagination';
import DateModule from '../../components/Datemodule';

import { useTenantsCtx } from '../../contexts';

import filterIcon from '../../Assets/filter.svg';
import ActivateModal from './modal/activate';
import DeactivateModal from './modal/deactivate';

function Organisationlist() {
  const { tenants } = useTenantsCtx();
  const [viewActivate, setViewActivate] = useState(false);
  const [viewDeactivate, setViewDeactivate] = useState(false);
  const [modalData, setModalData] = useState({});
  const navigate = useNavigate();

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
    setPosts(tenants);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [itemsOffset, setItemsOffset] = useState(0);

  const handleSearch = (e) => {
    const { value } = e.target;
    // setItemsOffset(0)
    const res = tenants
      .slice()
      .filter((el) =>
        el.company_name.toLowerCase().includes(value.toLowerCase())
      );
    setPosts(res);

    setItemsOffset(0);
  };

  const handlePageChange = (e) => {
    const newOffset = (e.selected * postsPerPage) % posts.length;
    setItemsOffset(newOffset);
  };

  useEffect(
    () => populate(),
    //eslint-disable-next-line
    [tenants]
  );

  useEffect(() => {
    const endOffset = itemsOffset + postsPerPage;
    setCurrentPosts(posts.slice(itemsOffset, endOffset));
    setCurrentPage(Math.ceil(posts.length / postsPerPage));
  }, [itemsOffset, currentPage, posts, postsPerPage]);

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
          <div className='bg-[#FFFFFF] rounded-3xl w-[100%] py-4 px-8 relative'>
            {/*ORGANISATION LIST HEADING*/}
            <div className='flex justify-between p-3 border-b-[1px] '>
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

                <div className=' flex gap-2 p-3 rounded-2xl text-sm  text-[#C9C8C6] bg-[#F9F9F9] h-[54px relative'>
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
                </div>

                <div className='relative text-[#C9C8C6]'>
                  <input
                    type='text'
                    name=''
                    id=''
                    placeholder='Search by Company Name'
                    className='p-3 rounded-2xl text-sm text-gray-400 border-none outline-none focus:outline-none bg-[#F9F9F9] h-[54px w-[360px]'
                    onChange={handleSearch}
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

            {isDate && <DateModule setIsDate={setIsDate} />}

            {/*TABLE CONTAINER */}
            <div className='px-5 w-full h-auto overflow-x-auto'>
              <table className='min-w-max table-auto'>
                <thead className='sticky'>
                  <tr className='bg-[#F9F9F9] text-[#54565B] text-left  text-[14px]'>
                    <th>
                      <input type='checkbox' className='checkbox' />
                    </th>

                    <th className='py-3 px-4 '>S/N</th>
                    <th className='py-3 px-4 '>Company Name</th>
                    <th className='py-3 px-4 '>Country</th>
                    <th className='py-3 px-4 '>Location</th>
                    <th className='py-3 px-4 '>E-mail</th>
                    <th className='py-3 px-4 '>Phone Number</th>
                    <th className='py-3 px-4 '>CSD Access</th>
                    <th className='py-3 px-4 '>Registered On</th>
                    <th className='py-3 px-4 '>Action</th>
                  </tr>
                </thead>

                <tbody className='text-[#54565B] h-auto overflow-y-auto text-[12px] font-light'>
                  {currentPosts.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className=' text-left  border-b-[1px] border-[#F9FAFB] hover:bg-[#e3f7ee]'
                        onClick={() => navigate(`/tenants/${item.id}`)}>
                        <td onClick={(e) => e.stopPropagation()}>
                          <input type='checkbox' className='checkbox' />
                        </td>

                        <td className='py-4 px-4 mr-10'>
                          <span className='font-medium'>{index + 1}</span>
                        </td>

                        <td className='py-4 px-4 mr-10 text-start '>
                          <Link
                            to={`/tenants/${item.id}`}
                            className='font-medium '>
                            {item.company_name}
                          </Link>
                        </td>

                        <td className=' flex mt-2 gap-2 py-4 px-4 mr-10'>
                          <img
                            src={item.country.country_flag}
                            alt={item.company_name}
                            className='w-[22px] rounded'
                          />
                          <span className='font-medium '>
                            {item.country.name}
                          </span>
                        </td>

                        <td className='py-4 px-4 mr-10 w-[150px]'>
                          <span className='font-medium '>{item.location}</span>
                        </td>
                        <td className='py-4 px-4 w-[100px]'>
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
                        <td
                          className='py-4 px-4 text-center'
                          onClick={(e) => e.stopPropagation()}>
                          {item.is_active === 'True' ? (
                            <div
                              className='flex justify-center cursor-pointer  gap-2 rounded items-center text-[15px] text-white bg-[#e55851] h-[40px] w-full p-4'
                              onClick={() => {
                                setModalData(item);
                                setViewDeactivate(true);
                              }}>
                              <p>De-activate</p>
                            </div>
                          ) : (
                            <div
                              className='flex justify-center cursor-pointer  gap-2 rounded items-center text-[15px] text-white bg-[#38CB89] h-[40px] w-full p-4'
                              onClick={() => {
                                setModalData(item);
                                setViewActivate(true);
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
            <div className='flex justify-between p-2 px-4 mt-4 bg-[#F9F9F9] items-center rounded-2xl'>
              <p>
                {currentPosts?.length > 0 ? itemsOffset + 1 : itemsOffset + 0}-
                {itemsOffset + postsPerPage > posts?.length
                  ? posts?.length
                  : itemsOffset + postsPerPage}
                &nbsp;of {posts?.length} entries
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
      </div>
      {/* Modals */}
      {viewActivate && (
        <ActivateModal
          setViewActivate={setViewActivate}
          modalData={modalData}
        />
      )}
      {viewDeactivate && (
        <DeactivateModal
          setViewDeactivate={setViewDeactivate}
          modalData={modalData}
        />
      )}
    </div>
  );
}

export default Organisationlist;
