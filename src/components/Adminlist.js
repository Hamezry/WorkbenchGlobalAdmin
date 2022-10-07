import React, { useState, useCallback } from "react";

import { Modal } from "@mantine/core";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { ArrowDown2, Refresh } from "iconsax-react";

import "./adminlist.css";
import { useEffect } from "react";

function Adminlist({ list }) {
  const [currentltyDisplayed, setCurrentlyDisplayed] = useState();
  const [opened, setOpened] = useState(true);
  const [modalData, setModalData] = useState({
    title: "Kaduna",
    position: {
      lat: -3.745,
      lng: -38.523,
    },
    data: [
      {
        id: 12,
        exchange_location: "kaduna 1",
        lgas: 10,
        wards: 20,
        action: "update",
        extras: [
          {
            date: "Sept 1, 2022",
            lga: "chikun",
            wards: 2,
          },
          {
            date: "Sept 1, 2022",
            lga: "chikun",
            wards: 2,
          },
          {
            date: "Sept 1, 2022",
            lga: "chikun",
            wards: 2,
          },
        ],
      },
      {
        id: 12,
        exchange_location: "kaduna 1",
        lgas: 10,
        wards: 20,
        action: "update",
        extras: [
          {
            date: "Sept 1, 2022",
            lga: "chikun",
            wards: 2,
          },
          {
            date: "Sept 1, 2022",
            lga: "chikun",
            wards: 2,
          },
          {
            date: "Sept 1, 2022",
            lga: "chikun",
            wards: 2,
          },
        ],
      },
      {
        id: 12,
        exchange_location: "kaduna 1",
        lgas: 10,
        wards: 20,
        action: "update",
        extras: [
          {
            date: "Sept 1, 2022",
            lga: "chikun",
            wards: 2,
          },
          {
            date: "Sept 1, 2022",
            lga: "chikun",
            wards: 2,
          },
          {
            date: "Sept 1, 2022",
            lga: "chikun",
            wards: 2,
          },
        ],
      },
      {
        id: 12,
        exchange_location: "kaduna 1",
        lgas: 10,
        wards: 20,
        action: "update",
        extras: [
          {
            date: "Sept 1, 2022",
            lga: "chikun",
            wards: 2,
          },
          {
            date: "Sept 1, 2022",
            lga: "chikun",
            wards: 2,
          },
          {
            date: "Sept 1, 2022",
            lga: "chikun",
            wards: 2,
          },
        ],
      },
    ],
  });
  const { title, position, data } = modalData;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const [map, setMap] = useState(null);
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(position);
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);
  const arrowClicked = (id) => {
    // console.log(currentltyDisplayed, id);
    if (id === currentltyDisplayed) return true;
    else return false;
  };
  useEffect(() => {
    console.log(currentltyDisplayed);
  }, [currentltyDisplayed]);
  return (
    <div className='p-3 rounded-3xl w-full bg-[#FFFF] h-[400px] overflow-y-auto'>
      <Modal
        className=''
        opened={opened}
        onClose={() => setOpened(false)}
        title={`${title} Details`}>
        <div className='border-t border-t-gray-200 mt-6 pt-6 flex w-full h-[75vh] px-6 text-textgrey'>
          <div className='w-[40%] pr-4'>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{
                  width: "100%",
                  height: "100%",
                }}
                center={position}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}>
                {/* Child components, such as markers, info windows, etc. */}
                <></>
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>
          <div className='w-[60%] pl-4'>
            <div className='text-end py-1'>
              <button className='px-6 py-2 bg-afexgreen text-white rounded-md text-base'>
                Add Location
              </button>
            </div>
            <div className='overflow-y-scroll mt-6'>
              <table className=' table w-full'>
                <thead className='sticky top-0 z-10'>
                  <tr className='table-head bg-bggrey p-6'>
                    <th>ID</th>
                    <th>Exchange Location</th>
                    <th>LGAs</th>
                    <th>Wards</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, oldIndex) => {
                    const height = ` pb-[${
                      ((item.extras.length + 1) * 65) / 16 + 1.5
                    }rem]`;
                    console.log(height);
                    return (
                      <>
                        <tr
                          className={`relative ${
                            arrowClicked(oldIndex) ? height : 0
                          }`}
                          key={oldIndex}>
                          {Object.values(item).map((entry, index) => {
                            if (index === 5) {
                              return (
                                <td
                                  className={` absolute bottom-[-100%] left-0 w-full flex justify-end  transition-all duration-300 ${
                                    arrowClicked(oldIndex) ? "block" : "hidden"
                                  }`}>
                                  <div className='min-w-[60%]'>
                                    <table className='w-full pb-3'>
                                      <thead className='sticky top-0 '>
                                        <tr className='table-head bg-bggrey p-6'>
                                          <td>Date Added</td>
                                          <td>LGA</td>
                                          <td>Wards</td>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {entry.map((data, newIndex) => {
                                          return (
                                            <tr key={newIndex}>
                                              {Object.values(data).map(
                                                (newEntry, index) => {
                                                  return (
                                                    <td
                                                      key={index}
                                                      className={`text-ellipsis overflow-hidden max-w-[100px]`}>
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
                                      <div className='flex items-center'>
                                        <Refresh size='16' color='#555555' />
                                        <span className='pl-2'>Refresh</span>
                                      </div>
                                      <div className='text-textgrey-light '>
                                        Last updated: Today @ 2:30pm
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              );
                            } else
                              return (
                                <td
                                  key={index}
                                  className={`text-ellipsis overflow-hidden max-w-[100px] ${
                                    index === 4 && "text-blue-600"
                                  }`}>
                                  {index === 0 ? (
                                    <div className='flex justify-between'>
                                      <button
                                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                                          arrowClicked(oldIndex)
                                            ? "bg-afexgreen rotate-180"
                                            : "bg-bggrey rotate-0"
                                        }`}
                                        onClick={() =>
                                          setCurrentlyDisplayed(oldIndex)
                                        }>
                                        <ArrowDown2
                                          size='16'
                                          color='#54565b'
                                          variant='Outline'
                                        />
                                      </button>
                                      {entry.toString()}
                                    </div>
                                  ) : (
                                    entry.toString()
                                  )}
                                </td>
                              );
                          })}
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Modal>
      <div className='flex justify-between p-3 border-b '>
        <p>Administrative Level</p>
      </div>

      {/*ADMIN TABLE LIST */}
      <div className='px-5 overflow-y-auto mt-4  overflow-x-auto'>
        <table className='min-w-max w-full table-auto'>
          <thead>
            <tr className='bg-[#F9F9F9] text-[#54565B] text-[14px] text-left'>
              <th className='py-3 px-6 '>S/N</th>
              <th className='py-3 px-6 '>States</th>
              <th className='py-3 px-6 '>LGAs</th>
              <th className='py-3 px-6 '>Wards</th>
              <th className='py-3 px-6 '>Action</th>
            </tr>
          </thead>

          <tbody className='text-[#54565B] text-[12px] font-light'>
            {list?.data?.map((item, index) => {
              return (
                <tr
                  className=' text-left border-b border-gray-200 hover:bg-[#e3f7ee]'
                  key={index}>
                  <td className='py-6 px-6'>
                    <span className='font-medium'>{index + 1}</span>
                  </td>

                  <td className=' flex mt-2 gap-2 py-6 px-6 w-[190px]'>
                    <span className='font-medium '>{item.name}</span>
                  </td>

                  <td className='py-6 px-6'>
                    <span className='font-medium '>{item.no_of_lgas}</span>
                  </td>

                  <td className='py-6 px-6'>
                    <span className='font-medium '>{item.no_of_wards}</span>
                  </td>

                  <td className='py-6 px-6  '>
                    <button
                      className='font-medium text-cyan-400 '
                      onClick={() => setOpened(true)}>
                      View Details
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminlist;
