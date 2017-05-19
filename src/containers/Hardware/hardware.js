import React, { PureComponent } from 'react';
import { goBack, push } from 'react-router-redux';
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
  ejectCard,
  askForPin,
  askForAbort,
} from './hardwareActions';
import { enterPinDigit, correctPinDigit, checkPin } from '../Pin/pinActions';
import { confirmWithdrawal } from '../Cash/cashActions';

import styles from './hardware.scss';

class Hardware extends PureComponent {
  // I'm not sure harware should be so smart
  handleCancel() {
    const {
      abortMode,
      onCancel,
      onAbort,
    } = this.props;

    if (!abortMode) {
      onCancel();
    } else {
      onAbort();
    }
  }

  // I'm not sure harware should be so smart
  handleConfirm() {
    const {
      interactiveMode,
      pinStatus,
      cashConfirmed,
      onConfirm,
      handlePin,
      giveCash,
      abortMode,
      onContinue,
    } = this.props;

    if (abortMode) {
      onContinue();
      return;
    }

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
    // I prefer @autobind decorators in real production projects
    const handleConfirm = () => this.handleConfirm();
    const handleCancel = () => this.handleCancel();

    return (
      <div className={styles.hardware}>
        <Keypad handleKey={onKeyPressed} handleDel={onDelPressed} />
        <YNpanel onCancel={handleCancel} onConfirm={handleConfirm} />
        <Receiver isPlugged={plugged} handlePlug={onCardInserted} />
      </div>
    );
  }
}

Hardware.propTypes = {
  abortMode: PropTypes.bool.isRequired,
  interactiveMode: PropTypes.bool.isRequired,
  plugged: PropTypes.bool.isRequired,
  cashConfirmed: PropTypes.bool.isRequired,
  pinStatus: PropTypes.string.isRequired,
  handlePin: PropTypes.func.isRequired,
  giveCash: PropTypes.func.isRequired,
  onCardInserted: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onAbort: PropTypes.func.isRequired,
  onKeyPressed: PropTypes.func.isRequired,
  onDelPressed: PropTypes.func.isRequired,
};

const connector = connect(
  ({ hardware, pin: { status }, cash: { confirmed } }) =>
    ({ ...hardware, pinStatus: status, cashConfirmed: confirmed }),
  dispatch => ({
    onCancel: () => {
      dispatch(askForAbort());
    },
    onContinue: () => {
      dispatch(goBack());
    },
    onAbort: () => {
      dispatch(push('/'));
      dispatch(ejectCard());
    },
    giveCash: () => {
      dispatch(confirmWithdrawal());
      dispatch(ejectCard());
    },
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
