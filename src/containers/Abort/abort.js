import React from 'react';
import Helmet from 'react-helmet';

import styles from './abort.scss';

export const Abort = () => (
  <div className={styles.abort}>
    <Helmet title="Abort operations" />

    <h2>Are you sure you want to cancel current process?</h2>
    <p>Press Cancel again to get your card back.
      Otherwise, press OK button to return to the previous screen.</p>
  </div>
);

export default Abort;
