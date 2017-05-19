import _ from 'lodash';

import {
  ABORT,
  CONFIRM,
  CARD_INSERTED,
  CARD_EJECTED,
  INTERACTIVE_ON,
  INTERACTIVE_OFF,
} from './hardwareActions';

const initialState = {
  plugged: false,
  confirmed: false,
  interactiveMode: false,
  abortMode: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CARD_INSERTED:
      return _.assign({}, state, { plugged: true });
    case CARD_EJECTED:
      return initialState;
    case INTERACTIVE_ON:
      return _.assign({}, state, { interactiveMode: true });
    case INTERACTIVE_OFF:
      return _.assign({}, state, { interactiveMode: false, confirmed: false });
    case CONFIRM:
      return _.assign({}, state, { confirmed: true });
    case ABORT:
      return _.assign({}, state, { abortMode: action.payload });
    default:
      return state;
  }
};
