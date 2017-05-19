import { push } from 'react-router-redux';
import { urlPaths } from '../../routes';
import { setWait } from '../Screen/screenActions';

export const SELECT_AMOUNT = 'SELECT_AMOUNT';
export const CONFIRM_AMOUNT = 'CONFIRM_AMOUNT';
export const CLEAR_AMOUNT = 'CLEAR_AMOUNT';
export const AMOUNT_DIGIT_ENTER = 'AMOUNT_DIGIT_ENTER';
export const AMOUNT_BACKSPACE = 'PIN_BACAMOUNT_BACKSPACEKSPACE';
export const AMOUNT_MANUAL = 'AMOUNT_MANUAL';

export const enterAmountDigit = data => ({
  type: AMOUNT_DIGIT_ENTER,
  payload: data,
});

export const correctAmountDigit = () => ({
  type: AMOUNT_BACKSPACE,
});

export const turnCashInput = flag => ({
  type: AMOUNT_MANUAL,
  payload: flag,
});

export const clearCash = () => ({
  type: CLEAR_AMOUNT,
});

export const selectCashOption = data => ({
  type: SELECT_AMOUNT,
  payload: data,
});

export const askForCustom = () => (dispatch) => {
  dispatch(push(urlPaths.withdrawalCustom));
};

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
