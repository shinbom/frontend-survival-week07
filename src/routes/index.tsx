import App from '../App';
import Order from '../components/Order/Order';

const Routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/order',
    element: <Order />,
  },
];

export default Routes;