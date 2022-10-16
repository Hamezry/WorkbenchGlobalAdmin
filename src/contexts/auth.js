import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const auth_status = localStorage.getItem('workbench-auth-status');
  const [isAuthenticated, setAuthenticated] = useState(
    auth_status ? true : false
  );

  function signin(data) {
    localStorage.setItem('workbench-app-token', data.token);
    setAuthenticated(true);
    localStorage.setItem('workbench-auth-status', 'authenticated');
    navigate('/');
  }

  function signout() {
    localStorage.removeItem('workbench-app-token');
    localStorage.removeItem('workbench-auth-status');
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
