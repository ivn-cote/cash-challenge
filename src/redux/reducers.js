/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import hardware from '../containers/Hardware/hardwareReducer';
import pin from '../containers/Pin/pinReducer';

export default combineReducers({
  hardware,
  pin,
  router,
});
