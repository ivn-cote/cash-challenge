import HomePage from './containers/Home';
import AbortPage from './containers/Abort';
import PinPage from './containers/Pin';
import CashPage from './containers/Cash';
import CustomCashPage from './containers/CustomCash';
import NotFoundPage from './containers/NotFound';

export const urlPaths = {
  home: '/',
  abort: '/abort',
  pin: '/pin',
  withdrawal: '/withdrawal',
  withdrawalCustom: '/withdrawal/custom',
};

export default [
  {
    path: urlPaths.home,
    exact: true,
    component: HomePage,
  },
  {
    path: urlPaths.abort,
    exact: true,
    component: AbortPage,
  },
  {
    path: urlPaths.pin,
    exact: true,
    component: PinPage,
  },
  {
    path: urlPaths.withdrawal,
    exact: true,
    component: CashPage,
  },
  {
    path: urlPaths.withdrawalCustom,
    exact: true,
    component: CustomCashPage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
