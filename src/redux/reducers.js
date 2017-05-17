/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import home from '../containers/Home/reducer';
import hardware from '../containers/Hardware/hardwareReducer';

export default combineReducers({
  home,
  hardware,
  router,
});
