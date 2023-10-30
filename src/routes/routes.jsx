import AuthLayout from 'layouts/AuthLayout';
import MainLayout from 'layouts/MainLayout';
import ErrorLayout from 'layouts/ErrorLayout';
import { loginRoutes } from './auth';
import UserDashboard from 'pages/Dashboard/Users';

export const routes = (auth) => [
  {
    path: '/',
    element: <MainLayout isLoggedIn={auth.isLoggedIn} />,
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout isLoggedIn={auth.isLoggedIn} />,
    children: loginRoutes,
  },
  {
    path: '*',
    element: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <h1>404 not found</h1>,
      },
    ],
  },
];
