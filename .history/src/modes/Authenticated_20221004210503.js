import { Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from "react";
import axios from "axios";
import manager from "../utils/encryption";
import Adminmodal from "../components/Adminmodal"
import Country from "../components/Country"
import Countrylist from "../components/Countrylist"
import Countrypage from "../components/Countrypage"
import Filtermodal from "../components/Filtermodal"
import Navbar from "../components/Navbar"
import Notificationmodal from "../components/Notificationmodal"
import Organisation from "../components/Organisation"
import Organisationlist from "../components/Organisationlist"
import Productlist from "../components/Productlist"
import Productmodal from "../components/Productmodal"
import Products from "../components/Products"
import Sidebar from "../components/Sidebar"
import DateModule from "../components/Datemodule";

const Authenticated = () => {

    const [modal, setModal] = useState(false)
    const [viewNotification, setViewNotification] = useState(false)
    const [viewFilter, setViewFilter] = useState(false)
    const [viewAdminModal, setViewAdminModal] = useState(false)
    const [list, setList] = useState([]);
    const [country, setCountry] = useState([])
    const token = localStorage.getItem('workbench-app-token')

    useEffect(() => {
        const options = {
            headers: { 'Authorization': `WB3 ${token}` }
        };

        axios
            .get(`https://wb3test.afexnigeria.com/WB3/api/v1/tenant/list`)
            .then((res) => {
                const response = res.data.data;
                manager.decrypt(response);
                setList(res.data);
                //console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            });

        axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/countries`, options)
            .then(res => {
                setCountry(res.data)
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    });

    return (
        <div className='bg-[#FFFFFF] text-[#54565B]'>
            <Navbar setViewNotification={setViewNotification} />

            <div className='flex h-[calc(100vh-90px)]'>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<DateModule list={list} setList={setList} />} />
                    <Route path="/organisationlist" element={<Organisationlist list={list} setList={setList} />} />
                    <Route path="/organisation/:id" element={<Organisation list={list} setList={setList} />} />
                    <Route path="/products" element={<Products setModal={setModal} />} />
                    <Route path="/productlist" element={<Productlist setViewFilter={setViewFilter} setModal={setModal} />} />
                    <Route path="/countrypage" element={<Countrypage />} />
                    <Route path="/countrylist" element={<Countrylist country={country} setCountry={setCountry} />} />
                    <Route path="/country" element={<Country setViewAdminModal={setViewAdminModal} country={country} setCountry={setCountry} />} />

                </Routes>

            </div>

            {modal && <Productmodal setModal={setModal} />}
            {viewNotification && <Notificationmodal setViewNotification={setViewNotification} />}
            {viewFilter && <Filtermodal setViewFilter={setViewFilter} />}
            {viewAdminModal && <Adminmodal setViewAdminModal={setViewAdminModal} />}

        </div>
    )
}

export default Authenticated
