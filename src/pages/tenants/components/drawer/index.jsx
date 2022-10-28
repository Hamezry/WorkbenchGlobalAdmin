import React, { useRef } from "react";
import { ArrowDown2 } from "iconsax-react";
import { Drawer } from "@mantine/core";

import check from "../../../../Assets/white-check.svg";
import filterIcon from "../../../../Assets/filter.svg";
import cancel from "../../../../Assets/cancel.svg";

export default function TenantDrawer({
  filter,
  opened,
  setOpened,
  filterPosts,
  setFilter,
  activeFilter,
  setActiveFilter,
  countriesOptions,
  defaultFilter,
}) {
  const csdBtn = useRef(null);
  const searchBtn = useRef(null);

  const CSDFilter = (value) => {
    if (filter.CSD === value) {
      setFilter({
        ...filter,
        CSD: "",
      });
    } else {
      setFilter({
        ...filter,
        CSD: value,
      });
    }
  };
  return (
    <Drawer
      opened={opened}
      onClose={() => setOpened(false)}
      styles={{
        drawer: {
          boxSizing: "border-box",
        },
      }}
      title={
        <div className='flex pb-4'>
          <img src={filterIcon} alt='filter icon' />
          <span className='text-2xl pl-2'>Filter</span>
        </div>
      }
      padding='xl'
      size='lg'
      position='right'>
      {(filter.country.length > 0 || filter.CSD.trim().length > 0) && (
        <div className=' text-textgrey  px-6 '>
          <ul
            className='w-full flex flex-wrap'
            // onClick={() => setInputFocused(false)}
          >
            {[...filter.country, filter.CSD].map((item, index) => {
              if (item.trim().length > 1) {
                return (
                  <li
                    className='whitespace-nowrap px-2  py-2 flex items-center bg-gray-100 border border-textgrey-light text-textgrey rounded-xl mr-4 mb-4'
                    key={index}>
                    <span className='pr-2 text-sm'>{item}</span>
                    <button
                      className='mt-1'
                      onClick={(e) => {
                        e.preventDefault();
                        const newCountriesFilter = filter.country.filter(
                          (value) => item !== value
                        );
                        const newCSDFilter =
                          item === filter.CSD ? "" : filter.CSD;
                        console.log(newCSDFilter, filter.CSD);
                        setFilter({
                          country: newCountriesFilter,
                          CSD: newCSDFilter,
                        });
                      }}>
                      <img
                        src={cancel}
                        alt='x icon'
                        className='w-4 hover:cursor-pointer'
                      />
                    </button>
                  </li>
                );
              }
              return <></>;
            })}
          </ul>

          <button
            className='text-afexgreen text-sm'
            onClick={() => {
              setFilter(defaultFilter);
            }}>
            Clear all filters
          </button>
        </div>
      )}
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
              activeFilter === "country"
                ? setActiveFilter("")
                : setActiveFilter("country");
            }}>
            <span
              className={` transition-all duration-300 ${
                activeFilter.includes("country")
                  ? "text-afexgreen"
                  : "text-textgrey"
              }`}>
              Country
            </span>
            <ArrowDown2
              size='24'
              color={activeFilter.includes("country") ? "#38CB89" : "#54565B"}
              className={` transition-all duration-300 ${
                activeFilter.includes("country") ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {/* expand */}
          <ul
            className={`transition-all duration-200 child:py-1 child:px-6 child:relative overflow-hidden ${
              activeFilter.includes("country")
                ? "max-h-36 opacity-100 z-10 py-3 "
                : "max-h-0 opacity-0 -z-100 p-0"
            }`}>
            {countriesOptions.map((item, key) => {
              return (
                <li key={key}>
                  <input
                    onFocus={() => {
                      if (!activeFilter.includes("country"))
                        csdBtn.current.focus();
                    }}
                    type='checkbox'
                    name='country'
                    id={item}
                    value={item}
                    className='opacity-0 absolute inset-0 hover:cursor-pointer w-full h-full'
                    onClick={(e) => {
                      const value = e.target.value;
                      let newCountries = filter.country;
                      console.log("here");
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
                    // onClick={(e) => e.preventDefault()}
                  />

                  <span
                    className={` inline-flex items-center justify-center w-5 h-5  border rounded-md  
                            ${
                              filter.country.includes(item)
                                ? "bg-afexgreen border-afexgreen"
                                : "bg-bggrey"
                            }`}>
                    <img className={``} alt='check mark' src={check} />
                  </span>
                  <label htmlFor='yes' className='inline-block pl-2 capitalize'>
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
              activeFilter === "CSD"
                ? setActiveFilter("")
                : setActiveFilter("CSD");
            }}>
            <span
              className={` transition-all duration-300 ${
                activeFilter.includes("CSD")
                  ? "text-afexgreen"
                  : "text-textgrey"
              }`}>
              CSD Access
            </span>
            <ArrowDown2
              size='24'
              color={activeFilter.includes("CSD") ? "#38CB89" : "#54565B"}
              className={` transition-all duration-300 ${
                activeFilter.includes("CSD") ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {/* expand csd */}
          <ul
            className={`transition-all duration-200 child:py-1 child:px-6 child:relative  overflow-hidden ${
              activeFilter.includes("CSD")
                ? "max-h-36 opacity-100 z-10 py-3 "
                : "max-h-0 opacity-0 -z-100 p-0"
            }`}>
            <li>
              <input
                onFocus={() => {
                  if (!activeFilter.includes("CSD")) searchBtn.current.focus();
                }}
                type='radio'
                name='CSD'
                id='yes'
                value='yes'
                checked={filter.CSD === "yes"}
                className='opacity-0 absolute inset-0 hover:cursor-pointer w-full h-full'
                onChange={(e) => {
                  CSDFilter(e.target.value);
                }}
                // onClick={(e) => {
                //   e.stopPropagation();
                //   CSDFilter(e.target.value);
                // }}
              />
              <span
                className={` inline-flex items-center justify-center w-5 h-5  border rounded-md 
                            ${
                              filter.CSD === "yes"
                                ? "bg-afexgreen border-afexgreen"
                                : "bg-bggrey"
                            }`}>
                <img className={``} alt='check mark' src={check} />
              </span>
              <label htmlFor='yes' className='inline-block pl-2'>
                Yes
              </label>
            </li>
            <li>
              <input
                onFocus={() => {
                  if (!activeFilter.includes("CSD")) searchBtn.current.focus();
                }}
                className='opacity-0 absolute inset-0 hover:cursor-pointer w-full h-full'
                type='radio'
                name='CSD'
                id='no'
                value='no'
                checked={filter.CSD === "no"}
                onChange={(e) => {
                  CSDFilter(e.target.value);
                }}
              />{" "}
              <span
                className={` inline-flex items-center justify-center w-5 h-5  border rounded-md  
                            ${
                              filter.CSD === "no"
                                ? "bg-afexgreen border-afexgreen"
                                : "bg-bggrey"
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
  );
}
