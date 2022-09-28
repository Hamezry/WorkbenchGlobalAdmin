import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import filterIcon from "../Assets/filter.svg";
import nigerianFlag from "../Assets/Nigeriaflag.svg";
import manager from "../utils/encryption";

function Organisationlist() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get(`https://wb3test.afexnigeria.com/WB3/api/v1/tenant/list`)
            .then((res) => {
                const response = res.data.data;
                manager.decrypt(response);
                setList(res.data);
                // console.log(res.data)
            })
            .catch((err) => {
                // console.log(err)
            });
    });

    return (
        <div className="w-[85%] flex flex-col bg-[#FFFFFF] gap-14 font-muli h-[calc(100vh-90px)]  overflow-y-auto">

            {/*TENANT STATISTICS*/}
            <div className="w-full flex text-[16px] flex-col bg-[#F9FAFB] mt-[5%] mr-7 rounded-3xl gap-3 p-5">
                <div className="px-8 w-full bg-lime-400">
                    <p>Overview</p>
                </div>
 

                {/*CARDS */}
                <div className="flex p-5 justify-evenly">

                    <div className=" flex flex-col p-5 gap-4 bg-[#FFFFFF] rounded-3xl w-[300px] h-[200px]">
                        <p className=" mb-4  text-[#47494E] text-[16px]">Total Active Tenants</p>
                        <p className="text-[25px]">4,500</p>
                        <p className="text-[14px]">
                            <span>In-active Tenants:</span>4000
                        </p>
                    </div>

                    <div className=" flex flex-col p-5 gap-4 bg-[#FFFFFF] rounded-3xl w-[300px] h-[200px]">
                        <p className=" mb-4  text-[#47494E] text-[16px]">Total Tenants (CSD)</p>
                        <p className="text-[25px]">4,500</p>
                        <p className="text-[14px]">
                            <span>Last Month:</span>3500
                        </p>
                    </div>

                    <div className=" flex flex-col p-5 gap-3 bg-[#FFFFFF] rounded-3xl w-[300px] h-[200px]">
                        <p className=" mb-4  text-[#47494E] text-[16px]">Total Tenants Available</p>
                        <p className="text-[25px]">4,500</p>
                        <p className="text-[14px]">
                            <span>In-active Tenants:</span>4000
                        </p>
                    </div>
                    <div className=" flex flex-col p-5 gap-3 bg-[#FFFFFF] rounded-3xl w-[300px] h-[200px]">
                        <p className=" mb-4  text-[#47494E] text-[14px]">Highest Number of Tenants</p>
                        <p className="text-[25px]">Kenya</p>
                        <p className="text-[14px]">
                            <span>Registered tenants: </span>248
                        </p>
                    </div>

                </div>

            </div>

            <div className=" h-[calc(100vh-5%)] bg-[#F9F9F9] rounded-3xl">


                <div className="flex w-full mt-6 px-14 text-[20px]">
                    <p>Tenants</p>
                </div>


                {/*ORGANISATION CONTAINER*/}
                <div className="w-[100%] rounded-2xl p-10 bg-[#F9F9F9] overflow-y-auto">

                    <div className="bg-[#FFFFFF] rounded-3xl w-[100%] py-4 px-8">
                        {/*ORGANISATION LIST HEADING*/}
                        <div className="flex justify-between p-3 border-b-2">
                            <p className="text-[18px]">Organisation List</p>
                            <div className="border-2 border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89]  bg-white h-[40px] p-4">
                                <img src={filterIcon} alt="rficon" />
                                <button>Filter</button>
                            </div>
                        </div>

                        {/*ORGANISATION LIST*/}
                        <div className="flex justify-between items-center pl-5 gap-5">

                            <div class="dropdown inline-block relative">
                                <button className="bg-[#F9F9F9] text-gray-700 text-[12px] py-1 px-4 rounded-2xl inline-flex gap-8 items-center h-[50px] w-[186px]">
                                    <p className="mr-1">
                                        {" "}
                                        <span>Show</span> 100 Entries{" "}
                                    </p>
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                                    </svg>
                                </button>

                                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                                    <li className="">One</li>
                                    <li className="">Two</li>
                                    <li className="">the magic number</li>
                                </ul>
                            </div>


                            {/*TASK BAR*/}
                            <div className="flex justify-end items-center p-5 gap-5">
                                <p className="text-[12px]">Sort By</p>

                                <div class=" flex gap-2 p-3 rounded-2xl text-sm  text-gray-700 bg-[#F9F9F9] h-[54px">
                                    <p>Date Registered</p>
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                                    </svg>
                                </div>

                                <div className="relative">
                                    <input
                                        type="search"
                                        name=""
                                        id=""
                                        placeholder="Search by Company Name"
                                        class="w-full p-3 rounded-2xl text-sm text-black border-none outline-none focus:outline-none bg-[#F9F9F9] h-[54px w-[360px]"
                                    />
                                    <span className="absolute left-[300px] top-3">
                                        <AiOutlineSearch />
                                    </span>
                                </div>

                                <div className="border-2 border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89]  bg-white h-[40px] p-4">
                                    <button>Select Action</button>
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/*TABLE CONTAINER */}
                        <div className="px-5 w-full h-[500px] overflow-x-auto">
                            <table className="min-w-max table-auto">
                                <thead className="sticky">
                                    <tr class="bg-[#F9F9F9] text-[#54565B] text-left  text-[14px]">
                                        <th class="py-3 px-4 ">S/N</th>
                                        <th class="py-3 px-4 ">Company Name</th>
                                        <th class="py-3 px-4 ">Country</th>
                                        <th class="py-3 px-4 ">Location</th>
                                        <th class="py-3 px-4 ">Status</th>
                                        <th class="py-3 px-4 ">E-mail</th>
                                        <th class="py-3 px-4 ">Phone Number</th>
                                        <th class="py-3 px-4 ">CSD Access</th>
                                        <th class="py-3 px-4 ">Registered On</th>
                                        <th class="py-3 px-4 ">Action</th>
                                    </tr>
                                </thead>

                                <tbody class="text-[#54565B] h-[300px] overflow-y-auto text-[12px] font-light">
                                    {list?.data?.map((item, index) => {
                                        return (
                                            <tr
                                                key={index}
                                                className=" text-left  border-b border-gray-200 hover:bg-[#e3f7ee]"
                                            >
                                                <td class="py-4 px-4 mr-10">
                                                    <Link to="/organisation">
                                                        <span class="font-medium">{index + 1}</span>
                                                    </Link>
                                                </td>

                                                <td class="py-4 px-4 mr-10 text-start ">
                                                    <Link to="/organisation">
                                                        <span class="font-medium ">
                                                            {item.company_name}
                                                        </span>
                                                    </Link>
                                                </td>

                                                <td class=" flex mt-2 gap-2 py-4 px-4 mr-10">
                                                    <img src={nigerianFlag} alt="" />
                                                    <span class="font-medium ">{item.country.name}</span>
                                                </td>

                                                <td class="py-4 px-4 mr-10 w-[150px]">
                                                    <span class="font-medium ">{item.location}</span>
                                                </td>

                                                <td class="py-4 px-4 mr-10">
                                                    <span class="font-medium ">yes</span>
                                                </td>

                                                <td class="py-4 px-4 mr-10">
                                                    <span class="font-medium ">{item.email}</span>
                                                </td>

                                                <td class="py-4 px-4 mr-10  ">
                                                    <span class="font-medium ">{item.phone_number}</span>
                                                </td>

                                                <td class="py-4 px-4">
                                                    <span class="font-medium ">{item.csd}</span>
                                                </td>

                                                <td class="py-4 px-4">
                                                    <span class="font-medium ">{item.created}</span>
                                                </td>

                                                <td class="py-4 px-4 text-center">
                                                    <div className=" bg-[#38CB89] rounded-lg text-[14px] text-white w-[86px] py-2 h-[35px]">
                                                        <p>Activate</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        {/*SLIDER*/}
                        <div className="flex justify-between p-3 mt-4 bg-[#F9F9F9] items-center">
                            <p>1 - 10 of 80 Entries</p>

                            <div className="flex items-center gap-5">
                                <span className="py-2 px-3 text-[#9FA19C] rounded-lg  bg-[#F3F3F3]">
                                    &#60;
                                </span>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>....</span>
                                <span>10</span>
                                <span className="py-2 px-3 text-white rounded-lg  bg-[#38CB89] ">
                                    &#62;
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Organisationlist;
