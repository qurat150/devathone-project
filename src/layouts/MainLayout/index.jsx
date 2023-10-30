import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const MainLayout = ({ isLoggedIn }) => {
  // const isLoggedIn1 = sessionStorage.getItem('loggedIn');
  // console.log('login: ', isLoggedIn1);
  if (!isLoggedIn) return <Navigate to="/login" />;

  return <Outlet />;
};

export default MainLayout;

MainLayout.propTypes = {
  isLoggedIn: PropTypes.bool,
};
