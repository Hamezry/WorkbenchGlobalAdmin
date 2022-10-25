import React, { useEffect, useState } from 'react';

import customNotification from '../../../../../utils/notification';
import request from '../../../../../utils/axios';
import MapModal from './components/map-modal';

import './index.css';

const AdminTable = ({ list, id }) => {
  const defaultModalData = {
    title: null,
    position: {
      lat: '',
      lng: '',
    },
    state_id: 0,
    data: [],
  };
  const defaultLocation = {
    name: '',
    state: 0,
    lgas: [],
  };
  const [lgas, setLgas] = useState({});
  const [lgaOptions, setLgaOptions] = useState([]);
  const [opened, setOpened] = useState(false);
  const [coordinates, setCoordinates] = useState([]);
  const [modalData, setModalData] = useState(defaultModalData);
  const [addLocation, setAddlocation] = useState(defaultLocation);
  const [isRefreshing, setisrefreshing] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [state_id, setStateId] = useState(0);

  const settingModal = ({
    pk = state_id,
    center = coordinates ? coordinates[0] : null,
    refresh = false,
  }) => {
    request
      .get(`admin/levels/${pk}/locations`)
      .then((res) => {
        const temp = [];
        res.data.data.forEach((item) => {
          const latestDate = new Date(
            Math.max(...item.lgas.map((newItem) => Date.parse(newItem.created)))
          );
          const tempExtras = {
            data: [],
            latestDate: latestDate.toDateString(),
          };
          item.lgas.forEach((innerItem) => {
            tempExtras.data.push({
              date: 'Sept 1, 2022',
              lga: innerItem.name,
              wards: innerItem.no_of_wards,
            });
          });

          temp.push({
            exchange_location: item.name,
            lgas: item.no_of_lgas,
            wards: item.no_of_wards,
            action: 'update',
            extras: tempExtras,
            code: item.code,
            pk: item.pk,
          });
        });
        setAddlocation({ ...addLocation, state: pk });
        setLgaOptions(lgas[pk]);
        if (refresh) {
          setModalData({
            ...modalData,
            data: temp,
          });
          setisrefreshing(false);
        } else {
          setModalData({
            title: res.data.message,
            position: {
              lat: (+center.lat).toFixed(2),
              lng: (+center.long).toFixed(2),
            },

            state_id: pk,
            data: temp,
          });
          setTimeout(() => {
            setMapLoaded(true);
          });
        }
      })
      .catch((e) => {
        customNotification({
          heading: 'Oops! Something went wrong',
          id: 'error',
          text: e.message,
        });
        setOpened(false);
      });
  };
  useEffect(() => {
    const fetchLgas = () => {
      request
        .get(`lgas`)
        .then((res) => {
          let temp = {};
          res.data.data.forEach((item) => {
            if (Object.keys(temp).includes(item.state_id.toString())) {
              const array = [
                ...temp[item.state_id],
                { name: item.name, pk: item.pk },
              ];
              temp = { ...temp, [item.state_id]: array };
            } else {
              temp = {
                ...temp,
                [item.state_id]: [{ name: item.name, pk: item.pk }],
              };
            }
          });
          setLgas(temp);
        })
        .catch((e) => {});
    };
    Object.keys(lgas).length === 0 && fetchLgas();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='p-3 rounded-3xl w-full bg-[#FFFF] '>
      <div className='flex justify-between p-3 border-b '>
        <p>Administrative Level</p>
      </div>

      <MapModal
        id={id}
        defaultModalData={defaultModalData}
        defaultLocation={defaultLocation}
        addLocation={addLocation}
        setAddlocation={setAddlocation}
        lgas={lgas}
        settingModal={settingModal}
        opened={opened}
        setOpened={setOpened}
        coordinates={coordinates}
        modalData={modalData}
        setModalData={setModalData}
        lgaOptions={lgaOptions}
        isRefreshing={isRefreshing}
        setisrefreshing={setisrefreshing}
        mapLoaded={mapLoaded}
        setMapLoaded={setMapLoaded}
        // showSuccessBanner={showSuccessBanner}
      />
      <div className='overflow-y-auto h-[430px]'>
        <div className='px-5 overflow-y-auto mt-4 '>
          <table className='w-full  '>
            <thead className='sticky top-00'>
              <tr className='bg-[#F9F9F9] text-[#54565B] text-[14px] text-left'>
                <th className='py-3 px-6 '>S/N</th>
                <th className='py-3 px-6 '>States</th>
                <th className='py-3 px-6 '>LGAs</th>
                <th className='py-3 px-6 '>Wards</th>
                <th className='py-3 px-6 '>Action</th>
              </tr>
            </thead>

            <tbody className='text-[#54565B] text-[12px] font-light'>
              {list.map((item, index) => {
                return (
                  <tr
                    className=' text-left border-b border-[#F9FAFB] hover:bg-[#e3f7ee]'
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
                        className='font-medium text-[#0089C8]  underline '
                        onClick={() => {
                          setOpened(true);
                          setStateId(item.pk);
                          settingModal({
                            pk: item.pk,
                            center: item.coordinates
                              ? item.coordinates[0]
                              : {
                                  lat: '',
                                  lng: '',
                                },
                          });
                          const newCordinates = item.coordinates
                            ? item.coordinates.map((item) => ({
                                lat: parseFloat(item.lat),
                                lng: parseFloat(item.long),
                              }))
                            : item.coordinates;
                          setCoordinates(newCordinates);
                        }}>
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
    </div>
  );
};

export default AdminTable;
