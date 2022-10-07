import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import DateModule from "./Datemodule";
import filterIcon from "../Assets/filter.svg";
import { useState } from "react";
import { format } from "date-fns";
import Selectmodule from "./Selectmodule";

function Organisationlist({ list, setViewActivate, openModal, setViewDeactivate }) {
    const navigate = useNavigate()
    const [query, setQuery] = useState("");

    const [isDate, setIsDate] = useState(false)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list?.data?.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);



    //DATE FORMAT FUNCTION
    const formDate = (datex) => {
        const date = new Date(datex)
        return `${format(date, "MMM")} ${format(date, "ii")} ${format(date, "Y")}`
    }
    const formTime = (datex) => {
        const date = new Date(datex)
        return `${format(date, 'K')}:${format(date, "mm")} ${format(date, "aaa")}`
    }



    return (

        <div className="w-[82%] flex flex-col bg-[#FFFFFF] gap-14 font-muli h-[calc(100vh-90px)] overflow-y-auto">

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
                        <div className="flex justify-between p-3 border-b-2 ">
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

                                        <span className="text-[#C9C8C6]">Show</span> 100 Entries
                                    </p>
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                                    </svg>
                                </button>

                            </div>


                            {/*TASK BAR*/}
                            <div className="flex justify-end items-center p-5 gap-5">
                                <p className="text-[12px]">Sort By</p>

                                <div class=" flex gap-2 p-3 rounded-2xl text-sm  text-[#C9C8C6] bg-[#F9F9F9] h-[54px">
                                    <p>Date Registered</p>
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        onClick={() => {
                                            setIsDate(!isDate)
                                        }}
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                                    </svg>
                                    {isDate &&
                                        <DateModule />
                                    }

                                </div>

                                <div className="relative text-[#C9C8C6]">
                                    <input
                                        type="search"
                                        name=""
                                        id=""
                                        placeholder="Search by Company Name"
                                        class="w-full p-3 rounded-2xl text-sm text-gray-400 border-none outline-none focus:outline-none bg-[#F9F9F9] h-[54px w-[360px]"
                                        onChange={(e) => setQuery(e.target.value)}
                                    />
                                    <span className="absolute left-[300px] top-3">
                                        <AiOutlineSearch />
                                    </span>
                                </div>
                                <Selectmodule />





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
                                    {currentPosts?.filter((item) =>
                                        item.company_name.toLowerCase().includes(query)
                                    ).map((item, index) => {
                                        return (
                                            <tr

                                                key={index}
                                                className=" text-left  border-b border-gray-200 hover:bg-[#e3f7ee]"
                                            >
                                                <td class="py-4 px-4 mr-10"
                                                    onClick={() => {
                                                        localStorage.setItem("companyName", item.company_name)
                                                        navigate(`/organisation/${item.id}`)

                                                    }}>

                                                    <span class="font-medium">{index + 1}</span>

                                                </td>

                                                <td class="py-4 px-4 mr-10 text-start ">

                                                    <div onClick={() => {

                                                        localStorage.setItem("companyName", item.company_name)
                                                        navigate(`/organisation/${item.id}`)

                                                    }}>
                                                        <span class="font-medium ">
                                                            {item.company_name}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td class=" flex mt-2 gap-2 py-4 px-4 mr-10">
                                                    <img src={item.country.country_flag} alt="" className="w-[22px] rounded"  />
                                                    <span class="font-medium ">{item.country.name}</span>
                                                </td>

                                                <td class="py-4 px-4 mr-10 w-[150px]">
                                                    <span class="font-medium ">{item.location}</span>
                                                </td>

                                                <td class="py-4 px-4 mr-10">
                                                    <span class="font-medium ">{item.is_active === "True" ? "Active" : "Inactive"}</span>
                                                </td>

                                                <td class="py-4 px-4 mr-10">
                                                    <span class="font-medium ">{item.email}</span>
                                                </td>

                                                <td class="py-4 px-4 mr-10  ">
                                                    <span class="font-medium ">{item.phone_number}</span>
                                                </td>

                                                <td class="py-4 px-4">
                                                    <span class="font-medium ">{item.csd_access === "True" ? "Yes" : "No"}</span>
                                                </td>

                                                <td class="py-4 px-4">
                                                    <span class="font-medium ">{`${formDate(item.created)} . ${formTime(item.created)}`}</span>
                                                </td>

                                                <td class="py-4 px-4 text-center">
                                                    {
                                                        item.is_active === "True" ?
                                                            <div className=" bg-[#e55851] cursor-pointer rounded-lg text-[14px] text-white w-[86px] py-2 h-[35px]"
                                                            onClick={() => {
                                                                setViewDeactivate(true);
                                                                openModal(item)
                                                            }}>
                                                                <p>Deactivate</p>
                                                            </div> :
                                                            <div className=" bg-[#38CB89]  cursor-pointer  rounded-lg text-[14px] text-white w-[86px] py-2 h-[35px]"
                                                                onClick={() => {
                                                                    setViewActivate(true);
                                                                    openModal(item)
                                                                }} >
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
        </div >
    );
}

export default Organisationlist;
