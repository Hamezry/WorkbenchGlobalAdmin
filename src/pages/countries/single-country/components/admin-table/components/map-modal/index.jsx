import React, { useEffect, useState } from 'react';
import { Modal, Popover, Skeleton } from '@mantine/core';
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api';
import { ArrowDown2, Refresh, LocationTick } from 'iconsax-react';

import cancel from '../../../../../../../Assets/cancel.svg';

// PLEASE REFACTOR THIS CODE. I DO NOT KNOW WHERE TO DISSECT WITHOUT BREAKING

const MapModal = ({
  opened,
  setOpened,
  setLocationPopoverOpened,
  locationpopoverOpened,
  updateData,
  modalData,
  setUpdateData,
  coordinates,
}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const arrowClicked = (id) => {
    if (id === currentlyDisplayed) return true;
    else return false;
  };

  const { title, position, data } = modalData;

  const [currentlyDisplayed, setCurrentlyDisplayed] = useState(null);
  const [popover, setPopover] = useState();

  const [popoverOpened, setPopoverOpened] = useState(false);

  useEffect(() => {
    if (popoverOpened || locationpopoverOpened) setCurrentlyDisplayed(null);
  }, [popoverOpened, locationpopoverOpened]);
  useEffect(() => {
    if (!opened) {
      setCurrentlyDisplayed(null);
      setLocationPopoverOpened(false);
      setPopoverOpened(false);
      // setTimeout(() => setModalData({ ...modalData, title: null }), 300);
    }
    // eslint-disable-next-line
  }, [opened]);

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title={`${title ? title : ''}`}
      size='85%'>
      <div className=' border-t border-t-gray-200 mt-6 pt-6 flex w-full h-[75vh] px-6 text-textgrey'>
        {title ? (
          <>
            <div className='w-[45%] maps relative rounded-md overflow-hidden'>
              {isLoaded ? (
                <>
                  <GoogleMap
                    mapContainerStyle={{
                      width: '100%',
                      height: '100%',
                      fillColor: '#000',
                      fillOpacity: 0.8,
                    }}
                    center={{
                      lat: parseFloat(coordinates[coordinates.length - 1].lat),
                      lng: parseFloat(coordinates[coordinates.length - 1].lng),
                    }}
                    zoom={10}
                    onLoad={(map) => {
                      map.setZoom(10);
                    }}
                    onUnmount={(map) => {}}
                    options={{
                      streetViewControl: false,
                      mapTypeControl: false,
                      fullscreenControl: false,
                    }}>
                    <Polygon
                      path={coordinates}
                      key={1}
                      onLoad={(polygon) => {
                        console.log('polygon: ', polygon);
                      }}
                      onMouseOver={() => {
                        console.log('polygon====> mouseover');
                      }}
                      onUnmount={() => {
                        console.log('polygon====> unmounts yup yup');
                      }}
                      options={{
                        strokeColor: '#d24e01',
                        strokeOpacity: 0.8,
                        strokeWeight: 1,
                        fillColor: '00ffffff',
                        fillOpacity: 0,
                        clickable: false,
                        draggable: false,
                        editable: false,
                        geodesic: false,
                        zIndex: 1,
                        // filter: "grayscale(0%)",
                      }}
                    />
                    <></>
                  </GoogleMap>
                  <div className='z-20 bg-white absolute top-4 left-4 rounded-3xl py-6 px-10 flex'>
                    <LocationTick size='24' color='#38cb89' variant='Bulk' />
                    <div className='pl-2'>
                      <p className=''> Boundary Coordinates </p>

                      <div className='flex pt-6'>
                        <div className=' pr-14 border-r border-r-gray-200'>
                          <p>
                            {position.lng}&nbsp;&#xb0;
                            {position.lng < 0 ? 'S' : 'N'}
                          </p>
                          <p className='text-xs text-afexgreen pt-2'>
                            Longitude
                          </p>
                        </div>

                        <div className=' pl-14'>
                          <p>
                            {position.lat}&nbsp;&#xb0;
                            {position.lat < 0 ? 'W' : 'E'}
                          </p>
                          <p className='text-xs text-afexgreen pt-2'>
                            Latitude
                          </p>
                        </div>
                      </div>
                    </div>{' '}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className='w-[55%] h-full pl-8 relative overflow-scroll'>
              <div className='text-end py-1'>
                <Popover
                  width={350}
                  position='bottom'
                  shadow='md'
                  opened={locationpopoverOpened}
                  onChange={setLocationPopoverOpened}
                  data-testid='add-location-popover'>
                  <Popover.Target>
                    <button
                      onClick={() => {
                        setLocationPopoverOpened((s) => !s);
                      }}
                      className='px-6 py-2 bg-afexgreen text-white rounded-md text-base'>
                      Add Location
                    </button>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <div className='whitespace-normal text-textgrey text-start'>
                      <div className='flex justify-between items-center border-b border-b-textgrey-lighter p-2 py-4'>
                        <span>Add Location </span>
                        <button
                          className='w-5'
                          onClick={() => {
                            setLocationPopoverOpened(false);
                          }}>
                          <img src={cancel} alt='cancel icon' />
                        </button>
                      </div>
                      <form
                        className='py-4'
                        onSubmit={(e) => {
                          e.preventDefault();
                          setLocationPopoverOpened(false);
                        }}>
                        <div className='pb-7 child:capitalize'>
                          <label className='px-2 pb-3 block'>
                            Location name
                          </label>
                          <input
                            type='text'
                            className='w-full bg-gray-100 py-3 px-2 rounded-xl  outline-none border border-textgrey-lighter focus:border-afexgreen-light'
                            value={updateData.locationName}
                            onChange={(e) =>
                              setUpdateData({
                                ...updateData,
                                locationName: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className='pb-7 child:capitalize'>
                          <label className='px-2 pb-3 block'>Select LGA</label>
                          <select
                            onChange={(e) =>
                              setUpdateData({
                                ...updateData,
                                lga: e.target.value,
                              })
                            }
                            defaultValue={'select'}
                            className='w-full bg-gray-100 py-3 px-2 rounded-xl  outline-none border border-textgrey-lighter focus:border-afexgreen-light'>
                            <option
                              value='select'
                              // selected
                              disabled>
                              Select
                            </option>
                            <option value=''>Select1</option>
                            <option value='2'>Select2</option>
                            <option value=''>Select3</option>
                          </select>
                        </div>
                        <button
                          type='submit'
                          className='bg-afexgreen w-full py-5 text-center rounded-xl text-white mb-3 mt-6'>
                          Update
                        </button>
                      </form>
                    </div>
                  </Popover.Dropdown>
                </Popover>
              </div>
              <div className='overflow-y-scroll pt-6 h-full '>
                <table className=' table w-full'>
                  <thead className='sticky top-0 z-10'>
                    <tr className='table-head bg-bggrey p-6'>
                      <th></th>
                      <th>ID</th>
                      <th>Exchange Location</th>
                      <th>LGAs</th>
                      <th>Wards</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className='transition-all duration-600'>
                    {data.map((item, oldIndex) => {
                      return (
                        <>
                          <tr
                            key={`main${oldIndex}`}
                            className={`child-hover:cursor-pointer  `}>
                            <td className='w-8'>
                              <button
                                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                                  arrowClicked(oldIndex)
                                    ? 'bg-afexgreen rotate-180'
                                    : 'bg-bggrey rotate-0'
                                }`}
                                onClick={() =>
                                  setCurrentlyDisplayed((s) =>
                                    s === oldIndex ? null : oldIndex
                                  )
                                }>
                                <ArrowDown2
                                  size='16'
                                  color='#54565b'
                                  variant='Outline'
                                />
                              </button>
                            </td>
                            <td>{oldIndex + 1} </td>
                            {Object.values(item).map((entry, index) => {
                              if (index !== 4) {
                                if (index === 3) {
                                  return (
                                    <td
                                      key={index}
                                      className={` text-ellipsis overflow-hidden max-w-[100px] text-cyan-400`}>
                                      <Popover
                                        width={350}
                                        position='bottom'
                                        shadow='md'
                                        opened={
                                          popoverOpened && popover === oldIndex
                                        }
                                        onChange={setPopoverOpened}>
                                        <Popover.Target>
                                          <button
                                            onClick={() => {
                                              setPopover(oldIndex);
                                              setPopoverOpened((s) => !s);
                                            }}
                                            className='capitalize underline'>
                                            {entry.toString()}
                                          </button>
                                        </Popover.Target>
                                        <Popover.Dropdown>
                                          <div className='whitespace-normal text-textgrey'>
                                            <div className='flex justify-between items-center border-b border-b-textgrey-lighter p-2 py-4'>
                                              <span>Update Details </span>
                                              <button
                                                className='w-5'
                                                onClick={() => {
                                                  setPopoverOpened(false);
                                                  setPopover(undefined);
                                                }}>
                                                <img
                                                  src={cancel}
                                                  alt='cancel icon'
                                                />
                                              </button>
                                            </div>
                                            <form
                                              className='py-4'
                                              onSubmit={(e) => {
                                                e.preventDefault();
                                                setPopoverOpened(false);
                                              }}>
                                              <div className='pb-7 child:capitalize'>
                                                <label className='px-2 pb-3 block'>
                                                  Location name
                                                </label>
                                                <input
                                                  type='text'
                                                  className='w-full bg-gray-100 py-3 px-2 rounded-xl  outline-none border border-textgrey-lighter focus:border-afexgreen-light'
                                                  value={
                                                    updateData.locationName
                                                  }
                                                  onChange={(e) =>
                                                    setUpdateData({
                                                      ...updateData,
                                                      locationName:
                                                        e.target.value,
                                                    })
                                                  }
                                                />
                                              </div>
                                              <div className='pb-7 child:capitalize'>
                                                <label className='px-2 pb-3 block'>
                                                  Select LGA
                                                </label>
                                                <select
                                                  onChange={(e) =>
                                                    setUpdateData({
                                                      ...updateData,
                                                      lga: e.target.value,
                                                    })
                                                  }
                                                  defaultValue={'select'}
                                                  className='w-full bg-gray-100 py-3 px-2 rounded-xl  outline-none border border-textgrey-lighter focus:border-afexgreen-light'>
                                                  <option
                                                    value='select'
                                                    // selected
                                                    disabled>
                                                    Select
                                                  </option>
                                                  <option value=''>
                                                    Select1
                                                  </option>
                                                  <option value='2'>
                                                    Select2
                                                  </option>
                                                  <option value=''>
                                                    Select3
                                                  </option>
                                                </select>
                                              </div>
                                              <button
                                                type='submit'
                                                className='bg-afexgreen w-full py-5 text-center rounded-xl text-white mb-3 mt-6'>
                                                Update
                                              </button>
                                            </form>
                                          </div>
                                        </Popover.Dropdown>
                                      </Popover>
                                    </td>
                                  );
                                } else {
                                  return (
                                    <td
                                      key={index}
                                      className={` text-ellipsis overflow-hidden max-w-[100px]`}
                                      onClick={() =>
                                        setCurrentlyDisplayed((s) =>
                                          s === oldIndex ? null : oldIndex
                                        )
                                      }>
                                      {entry.toString()}
                                    </td>
                                  );
                                }
                              } else return <></>;
                            })}
                          </tr>
                          {/* EXPAND */}
                          <tr key={`exp${oldIndex}`}>
                            <td
                              colSpan={6}
                              className={`${
                                arrowClicked(oldIndex)
                                  ? ' px-[14px] py-[18px]'
                                  : '!p-0 '
                              }`}>
                              <div
                                className={`flex justify-end transition-all duration-400 overflow-hidden ${
                                  arrowClicked(oldIndex)
                                    ? 'opacity-100 h-auto'
                                    : 'opacity-0 h-0 '
                                }`}>
                                <div className=' min-w-[60%] '>
                                  <table className={` w-full pb-3 `}>
                                    <thead className='sticky top-0 '>
                                      <tr className='table-head bg-bggrey p-6'>
                                        <td>Date Added</td>
                                        <td>LGA</td>
                                        <td>Wards</td>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {item.extras.map((data, newIndex) => {
                                        return (
                                          <tr key={newIndex}>
                                            {Object.values(data).map(
                                              (newEntry, index) => {
                                                return (
                                                  <td
                                                    key={index}
                                                    className={`capitalize text-ellipsis overflow-hidden max-w-[100px]`}>
                                                    {newEntry.toString()}
                                                  </td>
                                                );
                                              }
                                            )}
                                          </tr>
                                        );
                                      })}
                                    </tbody>
                                  </table>
                                  <div className='text-sm border-t border-t-textgrey-lighter pt-3 flex justify-between '>
                                    <button className='flex items-center'>
                                      <Refresh size='16' color='#555555' />
                                      <span className='pl-2'>Refresh</span>
                                    </button>
                                    <div className='text-textgrey-light '>
                                      Last updated: Today @ 2:30pm
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <>
            <Skeleton height='100%' mt={6} width='100%' radius='xl' />
          </>
        )}
      </div>
    </Modal>
  );
};

export default MapModal;
