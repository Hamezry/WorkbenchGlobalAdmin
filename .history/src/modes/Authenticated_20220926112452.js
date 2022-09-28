import { useState } from "react"
import { Route, Routes } from "react-router-dom"
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

const Authenticated = () => {

    const [modal, setModal] = useState(false)
    const [viewNotification, setViewNotification] = useState(false)
    const [viewFilter, setViewFilter] = useState(false)
    const [viewAdminModal, setViewAdminModal] = useState(false)

    return (
        <div className='bg-[#FFFFFF] text-[#54565B]'>
            <Navbar setViewNotification={setViewNotification} />

            <div className='flex h-[calc(100vh-90px)]'>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Organisationlist />} />
                    <Route path="/organisation" element={<Organisation />} />
                    <Route path="/products" element={<Products setModal={setModal} />} />
                    <Route path="/productlist" element={<Productlist setViewFilter={setViewFilter} setModal={setModal} />} />
                    <Route path="/countrypage" element={<Countrypage />} />
                    <Route path="/countrylist" element={<Countrylist />} />
                    <Route path="/country" element={<Country setViewAdminModal={setViewAdminModal} />} />
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
