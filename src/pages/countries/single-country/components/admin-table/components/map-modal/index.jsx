import React, { useState, useEffect } from "react";

import { Modal, Popover, Skeleton } from "@mantine/core";
import { GoogleMap, useJsApiLoader, Polygon } from "@react-google-maps/api";
import { ArrowDown2, Refresh, LocationTick } from "iconsax-react";
import request from "../../../../../../../utils/axios";
import customNotification from "../../../../../../../utils/notification";

import cancel from "../../../../../../../Assets/cancel.svg";
import check from "../../../../../../../Assets/white-check.svg";

import "./map-modal.css";
// import { showNotification } from "@mantine/notifications";

// import successIcon from "../../../../../../../Assets/successBadge.svg";
const MapModal = ({
  id,
  defaultModalData,
  defaultLocation,
  addLocation,
  setAddlocation,
  lgas,
  settingModal,
  opened,
  setOpened,
  modalData,
  setModalData,
  coordinates,
  lgaOptions,
  isRefreshing,
  setisrefreshing,
  mapLoaded,
  setMapLoaded,
}) => {
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState(null);
  const [popover, setPopover] = useState();
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [locationpopoverOpened, setLocationPopoverOpened] = useState(false);
  const [locationpopoverdropdownOpened, setLocationPopoverDropdownOpened] =
    useState(false);

  const { title, position, data, state_id } = modalData;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const arrowClicked = (id) => {
    if (id === currentlyDisplayed) return true;
    else return false;
  };
  const addingLocation = async () => {
    const { code, lgas, state, name } = addLocation;
    const addLocationFormData = new FormData();
    addLocationFormData.append("name", name);
    addLocationFormData.append("state", state);
    addLocationFormData.append("lgas", lgas);
    addLocationFormData.append("code", code);
    console.log(...addLocationFormData);

    const response = await request({
      method: "post",
      url: `add/location/${id}`,
      data: addLocationFormData,
    });
    console.log(response.data);
    if (response.data.responseCode === "100") {
      settingModal({ refresh: true });
      customNotification({
        heading: "Success!",
        text: "Location added successfully.",
        id: "success",
      });
    } else {
      console.log("here");
      customNotification({
        heading: "Error!",
        text: "Add Location unsuccessful.",
        id: "error",
      });
    }
  };

  useEffect(() => {
    popoverOpened || (locationpopoverOpened && setCurrentlyDisplayed(null));
    !locationpopoverOpened && setLocationPopoverDropdownOpened(false);
    !popoverOpened && setAddlocation(defaultLocation);
    // eslint-disable-next-line
  }, [popoverOpened, locationpopoverOpened]);
  useEffect(() => {
    if (!opened) {
      setAddlocation(defaultLocation);
      setCurrentlyDisplayed(null);
      setLocationPopoverOpened(false);
      setLocationPopoverDropdownOpened(false);
      setPopoverOpened(false);
      setTimeout(() => {
        setModalData(defaultModalData);
        setMapLoaded(false);
      }, 300);
    }
    // eslint-disable-next-line
  }, [opened]);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={`${title ? title : ""}`}
        size='85%'>
        <div className=' border-t border-t-gray-200 mt-6 pt-6 flex w-full h-[75vh] px-6 text-textgrey'>
          {title ? (
            <>
              <div className='w-[45%] maps relative rounded-md overflow-hidden'>
                {isLoaded ? (
                  <>
                    <GoogleMap
                      mapContainerStyle={{
                        width: "100%",
                        height: "100%",
                        // fillColor: "#000",
                        fillOpacity: 0.8,
                      }}
                      center={{
                        lat: parseFloat(
                          coordinates[coordinates.length - 1].lat
                        ),
                        lng: parseFloat(
                          coordinates[coordinates.length - 1].lng
                        ),
                      }}
                      zoom={10}
                      onLoad={(map) => {
                        map.setZoom(11);
                      }}
                      onUnmount={(map) => {}}
                      options={{
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                      }}>
                      {mapLoaded && (
                        <Polygon
                          path={coordinates}
                          key={1}
                          options={{
                            strokeColor: "#d24e01",
                            strokeOpacity: 0.8,
                            strokeWeight: 1,
                            fillColor: "00ffffff",
                            fillOpacity: 0,
                            clickable: false,
                            draggable: false,
                            editable: false,
                            geodesic: false,
                            zIndex: 1,
                            // filter: "grayscale(0%)",
                          }}
                        />
                      )}
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
                              {position.lng < 0 ? "S" : "N"}
                            </p>
                            <p className='text-xs text-afexgreen pt-2'>
                              Longitude
                            </p>
                          </div>

                          <div className=' pl-14'>
                            <p>
                              {position.lat}&nbsp;&#xb0;
                              {position.lat < 0 ? "W" : "E"}
                            </p>
                            <p className='text-xs text-afexgreen pt-2'>
                              Latitude
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className='w-[55%] h-full pl-8 relative '>
                <div className='text-end py-1'>
                  <Popover
                    width={350}
                    position='bottom'
                    shadow='md'
                    zIndex={320}
                    opened={locationpopoverOpened}
                    onChange={setLocationPopoverOpened}
                    data-testid='add-location-popover'>
                    <Popover.Target>
                      <button
                        onClick={() => {
                          setLocationPopoverOpened((s) => !s);
                          // setLgaOptions(lgas[addLocation.state]);
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
                              // setLocationPopoverDropdownOpened(false);
                            }}>
                            <img src={cancel} alt='cancel icon' />
                          </button>
                        </div>
                        <form
                          className='py-4'
                          onSubmit={(e) => {
                            e.preventDefault();
                            setLocationPopoverOpened(false);
                            addingLocation();
                          }}>
                          <div className='pb-7 child:capitalize'>
                            <label className='px-2 pb-3 block'>
                              Location name
                            </label>
                            <input
                              type='text'
                              className='w-full bg-gray-100 py-3 px-2 rounded-xl  outline-none border border-textgrey-lighter focus:border-afexgreen-light'
                              value={addLocation.name}
                              onChange={(e) =>
                                setAddlocation({
                                  ...addLocation,
                                  name: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className='pb-7 child:capitalize relative'>
                            <p className='px-2 pb-3 block'>Select LGA</p>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setLocationPopoverDropdownOpened((s) => !s);
                              }}
                              className='w-full bg-gray-100 py-3 px-2 rounded-xl  outline-none border border-textgrey-lighter focus:border-afexgreen-light flex justify-between items-center'>
                              <span className='text-[#c9c8c6]'>
                                {addLocation.lgas.length === 0
                                  ? "select"
                                  : `${addLocation.lgas.length} selected`}
                              </span>
                              <ArrowDown2
                                size='18'
                                color='#c9c8c6'
                                className={`transition-all duration-150 ${
                                  locationpopoverdropdownOpened
                                    ? "rotate-180"
                                    : "rotate-0"
                                }`}
                              />
                            </button>
                            <div
                              className={`overflow-y-auto max-h-[200%] w-full absolute transition-all duration-400  mt-1 bg-gray-100 py-5 px-2 rounded-2xl  outline-none border border-afexgreen-light   text-textgrey-light ${
                                locationpopoverdropdownOpened
                                  ? "opacity-100 z-10"
                                  : "opacity-0 -z-10"
                              }`}>
                              <ul className='child-hover:bg-afexgreen-lighter child:pl-6 child-hover:cursor-pointer child-hover:text-textgrey'>
                                {lgaOptions?.map((item, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className='py-2 child-hover:border-afexgreen relative'>
                                      <span
                                        className={` inline-flex items-center justify-center w-5 h-5  border border-white rounded-md ${
                                          addLocation.lgas.includes(item.pk)
                                            ? "bg-afexgreen border-afexgreen"
                                            : "bg-white"
                                        }`}>
                                        <img
                                          className={``}
                                          alt='check mark'
                                          src={check}
                                        />
                                        <input
                                          type='checkbox'
                                          id={"lga-" + index}
                                          name={item.name}
                                          value={item.pk}
                                          className='opacity-0 absolute inset-0 hover:cursor-pointer'
                                          onChange={(e) => {
                                            const checked = e.target.checked;
                                            const value = +e.target.value;
                                            const temp = addLocation.lgas;

                                            if (checked) {
                                              !temp.includes(value) &&
                                                temp.push(value);
                                              setAddlocation({
                                                ...addLocation,
                                                lgas: temp,
                                                state: state_id,
                                              });
                                            } else {
                                              const newTemp = temp.filter(
                                                (item) => item !== value
                                              );
                                              setAddlocation({
                                                ...addLocation,
                                                lgas: newTemp,
                                                state: state_id,
                                              });
                                            }
                                          }}
                                        />
                                      </span>

                                      <label
                                        htmlFor={"lga-" + index}
                                        className='inline-block pl-2'>
                                        {item.name}
                                      </label>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
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
                <div className='overflow-hidden h-full '>
                  <div className='overflow-y-scroll mt-6 h-[90%] '>
                    <table className=' table w-full'>
                      <thead className='sticky top-0 z-[310]'>
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
                                        ? "bg-afexgreen rotate-180"
                                        : "bg-bggrey rotate-0"
                                    }`}
                                    onClick={() =>
                                      setCurrentlyDisplayed((s) =>
                                        s === oldIndex ? null : oldIndex
                                      )
                                    }>
                                    <ArrowDown2
                                      size='16'
                                      color={
                                        arrowClicked(oldIndex)
                                          ? "#fff"
                                          : "#54565b"
                                      }
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
                                          className={`relative text-ellipsis max-w-[100px] text-cyan-400 td-popover`}>
                                          <Popover
                                            width={350}
                                            position='bottom'
                                            shadow='md'
                                            opened={
                                              popoverOpened &&
                                              popover === oldIndex
                                            }
                                            onChange={setPopoverOpened}>
                                            <Popover.Target>
                                              <button
                                                onClick={() => {
                                                  const itemlgas =
                                                    item.extras.map(
                                                      (item) => item.lga
                                                    );
                                                  const itemlgasPks = lgas[
                                                    state_id
                                                  ]
                                                    .filter((item) =>
                                                      itemlgas.includes(
                                                        item.name
                                                      )
                                                    )
                                                    .map((item) => item.pk);
                                                  setAddlocation({
                                                    ...addLocation,
                                                    name: item.exchange_location,
                                                    lgas: itemlgasPks,
                                                    state: state_id,
                                                  });
                                                  setPopover(oldIndex);
                                                  setPopoverOpened((s) => !s);
                                                }}
                                                className='capitalize underline'>
                                                {entry.toString()}
                                              </button>
                                            </Popover.Target>
                                            <Popover.Dropdown>
                                              <div className='whitespace-normal text-textgrey popover-box'>
                                                <div className='flex justify-between items-center border-b border-b-textgrey-lighter p-2 py-4  '>
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
                                                    addingLocation();
                                                  }}>
                                                  <div className='pb-7 child:capitalize'>
                                                    <label className='px-2 pb-3 block'>
                                                      Location name
                                                    </label>
                                                    <input
                                                      type='text'
                                                      className='w-full bg-gray-100 py-3 px-2 rounded-xl  outline-none border border-textgrey-lighter focus:border-afexgreen-light'
                                                      value={addLocation.name}
                                                      onChange={(e) =>
                                                        setAddlocation({
                                                          ...addLocation,
                                                          name: e.target.value,
                                                        })
                                                      }
                                                    />
                                                  </div>
                                                  <div className='pb-7 child:capitalize relative'>
                                                    <p className='px-2 pb-3 block'>
                                                      Select LGA
                                                    </p>
                                                    <button
                                                      onClick={(e) => {
                                                        e.preventDefault();
                                                        setLocationPopoverDropdownOpened(
                                                          (s) => !s
                                                        );
                                                      }}
                                                      className='w-full bg-gray-100 py-3 px-2 rounded-xl  outline-none border border-textgrey-lighter focus:border-afexgreen-light flex justify-between items-center'>
                                                      <span className='text-[#c9c8c6]'>
                                                        {addLocation.lgas
                                                          .length === 0
                                                          ? "select"
                                                          : `${addLocation.lgas.length} selected`}
                                                      </span>
                                                      <ArrowDown2
                                                        size='18'
                                                        color='#c9c8c6'
                                                        className={`transition-all duration-150 ${
                                                          locationpopoverdropdownOpened
                                                            ? "rotate-180"
                                                            : "rotate-0"
                                                        }`}
                                                      />
                                                    </button>
                                                    <div
                                                      className={`overflow-y-auto max-h-[200%] w-full absolute transition-all duration-400  mt-1 bg-gray-100 py-5 px-2 rounded-2xl  outline-none border border-afexgreen-light   text-textgrey-light ${
                                                        locationpopoverdropdownOpened
                                                          ? "opacity-100 z-10"
                                                          : "opacity-0 -z-10"
                                                      }`}>
                                                      <ul className='child-hover:bg-afexgreen-lighter child:pl-6 child-hover:cursor-pointer child-hover:text-textgrey'>
                                                        {lgaOptions?.map(
                                                          (item, index) => {
                                                            return (
                                                              <li
                                                                key={index}
                                                                className='py-2 child-hover:border-afexgreen relative'>
                                                                <span
                                                                  className={` inline-flex items-center justify-center w-5 h-5  border border-white rounded-md ${
                                                                    addLocation.lgas.includes(
                                                                      item.pk
                                                                    )
                                                                      ? "bg-afexgreen border-afexgreen"
                                                                      : "bg-white"
                                                                  }`}>
                                                                  <img
                                                                    className={``}
                                                                    alt='check mark'
                                                                    src={check}
                                                                  />
                                                                  <input
                                                                    type='checkbox'
                                                                    id={
                                                                      "lga-" +
                                                                      index
                                                                    }
                                                                    name={
                                                                      item.name
                                                                    }
                                                                    value={
                                                                      item.pk
                                                                    }
                                                                    className='opacity-0 absolute inset-0 hover:cursor-pointer'
                                                                    onChange={(
                                                                      e
                                                                    ) => {
                                                                      const checked =
                                                                        e.target
                                                                          .checked;
                                                                      const value =
                                                                        +e
                                                                          .target
                                                                          .value;
                                                                      const temp =
                                                                        addLocation.lgas;

                                                                      if (
                                                                        checked
                                                                      ) {
                                                                        !temp.includes(
                                                                          value
                                                                        ) &&
                                                                          temp.push(
                                                                            value
                                                                          );
                                                                        setAddlocation(
                                                                          {
                                                                            ...addLocation,
                                                                            lgas: temp,
                                                                          }
                                                                        );
                                                                      } else {
                                                                        const newTemp =
                                                                          temp.filter(
                                                                            (
                                                                              item
                                                                            ) =>
                                                                              item !==
                                                                              value
                                                                          );
                                                                        setAddlocation(
                                                                          {
                                                                            ...addLocation,
                                                                            lgas: newTemp,
                                                                          }
                                                                        );
                                                                      }
                                                                    }}
                                                                  />
                                                                </span>

                                                                <label
                                                                  htmlFor={
                                                                    "lga-" +
                                                                    index
                                                                  }
                                                                  className='inline-block pl-2'>
                                                                  {item.name}
                                                                </label>
                                                              </li>
                                                            );
                                                          }
                                                        )}
                                                      </ul>
                                                    </div>
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
                                      ? " px-[14px] py-[18px]"
                                      : "!p-0 "
                                  }`}>
                                  <div
                                    className={`flex justify-end transition-all duration-400 overflow-hidden ${
                                      arrowClicked(oldIndex)
                                        ? "opacity-100 h-auto"
                                        : "opacity-0 h-0 "
                                    }`}>
                                    <div className=' min-w-[400px] max-w-[70%] '>
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
                                      <div className='text-xs border-t border-t-textgrey-lighter pt-3 flex justify-between '>
                                        <button
                                          className='flex items-center'
                                          onClick={() => {
                                            setisrefreshing(true);
                                            settingModal({ refresh: true });
                                          }}>
                                          <Refresh
                                            size='16'
                                            color='#555555'
                                            className={`${
                                              isRefreshing && "animate-spin"
                                            }`}
                                          />
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
                  </div>{" "}
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
    </>
  );
};

export default MapModal;
