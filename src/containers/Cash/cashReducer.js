import _ from 'lodash';

import {
  SELECT_AMOUNT,
  CONFIRM_AMOUNT,
} from './cashActions';

const initialState = {
  amount: 0,
  confirmed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_AMOUNT:
      return _.assign({}, state, { amount: action.payload });
    case CONFIRM_AMOUNT:
      return _.assign({}, state, { confirmed: true });
    default:
      return state;
  }
};
