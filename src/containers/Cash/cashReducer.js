import _ from 'lodash';

import {
  SELECT_AMOUNT,
} from './cashActions';

const initialState = {
  amount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_AMOUNT:
      return _.assign({}, state, { amount: action.payload });
    default:
      return state;
  }
};
