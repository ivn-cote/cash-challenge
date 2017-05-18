import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './ynpanel.scss';

const YNpanel = ({ onConfirm, onCancel }) => (
  <div className={styles.ynpanel}>
    <button className={styles.okBtn} onClick={onConfirm}>OK</button>
    <button className={styles.cancelBtn} onClick={onCancel}>Cancel</button>
  </div>
);

YNpanel.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default YNpanel;
