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
    const token = localStorage.getItem('workbench-app-token')

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const options = {
            headers: { 'Authorization': `WB3 ${token}` }
        };
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/tenant/list`);
            setList(res.data);
            const response = res.data.data;
            manager.decrypt(response);
            setLoading(false);
            
        };

        axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/countries`, options)
        .then(res => {
            setCountry(res.data)
            //console.log(res.data)
        }).catch(err => {
            console.log(err)
        })


        fetchPosts();
    },);

    // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);



    function openModal(item) {
        setModalData(item)
    }

    return (
        <div className='bg-[#FFFFFF] text-[#54565B]'>
            <Navbar setViewNotification={setViewNotification} />

            <div className='flex h-[calc(100vh-90px)]'>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Organisationlist list={currentPosts} setList={setList} setViewActivate={setViewActivate} setViewDeactivate={setViewDeactivate} openModal={openModal} />} />
                    <Route path="/organisation/:id" element={<Organisation list={list} setList={setList} />} />
                    <Route path="/products" element={<Products setModal={setModal} />} />
                    <Route path="/productlist" element={<Productlist setViewFilter={setViewFilter} setModal={setModal} />} />
                    <Route path="/countrypage" element={<Countrypage />} />
                    <Route path="/countrylist" element={<Countrylist country={country} setCountry={setCountry} />} />
                    <Route path="/country/:id" element={<Country country={country} setCountry={setCountry} />} />

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
