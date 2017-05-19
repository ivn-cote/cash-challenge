import React from 'react';
import Helmet from 'react-helmet';

import styles from './home.scss';

export const Home = () => (
  <div className={styles.home}>
    <Helmet title="Start page" />

    <h3>IVN BANK</h3>
    <p>You can get money in cash here! Please insert your card</p>
  </div>
);

export default Home;
