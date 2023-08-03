import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = () => {

    const token = localStorage.getItem('token');
    return token !== null; // Return true if the user is authenticated, otherwise false
  };

  return isAuthenticated() ? <Route element={<Component />} {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
