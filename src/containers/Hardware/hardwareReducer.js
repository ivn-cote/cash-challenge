import _ from 'lodash';

import {
  CONFIRM,
  CARD_INSERTED,
  INTERACTIVE_ON,
  INTERACTIVE_OFF,
} from './hardwareActions';

const initialState = {
  plugged: false,
  confirmed: false,
  interactiveMode: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CARD_INSERTED:
      return _.assign({}, state, { plugged: true });
    case INTERACTIVE_ON:
      return _.assign({}, state, { interactiveMode: true });
    case INTERACTIVE_OFF:
      return _.assign({}, state, { interactiveMode: false, confirmed: false });
    case CONFIRM:
      return _.assign({}, state, { confirmed: true });
    default:
      return state;
  }
};
