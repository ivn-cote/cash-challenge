import { push } from 'react-router-redux';
import { urlPaths } from '../../routes';

export const CARD_INSERTED = 'CARD_INSERTED';
export const INTERACTIVE_ON = 'INTERACTIVE_ON';
export const INTERACTIVE_OFF = 'INTERACTIVE_OFF';
export const CONFIRM = 'CONFIRM';

export const confirmInput = () => ({
  type: CONFIRM,
});

export const insertCard = () => ({
  type: CARD_INSERTED,
});

export const startInteractive = () => ({
  type: INTERACTIVE_ON,
});

export const stopInteractive = () => ({
  type: INTERACTIVE_OFF,
});

export const askForPin = () => (dispatch) => {
  dispatch(push(urlPaths.pin));
};
