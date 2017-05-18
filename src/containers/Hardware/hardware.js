import React from 'react';
import _noop from 'lodash/noop';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Keypad from 'components/Keypad';
import Receiver from 'components/Receiver';
import YNpanel from 'components/YNpanel';

import {
  confirmInput,
  startInteractive,
  insertCard,
  askForPin,
} from './hardwareActions';
import { enterPinDigit, correctPinDigit, checkPin } from '../Pin/pinActions';
import styles from './hardware.scss';

const Hardware = (props) => {
  const {
    plugged, interactiveMode,
    onConfirm, onCardInserted, onKeyPressed, onDelPressed,
    handlePin,
  } = props;
  const handleConfirm = interactiveMode ? () => onConfirm() && handlePin() : _noop;

  return (
    <div className={styles.hardware}>
      <Keypad handleKey={onKeyPressed} handleDel={onDelPressed} />
      <YNpanel onCancel={_noop} onConfirm={handleConfirm} />
      <Receiver isPlugged={plugged} handlePlug={onCardInserted} />
    </div>
  );
};

Hardware.propTypes = {
  interactiveMode: PropTypes.bool.isRequired,
  plugged: PropTypes.bool.isRequired,
  handlePin: PropTypes.func.isRequired,
  onCardInserted: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onKeyPressed: PropTypes.func.isRequired,
  onDelPressed: PropTypes.func.isRequired,
};

const connector = connect(
  ({ hardware }) => ({ ...hardware }),
  dispatch => ({
    handlePin: () => dispatch(checkPin()),
    onConfirm: () => dispatch(confirmInput()),
    onDelPressed: () => dispatch(correctPinDigit()),
    onKeyPressed: data => dispatch(enterPinDigit(data)),
    onCardInserted: () => {
      dispatch(insertCard());
      dispatch(askForPin());
      dispatch(startInteractive());
    },
  }),
);

export default connector(Hardware);
