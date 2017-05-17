import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Keypad from 'components/Keypad';
import Receiver from 'components/Receiver';

import * as actions from './hardwareActions';
import styles from './hardware.scss';

const Hardware = ({ plugged, insertCard }) => (
  <div className={styles.hardware}>
    <Keypad />
    <Receiver isPlugged={plugged} handlePlug={insertCard} />
  </div>
);

Hardware.propTypes = {
  plugged: PropTypes.bool.isRequired,
  insertCard: PropTypes.func.isRequired,
};

const connector = connect(
  ({ hardware }) => ({ ...hardware }),
  dispatch => ({
    insertCard: () => dispatch(actions.insertCard()) && dispatch(actions.askForPin()),
  }),
);

export default connector(Hardware);
