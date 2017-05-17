import React from 'react';
import { PropTypes } from 'prop-types';
import _partial from 'lodash/partial';
import _noop from 'lodash/noop';

import styles from './keypad.scss';


const Key = ({ label, onClick }) => (
  <button className={styles.key} onClick={_partial(onClick, label)}>
    {label}
  </button>
);

Key.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Key.defaultProps = {
  onClick: _noop,
};

const Keypad = ({ handleKey }) => (
  <div className={styles.keypad}>
    {[...new Array(10)].map((_, ind) => <Key key={ind} label={`${ind}`} onClick={handleKey} />)}
  </div>
);

Keypad.propTypes = {
  handleKey: PropTypes.func.isRequired,
};

export default Keypad;
