import React from 'react';

import styles from './screen.scss';

export default ({ children }) => (
  <div className={styles.screen}>
    {children}
  </div>
);
