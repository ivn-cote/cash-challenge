import _ from 'lodash';

import {
  CLEAR_AMOUNT,
  SELECT_AMOUNT,
  CONFIRM_AMOUNT,
  AMOUNT_DIGIT_ENTER,
  AMOUNT_BACKSPACE,
  AMOUNT_MANUAL,
} from './cashActions';

const initialState = {
  amount: 0,
  customAmount: '',
  customAmountStatus: 'off',
  confirmed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AMOUNT_DIGIT_ENTER: {
      const customAmount = state.customAmount + action.payload;
      return _.assign({}, state, { customAmount, amount: customAmount * 1 });
    }
    case AMOUNT_BACKSPACE: {
      const amount = Math.floor(state.customAmount / 10);
      return _.assign({}, state, { customAmount: `${amount || ''}`, amount });
    }
    case AMOUNT_MANUAL:
      return _.assign({}, state, { customAmountStatus: action.payload ? 'on' : 'off' });
    case CLEAR_AMOUNT:
      return initialState;
    case SELECT_AMOUNT:
      return _.assign({}, state, { amount: action.payload });
    case CONFIRM_AMOUNT:
      return _.assign({}, state, { confirmed: true });
    default:
      return state;
  }
};
