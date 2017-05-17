/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import hardware from '../containers/Hardware/hardwareReducer';

export default combineReducers({
  hardware,
  router,
});
