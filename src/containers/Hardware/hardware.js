import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Keypad from 'components/Keypad';
import Receiver from 'components/Receiver';

import * as actions from './hardwareActions';
import { enterPinDigit } from '../Pin/pinActions';
import styles from './hardware.scss';

const Hardware = ({ plugged, insertCard, onKeyPressed }) => (
  <div className={styles.hardware}>
    <Keypad handleKey={onKeyPressed} />
    <Receiver isPlugged={plugged} handlePlug={insertCard} />
  </div>
);

Hardware.propTypes = {
  plugged: PropTypes.bool.isRequired,
  insertCard: PropTypes.func.isRequired,
  onKeyPressed: PropTypes.func.isRequired,
};

const connector = connect(
  ({ hardware }) => ({ ...hardware }),
  dispatch => ({
    onKeyPressed: data => dispatch(enterPinDigit(data)),
    insertCard: () => dispatch(actions.insertCard()) && dispatch(actions.askForPin()),
  }),
);

export default connector(Hardware);
