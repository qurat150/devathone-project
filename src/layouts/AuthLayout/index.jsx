import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = ({ isLoggedIn }) => {
  if (isLoggedIn) return <Navigate to="/" />;

  return <Outlet />;
};

export default AuthLayout;

AuthLayout.propTypes = {
  isLoggedIn: PropTypes.bool,
};
