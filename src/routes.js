import { Navigate } from 'react-router-dom';
import DashboardLayout from '../src/components/DashboardLayout';
import MainLayout from '../src/components/MainLayout';
import Account from '../src/pages/Account';
import CustomerList from '../src/pages/CustomerList';
import Dashboard from '../src/pages/Dashboard';
import Login from '../src/pages/Login';
import NotFound from '../src/pages/NotFound';
import ProductList from '../src/pages/ProductList';
import Register from '../src/pages/Register';
import Settings from '../src/pages/Settings';
import SignIn from './component/auth/signIn'
import UpdateCustomer from './component/customer/updateCustomer'

const routes = (authState) => [
  {
    path: 'app',
    //element: <DashboardLayout />,
    element: authState=='LoggedIn' ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: 'updatecustomer/:id', element: <UpdateCustomer /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signin', element: <SignIn /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
