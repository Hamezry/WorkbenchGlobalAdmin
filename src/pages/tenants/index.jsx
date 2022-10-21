import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { format } from 'date-fns';
import { ArrowDown2 } from 'iconsax-react';
import { Drawer } from '@mantine/core';
import customNotification from '../../utils/notification';

import OrganisationlistTile from './components/tile';
import TenantDropdown from './dropdown';

import Pagination from '../../components/Pagination';
import DateModule from '../../components/Datemodule';
import Select from '../../components/Select';
import ActivateModal from './modal/activate';
import DeactivateModal from './modal/deactivate';

import { useTenantsCtx } from '../../contexts';

import greenFilterIcon from '../../Assets/green-filter.svg';
import check from '../../Assets/white-check.svg';
import filterIcon from '../../Assets/filter.svg';

import './tenant.css';

function Organisationlist() {
  const navigate = useNavigate();
  const { tenants } = useTenantsCtx();
  const [viewActivate, setViewActivate] = useState(false);
  const [viewDeactivate, setViewDeactivate] = useState(false);
  const [modalData, setModalData] = useState({});
  const [countriesOptions, setCountriesOptions] = useState([]);
  const [isDate, setIsDate] = useState(false);
  const [posts, setPosts] = useState([]);
  const [opened, setOpened] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [selected, setSelected] = useState([]);
  const [itemsOffset, setItemsOffset] = useState(0);
  const [activeFilter, setActiveFilter] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filter, setFilter] = useState({
    country: [],
    CSD: '',
  });
  const csdBtn = useRef(null);
  const searchBtn = useRef(null);
  //DATE FORMAT FUNCTION
  const formDate = (datex) => {
    const date = new Date(datex);
    return `${format(date, 'MMM')} ${format(date, 'ii')} ${format(date, 'Y')}`;
  };
  const formTime = (datex) => {
    const date = new Date(datex);
    return `${format(date, 'K')}:${format(date, 'mm')} ${format(date, 'aaa')}`;
  };

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
  const filterPosts = () => {
    let filtered = tenants;
    let byCountry = [];
    let byCSD = [];

    if (filter.country.length > 0) {
      byCountry = tenants.filter((item) =>
        filter.country.includes(item.country.name)
      );
      filtered = byCountry;
    }
    if (filter.CSD.length !== 0) {
      if (filter.CSD === 'yes') {
        byCSD = tenants.filter((item) => item.csd_access === 'True');
      } else if (filter.CSD === 'no') {
        byCSD = tenants.filter((item) => item.csd_access === 'False');
      }
      filtered = byCSD;
    }
    if (byCSD.length > 0 && byCountry.length > 0) {
      filtered = byCSD.filter((item) => byCountry.includes(item));
    }
    setPosts(filtered);
  };
  const CSDFilter = (value) => {
    if (filter.CSD === value) {
      setFilter({
        ...filter,
        CSD: '',
      });
    } else {
      setFilter({
        ...filter,
        CSD: value,
      });
    }
  };
  useEffect(() => {
    const options = tenants.map((item) => item.country.name);
    let uniqueOptions = [...new Set(options)];
    setCountriesOptions(uniqueOptions);
  }, [tenants]);

  useEffect(
    () => {
      if (filter.CSD.length === 0 && filter.country.length === 0)
        setPosts(tenants);
    }, //eslint-disable-next-line
    [filter.CSD.length === 0 && filter.country.length === 0]
  );

  useEffect(() => {
    const endOffset = itemsOffset + postsPerPage;
    setCurrentPosts(posts.slice(itemsOffset, endOffset));
    setCurrentPage(Math.ceil(posts.length / postsPerPage));
  }, [itemsOffset, currentPage, posts, postsPerPage]);

  const dateRangeFilter = () => {
    if (!startDate)
      return customNotification({
        heading: 'Please specify a start date',
        id: 'error',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      });
    if (!endDate)
      return customNotification({
        heading: 'Please specify an end date',
        id: 'error',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      });
    let filtered = tenants
      .filter(
        (item) =>
          new Date(item.created).getTime() >= startDate.getTime() &&
          new Date(item.created).getTime() <= endDate.getTime()
      )
      .sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      );

    return setPosts(filtered);
  };
  return (
    <div className='w-[82%] flex flex-col font-muli bg-[#FFFFFF] h-[calc(100vh-90px)] space-y-14 overflow-y-auto'>
      {/*CARDS */}
      <OrganisationlistTile />

      <section className='bg-[#F9FAFB] p-10 w-full h-full relative rounded-3xl'>
        <div className='rounded-3xl p-6 pr-4 py-10 bg-white h-full relative child:px-4 space-y-3'>
          <div className='flex justify-between border-b-[1px] border-[#F3F3F3] pb-2 '>
            <h2 className='text-xl font-boldw-full block'>Overview</h2>
            <button
              className='border border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89] bg-white p-3'
              onClick={() => setOpened(true)}>
              <img src={greenFilterIcon} alt='rficon' />
              <span>Filter</span>
            </button>

            {/* FILTER DRAWER -> PLEASE REFACTOR */}
            <Drawer
              opened={opened}
              onClose={() => setOpened(false)}
              title={
                <div className='flex'>
                  <img src={filterIcon} alt='filter icon' />
                  <span className='text-2xl pl-2'>Filter</span>
                </div>
              }
              padding='xl'
              size='lg'
              position='right'>
              <form
                className='pt-6 drawer-form'
                onSubmit={(e) => {
                  e.preventDefault();
                  filterPosts();
                  setOpened(false);
                }}>
                <div className=' py-6 border-y border-y-gray-300'>
                  <button
                    className={`flex justify-between w-full px-6`}
                    onClick={(e) => {
                      e.preventDefault();
                      activeFilter.includes('country')
                        ? setActiveFilter([
                            ...activeFilter.filter(
                              (item) => item !== 'country'
                            ),
                          ])
                        : setActiveFilter([...activeFilter, 'country']);
                    }}>
                    <span
                      className={` transition-all duration-300 ${
                        activeFilter.includes('country')
                          ? 'text-afexgreen'
                          : 'text-textgrey'
                      }`}>
                      Country
                    </span>
                    <ArrowDown2
                      size='24'
                      color={
                        activeFilter.includes('country') ? '#38CB89' : '#54565B'
                      }
                      className={` transition-all duration-300 ${
                        activeFilter.includes('country')
                          ? 'rotate-180'
                          : 'rotate-0'
                      }`}
                    />
                  </button>
                  {/* expand */}
                  <ul
                    className={`transition-all duration-200 child:py-1 child:px-6 child:relative overflow-hidden ${
                      activeFilter.includes('country')
                        ? 'max-h-36 opacity-100 z-10 py-3 '
                        : 'max-h-0 opacity-0 -z-100 p-0'
                    }`}>
                    {countriesOptions.map((item, key) => {
                      return (
                        <li key={key}>
                          <input
                            onFocus={() =>
                              !activeFilter.includes('country') &&
                              csdBtn.current.focus()
                            }
                            type='checkbox'
                            name='country'
                            id={item}
                            value={item}
                            className='opacity-0 absolute inset-0 hover:cursor-pointer w-full h-full'
                            onChange={(e) => {
                              const value = e.target.value;
                              let newCountries = filter.country;
                              if (filter.country.includes(value)) {
                                newCountries = filter.country.filter(
                                  (item) => item !== value
                                );
                              } else {
                                newCountries = [...newCountries, value];
                              }
                              setFilter({
                                ...filter,
                                country: newCountries,
                              });
                            }}
                            onClick={(e) => e.preventDefault()}
                          />

                          <span
                            className={` inline-flex items-center justify-center w-5 h-5  border rounded-md  
                            ${
                              filter.country.includes(item)
                                ? 'bg-afexgreen border-afexgreen'
                                : 'bg-bggrey'
                            }`}>
                            <img className={``} alt='check mark' src={check} />
                          </span>
                          <label
                            htmlFor='yes'
                            className='inline-block pl-2 capitalize'>
                            {item}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className=' py-6 border-b border-b-gray-300'>
                  <button
                    ref={csdBtn}
                    className={`flex justify-between w-full px-6`}
                    onClick={(e) => {
                      e.preventDefault();
                      activeFilter.includes('CSD')
                        ? setActiveFilter([
                            ...activeFilter.filter((item) => item !== 'CSD'),
                          ])
                        : setActiveFilter([...activeFilter, 'CSD']);
                    }}>
                    <span
                      className={` transition-all duration-300 ${
                        activeFilter.includes('CSD')
                          ? 'text-afexgreen'
                          : 'text-textgrey'
                      }`}>
                      CSD Access
                    </span>
                    <ArrowDown2
                      size='24'
                      color={
                        activeFilter.includes('CSD') ? '#38CB89' : '#54565B'
                      }
                      className={` transition-all duration-300 ${
                        activeFilter.includes('CSD') ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                  {/* expand csd */}
                  <ul
                    className={`transition-all duration-200 child:py-1 child:px-6 child:relative  overflow-hidden ${
                      activeFilter.includes('CSD')
                        ? 'max-h-36 opacity-100 z-10 py-3 '
                        : 'max-h-0 opacity-0 -z-100 p-0'
                    }`}>
                    <li>
                      <input
                        onFocus={() =>
                          !activeFilter.includes('CSD') &&
                          searchBtn.current.focus()
                        }
                        type='checkbox'
                        name='CSD'
                        id='yes'
                        value='yes'
                        className='opacity-0 absolute inset-0 hover:cursor-pointer w-full h-full'
                        onChange={(e) => {
                          CSDFilter(e.target.value);
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <span
                        className={` inline-flex items-center justify-center w-5 h-5  border rounded-md 
                            ${
                              filter.CSD === 'yes'
                                ? 'bg-afexgreen border-afexgreen'
                                : 'bg-bggrey'
                            }`}>
                        <img className={``} alt='check mark' src={check} />
                      </span>
                      <label htmlFor='yes' className='inline-block pl-2'>
                        Yes
                      </label>
                    </li>
                    <li>
                      <input
                        onFocus={() =>
                          !activeFilter.includes('CSD') &&
                          searchBtn.current.focus()
                        }
                        type='checkbox'
                        name='CSD'
                        id='no'
                        value='no'
                        className='opacity-0 absolute inset-0 hover:cursor-pointer w-full h-full'
                        onChange={(e) => {
                          CSDFilter(e.target.value);
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />{' '}
                      <span
                        className={` inline-flex items-center justify-center w-5 h-5  border rounded-md  
                            ${
                              filter.CSD === 'no'
                                ? 'bg-afexgreen border-afexgreen'
                                : 'bg-bggrey'
                            }`}>
                        <img className={``} alt='check mark' src={check} />
                      </span>
                      <label htmlFor='no' className='inline-block pl-2'>
                        No
                      </label>
                    </li>
                  </ul>
                </div>

                <div className='text-center pt-8'>
                  <button
                    ref={searchBtn}
                    type='submit'
                    className='bg-afexgreen px-5 py-4 text-center rounded-2xl text-white mb-3 mt-6'>
                    Search
                  </button>
                </div>
              </form>
            </Drawer>
          </div>

          {/* Table Controls */}
          <div className='flex justify-between items-center gap-5 relative'>
            <div className='flex items-start gap-4 align-middle'>
              <div className=' flex flex-1 h-full text-left self-start'>
                <Select
                  defaultValue={postsPerPage}
                  updateValue={setPostsPerPage}
                  data={[
                    { value: 7, label: '7' },
                    { value: 20, label: '20' },
                    { value: 100, label: '100' },
                    { value: 500, label: '500' },
                  ]}
                  className='text-sm'
                />
              </div>
            </div>
            <div className='flex flex-1 justify-end items-center gap-5 relative'>
              <p className='text-[12px]'>Sort By</p>
              <button
                className='flex items-center gap-2 p-3 rounded-2xl text-sm  text-[#C9C8C6] bg-[#F9F9F9] h-full'
                onClick={() => {
                  setIsDate(!isDate);
                }}>
                <p className='whitespace-nowrap'>Date Registered</p>
                <svg
                  className={`transition-all duration-200 fill-current h-4 w-4 ${
                    isDate ? 'rotate-180' : 'rotate-0'
                  }`}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'>
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </button>

              {isDate && (
                <DateModule
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                  filterFunc={dateRangeFilter}
                  close={() => setIsDate(false)}
                />
              )}

              <div className='relative text-[#C9C8C6]'>
                <input
                  type='text'
                  name=''
                  id=''
                  placeholder='Search by Company Name'
                  className='p-3 rounded-xl text-sm text-gray-400 border-none outline-none focus:outline-none bg-[#F9F9F9] h-full w-64'
                  onChange={handleSearch}
                />
                <span className='absolute left-[300px] top-3'>
                  <AiOutlineSearch />
                </span>
              </div>

              <div className='relative tenant-popover'>
                <TenantDropdown />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className='h-full'>
            <div className='h-[calc(100%-theme(space.36))] overflow-auto w-full pb-20'>
              <table className='overflow-auto w-full align-top text-[#54565B] text-[14px]'>
                <thead className='bg-gray-100 sticky top-0 text-left whitespace-nowrap z-5'>
                  <tr className='child:py-4 child:px-6 child:cursor-default child:align-middle'>
                    <th>
                      <input
                        type='checkbox'
                        className='checkbox white'
                        id='remember'
                        checked={
                          selected.length === currentPosts.length &&
                          currentPosts.length > 0
                        }
                        // className='w-4 h-4 border-slate-200 checked:bg-green-400'
                        onChange={(e) => {
                          const currentlySelected = currentPosts.map(
                            (item) => item.id
                          );
                          if (selected.length !== currentPosts.length) {
                            setSelected(currentlySelected);
                          } else {
                            setSelected([]);
                          }
                        }}
                      />
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
                <tbody className='text-[12px]'>
                  {currentPosts.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className=' text-left child:py-4 child:px-6  border-b-[1px] border-[#F9FAFB] hover:bg-[#e3f7ee]'
                        onClick={() => navigate(`/tenants/${item.id}`)}>
                        <td onClick={(e) => e.stopPropagation()}>
                          <input
                            type='checkbox'
                            id='remember'
                            className='checkbox'
                            value={item.id}
                            checked={selected.includes(item.id)}
                            // className='w-4 h-4 border-slate-200 focus:bg-green-400'
                            onChange={(e) => {
                              const value = e.target.value;
                              if (selected.includes(value)) {
                                const newSelected = selected.filter(
                                  (item) => item !== value
                                );
                                setSelected(newSelected);
                              } else {
                                setSelected((prev) => [...prev, value]);
                              }
                            }}
                          />
                        </td>

                        <td className='py-4 px-4 mr-10'>
                          <span className='font-medium'>
                            {index + 1 + itemsOffset}
                          </span>
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
                          <span className='font-medium whitespace-nowrap '>{`${formDate(
                            item.created
                          )} . ${formTime(item.created)}`}</span>
                        </td>
                        <td
                          className='py-4 px-4 text-center'
                          onClick={(e) => e.stopPropagation()}>
                          {item.is_active === 'True' ? (
                            <button
                              className='flex  whitespace-nowrap justify-center cursor-pointer  gap-2 rounded items-center text-[15px] text-white bg-[#e55851] h-[40px] w-full p-4'
                              onClick={() => {
                                setModalData(item);
                                setViewDeactivate(true);
                              }}>
                              De-activate
                            </button>
                          ) : (
                            <button
                              className='flex whitespace-nowrap justify-center cursor-pointer  gap-2 rounded items-center text-[15px] text-white bg-[#38CB89] h-[40px] w-full p-4'
                              onClick={() => {
                                setModalData(item);
                                setViewActivate(true);
                              }}>
                              Activate
                            </button>
                          )}
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
      </section>

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
