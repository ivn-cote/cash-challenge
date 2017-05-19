/* @flow */

// import type { Dispatch } from './types';
import HomePage from './containers/Home';
import AbortPage from './containers/Abort';
import PinPage from './containers/Pin';
import CashPage from './containers/Cash';
import NotFoundPage from './containers/NotFound';

export const urlPaths = {
  home: '/',
  abort: '/abort',
  pin: '/pin',
  withdrawal: '/withdrawal',
};

export default [
  {
    path: urlPaths.home,
    exact: true,
    component: HomePage,
    // loadData: (dispatch: Dispatch) => Promise.all([
    //   dispatch(fetchUsersIfNeeded()), // Register your server-side call action(s) here
    // ]),
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
    path: '*',
    component: NotFoundPage,
  },
];
