import _ from 'lodash';

import {
  WAIT_MODE,
} from './screenActions';

const initialState = {
  waitMode: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WAIT_MODE:
      return _.assign({}, state, { waitMode: action.payload });
    default:
      return state;
  }
};
