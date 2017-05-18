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

export const checkPin = () => (dispatch) => {
  dispatch({ type: PIN_CHECK_STARTED });
};
