import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const auth_status = localStorage.getItem(
    'global-admin-workbench-auth-status'
  );
  const [isAuthenticated, setAuthenticated] = useState(
    auth_status ? true : false
  );

  function signin(token) {
    localStorage.setItem('global-admin-workbench-app-token', token);
    setAuthenticated(true);
    localStorage.setItem('global-admin-workbench-auth-status', 'authenticated');
    navigate('/');
  }

  function signout() {
    localStorage.removeItem('global-admin-workbench-app-token');
    localStorage.removeItem('global-admin-workbench-auth-status');
    navigate('/login');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
