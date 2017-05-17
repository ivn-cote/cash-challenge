/* eslint-disable react/sort-comp */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import type { Connector } from 'react-redux';
import Helmet from 'react-helmet';

// import * as action from './action';
// import type { Home as HomeType, Dispatch, Reducer } from '../../types';
import styles from './styles.scss';


// Export this for unit testing more easily
export class Home extends PureComponent {
  static defaultProps: {
    home: {
      readyStatus: 'USERS_INVALID',
      list: null,
    },
    fetchUsersIfNeeded: () => {},
  };

  render() {
    return (
      <div className={styles.Home}>
        <Helmet title="Home" />
        <h3>IVN BANK</h3>
        <p>You can get money in cash here! Please insert your card</p>
      </div>
    );
  }
}

const connector = connect(
  ({ home }) => ({ home }),
);

export default connector(Home);
