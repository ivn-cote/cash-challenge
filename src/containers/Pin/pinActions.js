import { push } from 'react-router-redux';
import { urlPaths } from '../../routes';

import { setWait } from '../Screen/screenActions';

export const PIN_DIGIT_ENTER = 'PIN_DIGIT_ENTER';
export const PIN_BACKSPACE = 'PIN_BACKSPACE';
export const PIN_CHECK_STARTED = 'PIN_CHECK_STARTED';
export const PIN_CHECK_SUCCESS = 'PIN_CHECK_SUCCESS';
export const PIN_CHECK_FAILURE = 'PIN_CHECK_FAILURE';

export const enterPinDigit = data => ({
  type: PIN_DIGIT_ENTER,
  payload: data,
});

export const correctPinDigit = () => ({
  type: PIN_BACKSPACE,
});

const pinErrMsg = 'PIN does not match, try again';
const VALID_PIN = '1234';

// we need to limit attempts to enter pin
const pinChecker = pinCode =>
  new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (pinCode === VALID_PIN) {
          resolve();
        } else {
          reject(pinErrMsg);
        }
      },
      2000,
    );
  });

export const checkPin = (callback) => (dispatch, getState) => {
  dispatch({ type: PIN_CHECK_STARTED });
  dispatch(setWait(true));

  return pinChecker(getState().pin.pinCode.join(''))
    .then(() => {
      dispatch(setWait(false));
      dispatch({ type: PIN_CHECK_SUCCESS });
      dispatch(push(urlPaths.withdrawal));
      callback();
    })
    .catch((errMsg) => {
      dispatch(setWait(false));
      dispatch({
        type: PIN_CHECK_FAILURE,
        payload: errMsg,
      });
    });
};
