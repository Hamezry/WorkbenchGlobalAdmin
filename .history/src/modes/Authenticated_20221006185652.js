import { Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Adminmodal from "../modal/country/Adminmodal"
import Country from "../components/Country"
import Countrylist from "../components/Countrylist"
import Countrypage from "../components/Countrypage"
import Filtermodal from "../modal/Products/Filtermodal"
import Navbar from "../components/Navbar"
import Notificationmodal from "../modal/Navbar/Notificationmodal"
import Organisation from "../components/Organisation"
import Organisationlist from "../components/Organisationlist"
import Productlist from "../components/Productlist"
import Productmodal from "../modal/Products/Productmodal"
import Products from "../components/Products"
import Sidebar from "../components/Sidebar"
import Activatemodal from "../modal/Tenants/Activatemodal";
import Deactivatemodal from "../modal/Tenants/Deactivatemodal";
import Pagination from "../components/Pagination";

const Authenticated = () => {

    const [modal, setModal] = useState(false)
    const [viewNotification, setViewNotification] = useState(false)
    const [viewFilter, setViewFilter] = useState(false)
    const [viewAdminModal, setViewAdminModal] = useState(false)
    const [viewActivate, setViewActivate] = useState(false)
    const [viewDeactivate, setViewDeactivate] = useState(false)
    const [list, setList] = useState([]);
    const [country, setCountry] = useState([])
    const [modalData, setModalData] = useState({})
    const [page , setPage] = useState(1)
    const token = localStorage.getItem('workbench-app-token')

    const handlePageChange = (num) => {
        setPage(num)
    
      }
      

    useEffect(() => {
        const options = {
            headers: { 'Authorization': `WB3 ${token}` }
        };

        axios
            .get(`https://wb3test.afexnigeria.com/WB3/api/v1/tenant/global/list?page_size=7&page=${page}&company_name=Af`, options)
            .then((res) => {
                setList(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            });

        axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/countries`, options)
            .then(res => {
                setCountry(res.data)
                //console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    });

    function openModal(item) {
        setModalData(item)
    }

    return (
        <div className='bg-[#FFFFFF] text-[#54565B]'>
            <Navbar setViewNotification={setViewNotification} />

            <div className='flex h-[calc(100vh-90px)]'>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Organisationlist list={list} setList={setList} setViewActivate={setViewActivate} setViewDeactivate={setViewDeactivate} openModal={openModal} handlePageChange={handlePageChange} page={page} />} />
                    <Route path="/organisation/:id" element={<Organisation list={list} setList={setList} />} />
                    <Route path="/products" element={<Products setModal={setModal} />} />
                    <Route path="/productlist" element={<Productlist setViewFilter={setViewFilter} setModal={setModal} />} />
                    <Route path="/countrypage" element={<Countrypage />} />
                    <Route path="/countrylist" element={<Countrylist country={country} setCountry={setCountry} />} />
                    <Route path="/single_country/:id" element={<Country country={country} setCountry={setCountry} />} />

                </Routes>

            </div>

            {modal && <Productmodal setModal={setModal} />}
            {viewNotification && <Notificationmodal setViewNotification={setViewNotification} />}
            {viewFilter && <Filtermodal setViewFilter={setViewFilter} />}
            {viewAdminModal && <Adminmodal setViewAdminModal={setViewAdminModal} />}
            {viewActivate && <Activatemodal modalData={modalData} setViewActivate={setViewActivate} openModal={openModal} />}
            {viewDeactivate && <Deactivatemodal modalData={modalData} setViewDeactivate={setViewDeactivate} openModal={openModal} />}


        </div>
    )
}

export default Authenticated
