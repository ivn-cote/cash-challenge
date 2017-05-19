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
import { confirmWithdrawal, enterAmountDigit, correctAmountDigit } from '../Cash/cashActions';

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
      customAmountStatus,
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
      if (pinStatus === 'input') {
        handlePin(onConfirm);
      } else if (customAmountStatus === 'on') {
        onContinue();
      } else if (!cashConfirmed) {
        giveCash();
        onConfirm();
      }
    }
  }

  render() {
    const {
      pinStatus,
      plugged,
      onCardInserted, onPinKeyPressed, onPinDelPressed, onAmountKeyPressed, onAmountDelPressed,
    } = this.props;
    const isPinActive = pinStatus === 'input';

    // I prefer @autobind decorators in real production projects
    const handleConfirm = () => this.handleConfirm();
    const handleCancel = () => this.handleCancel();

    return (
      <div className={styles.hardware}>
        <Keypad
          handleKey={isPinActive ? onPinKeyPressed : onAmountKeyPressed}
          handleDel={isPinActive ? onPinDelPressed : onAmountDelPressed}
        />
        <YNpanel onCancel={handleCancel} onConfirm={handleConfirm} />
        <Receiver isPlugged={plugged} handlePlug={onCardInserted} />
      </div>
    );
  }
}

Hardware.propTypes = {
  customAmountStatus: PropTypes.string.isRequired,
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
  onPinKeyPressed: PropTypes.func.isRequired,
  onAmountKeyPressed: PropTypes.func.isRequired,
  onPinDelPressed: PropTypes.func.isRequired,
  onAmountDelPressed: PropTypes.func.isRequired,
};

const connector = connect(
  ({
    hardware,
    pin: { status },
    cash: { confirmed, customAmountStatus },
  }) => ({
    ...hardware,
    pinStatus: status,
    cashConfirmed: confirmed,
    customAmountStatus,
  }),

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
      dispatch(confirmWithdrawal(ejectCard));
    },
    handlePin: onOk => dispatch(checkPin(onOk)),
    onConfirm: () => {
      dispatch(confirmInput());
      dispatch(stopInteractive());
    },
    onPinDelPressed: () => dispatch(correctPinDigit()),
    onAmountDelPressed: () => dispatch(correctAmountDigit()),
    onPinKeyPressed: data => dispatch(enterPinDigit(data)),
    onAmountKeyPressed: data => dispatch(enterAmountDigit(data)),
    onCardInserted: () => {
      dispatch(insertCard());
      dispatch(askForPin());
      dispatch(startInteractive());
    },
  }),
);

export default connector(Hardware);
