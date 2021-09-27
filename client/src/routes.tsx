import { RouteObject } from 'react-router';
import CheckoutPage from './pages/checkout';
import HomePage from './pages/home';
import OrderPage from './pages/order';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'checkout',
    element: <CheckoutPage />,
  },
  {
    path: 'order',
    element: <OrderPage />,
  },
];

export default routes;
