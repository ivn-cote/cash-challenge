import { push } from 'react-router-redux';
import { urlPaths } from '../../routes';

export const CARD_INSERTED = 'CARD_INSERTED';

export const insertCard = () => ({
  type: CARD_INSERTED,
});

export const askForPin = () => (dispatch) => {
  dispatch(push(urlPaths.pin));
};
