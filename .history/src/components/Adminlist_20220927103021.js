import React, { useEffect, useState } from "react";
import axios from "axios";

function Adminlist() {
  const token = localStorage.getItem("workbench-app-token");
  const [list, setList] = useState();

  useEffect(() => {
    const options = {
      headers: { Authorization: `WB3 ${token}` },
    };

    axios
      .get(
        `https://wb3test.afexnigeria.com/WB3/api/v1/admin/levels/163`,
        options
      )
      .then((res) => {
        setList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="p-3 rounded-3xl w-full bg-[#FFFF] h-[400px] overflow-y-auto">
      <div className="flex justify-between p-3 border-b ">
        <p>Administrative Level</p>
      </div>

      {/*ADMIN TABLE LIST */}
      <div className="px-5 overflow-y-auto mt-4  overflow-x-auto">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-[#F9F9F9] text-[#54565B] text-[14px] text-left">
              <th className="py-3 px-6 ">S/N</th>
              <th className="py-3 px-6 ">States</th>
              <th className="py-3 px-6 ">LGAs</th>
              <th className="py-3 px-6 ">Wards</th>
              <th className="py-3 px-6 ">Action</th>
            </tr>
          </thead>

          <tbody className="text-[#54565B] text-[12px] font-light">
            {list?.data?.map((item, index) => {
              return (
                <tr className=" text-left border-b border-gray-200 hover:bg-[#e3f7ee]">
                  <td className="py-6 px-6">
                    <span className="font-medium">1</span>
                  </td>

                  <td className=" flex mt-2 gap-2 py-6 px-6 w-[190px]">
                    <span className="font-medium ">{item.name}</span>
                  </td>

                  <td className="py-6 px-6">
                    <span className="font-medium ">{item.no_of_lgas}</span>
                  </td>

                  <td className="py-6 px-6">
                    <span className="font-medium ">{item.no_of_wards}</span>
                  </td>

                  <td className="py-6 px-6  ">
                    <span className="font-medium text-cyan-400 ">View Details</span>
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
