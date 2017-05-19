import { push } from 'react-router-redux';
import { urlPaths } from '../../routes';
import { setWait } from '../Screen/screenActions';

export const SELECT_AMOUNT = 'SELECT_AMOUNT';
export const CONFIRM_AMOUNT = 'CONFIRM_AMOUNT';
export const CLEAR_AMOUNT = 'CLEAR_AMOUNT';

export const clearCash = () => ({
  type: CLEAR_AMOUNT,
});

export const selectCashOption = data => ({
  type: SELECT_AMOUNT,
  payload: data,
});

export const confirmWithdrawal = laterAction => (dispatch) => {
  dispatch(setWait(true));
  // assume here that we approve any withdrawal amount
  // it should be checked similar to PIN check, see pinActions.js
  setTimeout(
    () => {
      dispatch(setWait(false));
      dispatch({ type: CONFIRM_AMOUNT });
    },
    3000,
  );
  setTimeout(
    () => {
      dispatch(laterAction());
      dispatch(push(urlPaths.home));
    },
    5000,
  );
};
