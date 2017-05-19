import React from 'react';
import Helmet from 'react-helmet';

import styles from './notFound.scss';

export default () => (
  <div className={styles.notFound}>
    <Helmet title="404" />

    <p>Oops, Page was not found!</p>
  </div>
);
