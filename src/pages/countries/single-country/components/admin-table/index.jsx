import React, { useEffect, useState } from "react";

import request from "../../../../../utils/axios";
import MapModal from "./components/map-modal";

import "./index.css";

const AdminTable = ({ list, id }) => {
  const defaultModalData = {
    title: null,
    position: {
      lat: 8.6753,
      lng: 9.082,
    },
    state_id: 0,
    data: [],
  };
  const defaultLocation = {
    name: "",
    state: 0,
    lgas: [],
    code: "918",
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

  const settingModal = async ({
    pk = state_id,
    center = coordinates[0],
    refresh = false,
  }) => {
    await request
      .get(`admin/levels/${pk}/locations`)
      .then((res) => {
        const temp = [];
        res.data.data.forEach((item) => {
          const tempExtras = [];
          item.lgas.forEach((innerItem) => {
            tempExtras.push({
              date: "Sept 1, 2022",
              lga: innerItem.name,
              wards: innerItem.no_of_wards,
            });
          });

          temp.push({
            exchange_location: item.name,
            lgas: item.no_of_lgas,
            wards: item.no_of_wards,
            action: "update",
            extras: tempExtras,
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
      .catch((e) => console.log("error getting modal", pk, e));
  };
  useEffect(() => {
    const fetchLgas = async () => {
      await request
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
        .catch((e) => console.log(e));
    };
    Object.keys(lgas).length === 0 && fetchLgas();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='p-3 rounded-3xl w-full bg-[#FFFF] h-[400px] overflow-y-auto'>
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
                      onClick={() => {
                        setOpened(true);
                        setStateId(item.pk);
                        settingModal({
                          pk: item.pk,
                          center: item.coordinates[0],
                        });
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
