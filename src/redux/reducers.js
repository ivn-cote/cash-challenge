import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import screen from '../containers/Screen/screenReducer';
import hardware from '../containers/Hardware/hardwareReducer';
import pin from '../containers/Pin/pinReducer';
import cash from '../containers/Cash/cashReducer';

export default combineReducers({
  screen,
  hardware,
  pin,
  cash,
  router,
});
