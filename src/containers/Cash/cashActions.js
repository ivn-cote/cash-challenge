import { push } from 'react-router-redux';
import { urlPaths } from '../../routes';

export const SELECT_AMOUNT = 'SELECT_AMOUNT';
export const CONFIRM_AMOUNT = 'CONFIRM_AMOUNT';

export const selectCashOption = data => ({
  type: SELECT_AMOUNT,
  payload: data,
});

export const confirmWithdrawal = () => (dispatch) => {
  dispatch({ type: CONFIRM_AMOUNT });
  setTimeout(
    () => dispatch(push(urlPaths.home)),
    3000,
  );
};
