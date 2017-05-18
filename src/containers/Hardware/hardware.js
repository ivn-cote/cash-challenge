import React from 'react';
import _noop from 'lodash/noop';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Keypad from 'components/Keypad';
import Receiver from 'components/Receiver';
import YNpanel from 'components/YNpanel';

import * as actions from './hardwareActions';
import { enterPinDigit, correctPinDigit } from '../Pin/pinActions';
import styles from './hardware.scss';

const Hardware = ({ plugged, insertCard, onKeyPressed, onDelPressed }) => (
  <div className={styles.hardware}>
    <Keypad handleKey={onKeyPressed} handleDel={onDelPressed} />
    <YNpanel onCancel={_noop} onConfirm={_noop} />
    <Receiver isPlugged={plugged} handlePlug={insertCard} />
  </div>
);

Hardware.propTypes = {
  plugged: PropTypes.bool.isRequired,
  insertCard: PropTypes.func.isRequired,
  onKeyPressed: PropTypes.func.isRequired,
  onDelPressed: PropTypes.func.isRequired,
};

const connector = connect(
  ({ hardware }) => ({ ...hardware }),
  dispatch => ({
    onDelPressed: () => dispatch(correctPinDigit()),
    onKeyPressed: data => dispatch(enterPinDigit(data)),
    insertCard: () => dispatch(actions.insertCard()) && dispatch(actions.askForPin()),
  }),
);

export default connector(Hardware);
