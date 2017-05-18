import React, { PureComponent } from 'react';
import _noop from 'lodash/noop';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Keypad from 'components/Keypad';
import Receiver from 'components/Receiver';
import YNpanel from 'components/YNpanel';

import {
  confirmInput,
  startInteractive,
  stopInteractive,
  insertCard,
  askForPin,
} from './hardwareActions';
import { enterPinDigit, correctPinDigit, checkPin } from '../Pin/pinActions';
import { confirmWithdrawal } from '../Cash/cashActions';

import styles from './hardware.scss';

class Hardware extends PureComponent {
  handleConfirm() {
    const {
      interactiveMode,
      pinStatus,
      cashConfirmed,
      onConfirm,
      handlePin,
      giveCash,
    } = this.props;

    // I'm not sure harware should be so smart
    if (interactiveMode) {
      onConfirm();
      if (pinStatus === 'input') {
        handlePin();
      } else if (!cashConfirmed) {
        giveCash();
      }
    }
  }

  render() {
    const {
      plugged,
      onCardInserted, onKeyPressed, onDelPressed,
    } = this.props;
    const handleConfirm = () => this.handleConfirm();

    return (
      <div className={styles.hardware}>
        <Keypad handleKey={onKeyPressed} handleDel={onDelPressed} />
        <YNpanel onCancel={_noop} onConfirm={handleConfirm} />
        <Receiver isPlugged={plugged} handlePlug={onCardInserted} />
      </div>
    );
  }
}

Hardware.propTypes = {
  interactiveMode: PropTypes.bool.isRequired,
  plugged: PropTypes.bool.isRequired,
  cashConfirmed: PropTypes.bool.isRequired,
  pinStatus: PropTypes.string.isRequired,
  handlePin: PropTypes.func.isRequired,
  giveCash: PropTypes.func.isRequired,
  onCardInserted: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onKeyPressed: PropTypes.func.isRequired,
  onDelPressed: PropTypes.func.isRequired,
};

const connector = connect(
  ({ hardware, pin: { status }, cash: { confirmed } }) =>
    ({ ...hardware, pinStatus: status, cashConfirmed: confirmed }),
  dispatch => ({
    giveCash: () => dispatch(confirmWithdrawal()),
    handlePin: () => dispatch(checkPin()),
    onConfirm: () => {
      dispatch(confirmInput());
      dispatch(stopInteractive());
    },
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
