import React from "react";

function Adminlist() {
  return (
    <div className="p-3 rounded-3xl w-full bg-[#FFFF]">
      <div className="flex justify-between p-3 border-b ">
        <p>Administrative Level</p>
      </div>

      {/*ADMIN TABLE LIST */}
      <div className="px-5 overflow-y-auto h-[65%] overflow-x-auto">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr class="bg-[#F9F9F9] text-[#54565B] text-[14px] text-left">
              <th class="py-3 px-6 ">S/N</th>
              <th class="py-3 px-6 ">States</th>
              <th class="py-3 px-6 ">LGAs</th>
              <th class="py-3 px-6 ">Wards</th>
              <th class="py-3 px-6 ">Action</th>
            </tr>
          </thead>

          <tbody class="text-[#54565B] text-[12px] font-light">
            <tr class=" text-left border-b border-gray-200 hover:bg-[#e3f7ee]">
              <td class="py-6 px-6">
                <span class="font-medium">1</span>
              </td>

              <td class=" flex mt-2 gap-2 py-6 px-6 w-[190px]">
                <span class="font-medium ">Abia</span>
              </td>

              <td class="py-6 px-6">
                <span class="font-medium ">12</span>
              </td>

              <td class="py-6 px-6">
                <span class="font-medium ">10</span>
              </td>

              <td class="py-6 px-6  ">
                <span class="font-medium text-cyan-400 ">View Details</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminlist;
