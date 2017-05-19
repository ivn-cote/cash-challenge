import { push } from 'react-router-redux';
import { urlPaths } from '../../routes';

export const CARD_INSERTED = 'CARD_INSERTED';
export const CARD_EJECTED = 'CARD_EJECTED';
export const INTERACTIVE_ON = 'INTERACTIVE_ON';
export const INTERACTIVE_OFF = 'INTERACTIVE_OFF';
export const CONFIRM = 'CONFIRM';
export const ABORT = 'ABORT';

export const toggleAbort = mode => ({
  type: ABORT,
  payload: mode,
});

export const confirmInput = () => ({
  type: CONFIRM,
});

export const insertCard = () => ({
  type: CARD_INSERTED,
});

export const ejectCard = () => ({
  type: CARD_EJECTED,
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

export const askForAbort = () => (dispatch) => {
  dispatch(push(urlPaths.abort));
};
