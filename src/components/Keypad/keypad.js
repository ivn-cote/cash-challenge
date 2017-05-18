import React from 'react';
import { PropTypes } from 'prop-types';
import _partial from 'lodash/partial';
import _noop from 'lodash/noop';

import styles from './keypad.scss';


const Key = ({ label, onClick, className }) => (
  <button className={[styles.key, className].join(' ')} onClick={_partial(onClick, label)}>
    {label}
  </button>
);

Key.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Key.defaultProps = {
  className: '',
};

Key.defaultProps = {
  onClick: _noop,
};

const Keypad = ({ handleKey }) => (
  <div className={styles.keypad}>
    {[...new Array(10)].map((_, ind) => <Key key={ind} label={`${(ind + 1) % 10}`} onClick={handleKey} />)}
    <Key label="del" onClick={_noop} className={styles.delBtn} />
  </div>
);

Keypad.propTypes = {
  handleKey: PropTypes.func.isRequired,
};

export default Keypad;
