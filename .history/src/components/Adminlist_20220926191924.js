import React from "react";

function Adminlist() {
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

          <tbody className="text-[#54565B] h-[5px] overflow-y-auto text-[12px] font-light">
            <tr className=" text-left border-b border-gray-200 hover:bg-[#e3f7ee]">
              <td className="py-6 px-6">
                <span className="font-medium">1</span>
              </td>

              <td className=" flex mt-2 gap-2 py-6 px-6 w-[190px]">
                <span className="font-medium ">Abia</span>
              </td>

              <td className="py-6 px-6">
                <span className="font-medium ">12</span>
              </td>

              <td className="py-6 px-6">
                <span className="font-medium ">10</span>
              </td>

              <td className="py-6 px-6  ">
                <span className="font-medium text-cyan-400 ">View Details</span>
              </td>
            </tr>

            <tr className=" text-left border-b border-gray-200 hover:bg-[#e3f7ee]">
              <td className="py-6 px-6">
                <span className="font-medium">1</span>
              </td>

              <td className=" flex mt-2 gap-2 py-6 px-6 w-[190px]">
                <span className="font-medium ">Adamawa</span>
              </td>

              <td className="py-6 px-6">
                <span className="font-medium ">12</span>
              </td>

              <td className="py-6 px-6">
                <span className="font-medium ">10</span>
              </td>

              <td className="py-6 px-6  ">
                <span className="font-medium text-cyan-400 ">View Details</span>
              </td>
            </tr>

            <tr className=" text-left border-b border-gray-200 hover:bg-[#e3f7ee]">
              <td className="py-6 px-6">
                <span className="font-medium">1</span>
              </td>

              <td className=" flex mt-2 gap-2 py-6 px-6 w-[190px]">
                <span className="font-medium ">Kaduna</span>
              </td>

              <td className="py-6 px-6">
                <span className="font-medium ">12</span>
              </td>

              <td className="py-6 px-6">
                <span className="font-medium ">10</span>
              </td>

              <td className="py-6 px-6  ">
                <span className="font-medium text-cyan-400 ">View Details</span>
              </td>
            </tr>

            <tr className=" text-left border-b border-gray-200 hover:bg-[#e3f7ee]">
              <td className="py-6 px-6">
                <span className="font-medium">1</span>
              </td>

              <td className=" flex mt-2 gap-2 py-6 px-6 w-[190px]">
                <span className="font-medium ">Sokoto</span>
              </td>

              <td className="py-6 px-6">
                <span className="font-medium ">12</span>
              </td>

              <td className="py-6 px-6">
                <span className="font-medium ">10</span>
              </td>

              <td className="py-6 px-6  ">
                <span className="font-medium text-cyan-400 ">View Details</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminlist;
