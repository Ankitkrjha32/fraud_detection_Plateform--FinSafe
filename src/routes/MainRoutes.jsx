import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import MinimalLayout from 'layout/MinimalLayout';
import ProtectedRoute from 'components/ProtectedRoute';

// Component imports
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const Home = Loadable(lazy(() => import('pages/home')));
const AuthLogin = Loadable(lazy(() => import('pages/authentication/auth-forms/AuthLogin')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/auth-forms/AuthRegister')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: <AuthLogin />
        },
        {
          path: 'register',
          element: <AuthRegister />
        }
      ]
    },
    {
      path: 'dashboard',
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '',
          element: <DashboardDefault />
        }
      ]
    }
  ]
};

export default MainRoutes;
