import React from 'react';
import _partial from 'lodash/partial';
import _noop from 'lodash/noop';

import styles from './keypad.scss';


const Key = ({ label, onClick = _noop }) => (
  <button className={styles.key} onClick={_partial(onClick, label)}>
    {label}
  </button>
);

const Keypad = ({ handleKey }) => (
  <div className={styles.keypad}>
    {[...new Array(10)].map((_, ind) => <Key key={ind} label={ind} onClick={handleKey} />)}
  </div>
);

export default Keypad;
