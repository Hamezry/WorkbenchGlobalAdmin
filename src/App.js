import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import { useAuth } from './contexts';

import './App.css';

// Refactored Routes
import {
  CountriesHeatMap,
  CountriesList,
  Tenants,
  Products,
  Login,
  SingleCountry,
  SingleTenant,
} from './pages';

function App() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const token = localStorage.getItem('workbench-app-token');

  useEffect(() => {
    if (!token || !isAuthenticated) return navigate('/login');

    // eslint-disable-next-line
  }, [token, isAuthenticated]);

  return (
    <div className='bg-[#FFFFFF] text-[#54565B]'>
      <Navbar />

      <div className='flex h-[calc(100vh-90px)]'>
        <Sidebar />
        <Routes>
          <Route exact path='/'>
            <Route index element={<Tenants />} />
            <Route path='tenants'>
              <Route index element={<Tenants />} />
              <Route path=':id' element={<SingleTenant />} />
            </Route>

            <Route path='countries'>
              <Route index exact element={<CountriesHeatMap />} />
              <Route path='list' element={<CountriesList />} />
              <Route path=':id' element={<SingleCountry />} />
            </Route>
            <Route path='products'>
              <Route index element={<Products />} />
              {/* <Route path=":id" /> */}
            </Route>

            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
