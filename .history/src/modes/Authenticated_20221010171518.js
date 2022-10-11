import { Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from "react";
import axios from "axios";
import manager from "../utils/encryption";
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
import DeactivateProductmodal from '../modal/Products/DeactivateProductmodal'

const Authenticated = () => {
    //Modal states
    const [modal, setModal] = useState(false)
    const [viewNotification, setViewNotification] = useState(false)
    const [viewFilter, setViewFilter] = useState(false)
    const [viewAdminModal, setViewAdminModal] = useState(false)
    const [viewActivate, setViewActivate] = useState(false)
    const [viewDeactivate, setViewDeactivate] = useState(false)
    const [deactivateProduct, setDeactivateProduct] = useState(false)

    //API states
    const [list, setList] = useState([]);
    const [plist, setPlist] = useState([]);
    const [country, setCountry] = useState([])

    const [productsLoaded, setProductsLoaded] = useState(false)
    const [modalData, setModalData] = useState({})

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
                console.log(res.data?.summary)
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
                    <Route path="/" element={<Organisationlist list={list} setList={setList} setViewActivate={setViewActivate} setViewDeactivate={setViewDeactivate} openModal={openModal} />} />
                    <Route path="/organisation/:id" element={<Organisation list={list} setList={setList} />} />
                    <Route path="/products" element={<Products setList={setPlist} productsLoaded={productsLoaded} setProductsLoaded={setProductsLoaded} setModal={setModal} openModal={openModal} />} />
                    <Route path="/productlist" element={<Productlist list={plist} setViewFilter={setViewFilter} setProductsLoaded={setProductsLoaded} productsLoaded={productsLoaded} setModal={setModal} setDeactivateProduct={setDeactivateProduct} />} />
                    <Route path="/countrypage" element={<Countrypage />} />
                    <Route path="/countrylist" element={<Countrylist country={country} setCountry={setCountry} />} />
                    <Route path="/country/:id" element={<Country setViewAdminModal={setViewAdminModal} country={country} setCountry={setCountry} />} />

                </Routes>

            </div>

            {modal && <Productmodal setModal={setModal} />}
            {viewNotification && <Notificationmodal setViewNotification={setViewNotification} />}
            {viewFilter && <Filtermodal setViewFilter={setViewFilter} />}
            {viewAdminModal && <Adminmodal setViewAdminModal={setViewAdminModal} />}
            {viewActivate && <Activatemodal modalData={modalData} setViewActivate={setViewActivate} openModal={openModal} />}
            {viewDeactivate && <Deactivatemodal modalData={modalData} setViewDeactivate={setViewDeactivate} openModal={openModal} />}
            {deactivateProduct && <DeactivateProductmodal setDeactivateProduct={setDeactivateProduct} />}



        </div>
    )
}

export default Authenticated
