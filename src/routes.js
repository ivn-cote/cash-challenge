/* @flow */

// import type { Dispatch } from './types';
import HomePage from './containers/Home';
import NotFoundPage from './containers/NotFound';

export const urlPaths = {
  home: '/',
  pin: '/pin',
};

export default [
  {
    path: urlPaths.home,
    exact: true,
    component: HomePage,  // Add your route here
    // loadData: (dispatch: Dispatch) => Promise.all([
    //   dispatch(fetchUsersIfNeeded()), // Register your server-side call action(s) here
    // ]),
  },
  {
    path: urlPaths.pin,
    exact: true,
    component: HomePage,  // Add your route here
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
