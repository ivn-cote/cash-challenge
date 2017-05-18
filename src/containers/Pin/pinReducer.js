import _ from 'lodash';

import {
  PIN_DIGIT_ENTER,
  PIN_BACKSPACE,
  PIN_CHECK_STARTED,
  PIN_CHECK_SUCCESS,
  PIN_CHECK_FAILURE,
} from './pinActions';

const initialState = {
  pinCode: [],
  errors: {},
  status: 'input',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PIN_DIGIT_ENTER:
      return _.assign({}, state, { pinCode: state.pinCode.concat(action.payload) });
    case PIN_BACKSPACE:
      return _.assign({}, state, { pinCode: state.pinCode.slice(0, -1), status: 'input' });
    case PIN_CHECK_STARTED:
      return _.assign({}, state, { status: 'pending' });
    case PIN_CHECK_SUCCESS:
      return _.assign({}, state, { status: 'success' });
    case PIN_CHECK_FAILURE:
      return _.assign({}, state, { status: 'failure' });
    default:
      return state;
  }
};
