import React from 'react'
import { Link} from "react-router-dom";
import nigerianFlag from "../Assets/Nigeriaflag.svg";

function Table({list,query, navigate}) {
  return (
    <div className="px-5 w-full h-[500px] overflow-x-auto">
    <table className="min-w-max table-auto">
        <thead className="sticky">
            <tr className="bg-[#F9F9F9] text-[#54565B] text-left  text-[14px]">
                <th className="py-3 px-4 ">S/N</th>
                <th className="py-3 px-4 ">Company Name</th>
                <th className="py-3 px-4 ">Country</th>
                <th className="py-3 px-4 ">Location</th>
                <th className="py-3 px-4 ">Status</th>
                <th className="py-3 px-4 ">E-mail</th>
                <th className="py-3 px-4 ">Phone Number</th>
                <th className="py-3 px-4 ">CSD Access</th>
                <th className="py-3 px-4 ">Registered On</th>
                <th className="py-3 px-4 ">Action</th>
            </tr>
        </thead>

        <tbody className="text-[#54565B] h-[300px] overflow-y-auto text-[12px] font-light">
            {list?.data?.filter((item) =>
                item.company_name.toLowerCase().includes(query)
            ).map((item, index) => {
                return (
                    <tr

                        key={index}
                        className=" text-left  border-b border-gray-200 hover:bg-[#e3f7ee]"
                    >
                        <td className="py-4 px-4 mr-10"
                            onClick={() => {
                                navigate(`/organisation/${item.id}`)

                            }}>

                            <span className="font-medium">{index + 1}</span>

                        </td>

                        <td className="py-4 px-4 mr-10 text-start ">

                            <Link to={`/organisation/${item.id}`}>
                                <span className="font-medium ">
                                    {item.company_name}
                                </span>
                            </Link>
                        </td>

                        <td className=" flex mt-2 gap-2 py-4 px-4 mr-10">
                            <img src={nigerianFlag} alt="" />
                            <span className="font-medium ">{item.country.name}</span>
                        </td>

                        <td className="py-4 px-4 mr-10 w-[150px]">
                            <span className="font-medium ">{item.location}</span>
                        </td>

                        <td className="py-4 px-4 mr-10">
                            <span className="font-medium ">{item.is_active === "True" ? "Active" : "Inactive"}</span>
                        </td>

                        <td className="py-4 px-4 mr-10">
                            <span className="font-medium ">{item.email}</span>
                        </td>

                        <td className="py-4 px-4 mr-10  ">
                            <span className="font-medium ">{item.phone_number}</span>
                        </td>

                        <td className="py-4 px-4">
                            <span className="font-medium ">{item.csd_access === "True" ? "Yes" : "No"}</span>
                        </td>

                        <td className="py-4 px-4">
                            <span className="font-medium ">{item.created}</span>
                        </td>

                        <td className="py-4 px-4 text-center">
                            {
                                item.is_active === "True" ?
                                    <div className=" bg-[#e55851] rounded-lg text-[14px] text-white w-[86px] py-2 h-[35px]">
                                        <p>Deactivate</p>
                                    </div> :
                                    <div className=" bg-[#38CB89] rounded-lg text-[14px] text-white w-[86px] py-2 h-[35px]">
                                        <p>Activate</p>
                                    </div>
                            }


                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>
  )
}

export default Table
