/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import hardware from '../containers/Hardware/hardwareReducer';
import pin from '../containers/Pin/pinReducer';
import cash from '../containers/Cash/cashReducer';

export default combineReducers({
  hardware,
  pin,
  cash,
  router,
});
