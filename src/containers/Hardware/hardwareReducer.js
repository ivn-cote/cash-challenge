import _ from 'lodash';

import {
  CARD_INSERTED,
} from './hardwareActions';

const initialState = {
  plugged: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CARD_INSERTED:
      return _.assign({}, state, { plugged: true });
    default:
      return state;
  }
};
