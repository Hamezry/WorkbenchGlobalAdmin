import {useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import filterIcon from "../Assets/filter.svg";
import { useState } from "react";
import Table from "./Table";

function Organisationlist({ list, setList }) {
    const navigate = useNavigate()
    const [query, setQuery] = useState("");

const [posts, setPosts] = useState([])
const [loading, setLoading] = useState(false)
const [currentPage, setCurrentpage] = useState(1)
const [postsPerPage, setPostsPerPage] = useState(10)
    return (

        <div className="w-[84%] flex flex-col bg-[#FFFFFF] gap-14 font-muli h-[calc(100vh-90px)] overflow-y-auto">

            {/*TENANT STATISTICS*/}
            <div className="w-full flex text-[16px] flex-col bg-[#F9FAFB] mt-[3%] rounded-3xl gap-3 p-3">
                <div className="px-8 py-2 w-full ml-7">
                    <p>Overview</p>
                </div>


                {/*CARDS */}
                <div className="flex p-5 justify-evenly">

                    <div className=" flex flex-col p-5 gap-4 bg-[#FFFFFF] rounded-3xl w-[300px] h-[180px]">
                        <p className=" mb-4 text-[#47494E] text-[16px]">Total Active Tenants</p>
                        <p className="text-[25px]">4,500</p>
                        <p className="text-[14px]">
                            <span>In-active Tenants:</span>4000
                        </p>
                    </div>

                    <div className=" flex flex-col p-5 gap-4 bg-[#FFFFFF] rounded-3xl w-[300px] h-[180px]">
                        <p className=" mb-4  text-[#47494E] text-[16px]">Total Tenants (CSD)</p>
                        <p className="text-[25px]">4,500</p>
                        <p className="text-[14px]">
                            <span>Last Month:</span>3500
                        </p>
                    </div>

                    <div className=" flex flex-col p-5 gap-3 bg-[#FFFFFF] rounded-3xl w-[300px] h-[180px]">
                        <p className=" mb-4  text-[#47494E] text-[16px]">Total Tenants Available</p>
                        <p className="text-[25px]">4,500</p>
                        <p className="text-[14px]">
                            <span>In-active Tenants:</span>4000
                        </p>
                    </div>
                    <div className=" flex flex-col p-5 gap-3 bg-[#FFFFFF] rounded-3xl w-[300px] h-[180px]">
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
                                        onChange={(e) => setQuery(e.target.value)}
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
                        <Table navigate = {navigate} query={query}/>

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
