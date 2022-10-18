import React, { useState } from 'react';

import MapModal from './components/map-modal';

import axios from '../../../../../utils/axios';

import './index.css';

// Please refactor this
const AdminTable = ({ list }) => {
  const [opened, setOpened] = useState(false);

  const [locationpopoverOpened, setLocationPopoverOpened] = useState(false);
  const [coordinates, setCoordinates] = useState([]);

  const [updateData, setUpdateData] = useState({
    locationName: '',
    lga: '',
  });

  const [modalData, setModalData] = useState({
    title: null,
    position: {
      lat: 8.6753,
      lng: 9.082,
    },
    data: [
      {
        exchange_location: 'kaduna 1',
        lgas: 10,
        wards: 20,
        action: 'update',
        extras: [
          {
            date: 'Sept 1, 2022',
            lga: 'chikun',
            wards: 2,
          },
          {
            date: 'Sept 1, 2022',
            lga: 'chikun',
            wards: 2,
          },
          {
            date: 'Sept 1, 2022',
            lga: 'chikun',
            wards: 2,
          },
        ],
      },
      {
        exchange_location: 'kaduna 1',
        lgas: 10,
        wards: 20,
        action: 'update',
        extras: [
          {
            date: 'Sept 1, 2022',
            lga: 'chikun',
            wards: 2,
          },
          {
            date: 'Sept 1, 2022',
            lga: 'chikun',
            wards: 2,
          },
          {
            date: 'Sept 1, 2022',
            lga: 'chikun',
            wards: 2,
          },
        ],
      },
      {
        exchange_location: 'kaduna 1',
        lgas: 10,
        wards: 20,
        action: 'update',
        extras: [
          {
            date: 'Sept 1, 2022',
            lga: 'chikun',
            wards: 2,
          },
          {
            date: 'Sept 1, 2022',
            lga: 'chikun',
            wards: 2,
          },
          {
            date: 'Sept 1, 2022',
            lga: 'chikun',
            wards: 2,
          },
        ],
      },
      {
        exchange_location: 'kaduna 1',
        lgas: 10,
        wards: 20,
        action: 'update',
        extras: [
          {
            date: 'Sept 1, 2022',
            lga: 'chikun',
            wards: 2,
          },
          {
            date: 'Sept 1, 2022',
            lga: 'chikun',
            wards: 2,
          },
          {
            date: 'Sept 1, 2022',
            lga: 'chikun',
            wards: 2,
          },
        ],
      },
    ],
  });

  const settingModal = async (pk, center) => {
    await axios
      .get(`admin/levels/${pk}/locations`)
      .then((res) => {
        const temp = [];
        res.data.data.forEach((item) => {
          const tempExtras = [];
          item.lgas.forEach((innerItem) => {
            tempExtras.push({
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
          });
        });
        setModalData({
          title: res.data.message,
          position: {
            lat: (+center.lat).toFixed(2),
            lng: (+center.long).toFixed(2),
          },
          data: temp,
        });
      })
      .catch((e) => console.log('error getting modal', pk, e));
  };

  return (
    <div className='p-3 rounded-3xl w-full bg-[#FFFF] h-[400px] overflow-y-auto'>
      <div className='flex justify-between p-3 border-b '>
        <p>Administrative Level</p>
      </div>

      <MapModal
        opened={opened}
        setOpened={setOpened}
        modalData={modalData}
        locationpopoverOpened={locationpopoverOpened}
        setLocationPopoverOpened={setLocationPopoverOpened}
        updateData={updateData}
        setUpdateData={setUpdateData}
        coordinates={coordinates}
      />

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
                      className='font-medium text-cyan-400 '
                      onClick={() => {
                        setOpened(true);
                        settingModal(item.pk, item.coordinates[0]);
                        const newCordinates = item.coordinates.map((item) => ({
                          lat: parseFloat(item.lat),
                          lng: parseFloat(item.long),
                        }));
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
  );
};

export default AdminTable;
