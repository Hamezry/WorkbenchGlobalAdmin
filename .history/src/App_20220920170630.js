import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Organisation from "./components/Organisation";
import Organisationlist from "./components/Organisationlist";
import Products from './components/Products';
import Productlist from "./components/Productlist";
import Productmodal from './components/Productmodal';
import Filtermodal from './components/Filtermodal';
import Notificationmodal from './components/Notificationmodal';
import Countrypage from "./components/Countrypage";
import Countrylist from "./components/Countrylist";
import Country from "./components/Country";


function App() {

  const [modal, setModal] = useState(false)
  const [viewNotification, setViewNotification] = useState(false)
  const [viewFilter, setViewFilter] = useState(false)

  return (
    <div className='bg-[#FFFFFF] text-[#54565B]'>
      <BrowserRouter>

        <Navbar setViewNotification={setViewNotification}/>

        <div className='flex h-[calc(100vh-90px)]'>
            <Sidebar/>
            <Routes>
             <Route path="/" element={<Organisationlist />}/>
             <Route path="/organisation" element={<Organisation />}/>
             <Route path="/products" element={<Products setModal={setModal}/>} />
             <Route path="/productlist" element={ <Productlist setViewFilter={setViewFilter} setModal={setModal}/>}/>
             <Route path="/countrypage" element={<Countrypage />}/>
             <Route path="/countrylist" element={<Countrylist />}/>
             <Route path="/country" element={<Country />}/>
            </Routes>
            
        </div>

        {modal && <Productmodal setModal={setModal} />}
        {viewNotification && <Notificationmodal setViewNotification={setViewNotification} />}
        {viewFilter && <Filtermodal setViewFilter={setViewFilter} />}
        
        
      </BrowserRouter>
      

    </div>
  );
}

export default App;

