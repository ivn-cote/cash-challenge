import { push } from 'react-router-redux';
import { urlPaths } from '../../routes';

export const SELECT_AMOUNT = 'SELECT_AMOUNT';

export const selectCashOption = data => ({
  type: SELECT_AMOUNT,
  payload: data,
});

export const confirmWithdrawal = () => (dispatch) => {
  dispatch(push(urlPaths.home));
};
